import { useContext, useEffect, useState } from "react";
// import useEnrolledClasses from "../../../Hooks/useEnrolledClasses";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import Swal from "sweetalert2";

const PopularClasses = () => {
	const [approvedClasses, setApprovedClasses] = useState([])
	// const [enrollbasedClasses] = useEnrolledClasses()
	const {user} = useContext(AuthContext)
	const navigate = useNavigate()
	const [axiosSecure] = useAxiosSecure()
	const location = useLocation()
	const [, refetch] = useSelectedClasses()
	const [isAdmin] = useAdmin()
	const [isInstructor] = useInstructor()
	const [enrollbasedClasses, setEnrollbasedClasses] = useState([])

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_BASE_URL}/enrollbasedClasses`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setEnrollbasedClasses(data)
		})
	}, [])


	useEffect(() => {
		if(enrollbasedClasses && enrollbasedClasses.length > 0){


			const approvedClasses = enrollbasedClasses.filter(cl => cl.status === 'Approved')
			console.log(approvedClasses);
			setApprovedClasses(approvedClasses)
		}
	},[enrollbasedClasses])



	const handleSelectedClasses = approvedClass => {
		console.log(approvedClass);
		const student = {
			studentName: user?.displayName,
			studentPhoto: user?.photoURL,
			studentEmail: user?.email
		}
		const {_id, name, image, seats, price, category, status, details, enrolled, instructorInfo} = approvedClass;

		const selectedClass = {classId:_id, name, image, seats, price, category, status, details, enrolled, instructorInfo, studentInfo: student}


		if(user){
			axiosSecure.post('/selectedClasses', selectedClass)
			.then(res => {
				console.log(res.data);
				if(res.data.insertedId){
					refetch();

					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "This class has been Selected by you",
						showConfirmButton: false,
						timer: 1500
					});
				}
			})
		}
		else{
			Swal.fire({
				title: "Pleaes Login for Select this class",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login Now!"
			}).then((result) => {
				if (result.isConfirmed) {
				navigate('/login', {state: { from: location }})
				}
			});
		}

	}
	return (
		<div className="pt-10 md:pt-20 pb-10">
			<h1 className="text-2xl md:text-3xl text-white font-extrabold text-center">Popular Classes</h1>

			{/* <button onClick={() => setAsc(!asc)} className={`btn mt-5 ml-1 md:ml-5 font-bold text-white ${asc ? 'bg-fuchsia-950' : 'bg-green-900' } `}>{asc ? <div className="">Show Price High To Low</div> : <div>Show Price Low To High</div> }</button> */}

	{
		approvedClasses && approvedClasses.length > 0 ? (<div className={`pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 md:px-5 ${approvedClasses?.seats == 0? 'bg-red-600 text-white':''}`}>
			{
			approvedClasses.map(approvedClass =>  <div key={approvedClass._id} className='col-span-1 cursor-pointer group shadow-slate-50 shadow-md p-2 rounded-lg text-white'>
				<div className='flex flex-col gap-2 w-full'>
				<div
					className='
					  aspect-square
					  w-full
					  overflow-hidden
					  rounded-xl
					'
				>
					<img
					className='
						object-cover
						h-full
						w-full
						group-hover:scale-110
						transition
					  '
					src={approvedClass.image}
					alt='approvedClass'
					/>
				</div>

				<div>
					<span>Class Name:</span> <span>{approvedClass.name}</span>
				</div>

				<div>
					<span>Instructor Name:</span> <span>{approvedClass.instructorInfo.instructorName}</span>
				</div>
				<div>
					<span>Available Seats: </span>{approvedClass.seats}<span></span>
				</div>
				<div>
					<span>Price: </span>{approvedClass.price} $<span></span>
				</div>
				<div>
					<span>Enrolled: </span>{approvedClass.enrolled}<span></span>
				</div>

				<div>

				{
					isAdmin || isInstructor || approvedClass?.seats == 0 || <button onClick={()=> handleSelectedClasses(approvedClass)} className="btn btn-primary bg-sky-500 text-white">Select Class</button>
				}


{/* <button disabled={approvedClass?.seats == 0 || user?.role === 'admin' || user?.role === 'Instructor'} onClick={()=> handleSelectedClasses(approvedClass)} className="btn btn-primary bg-sky-500 text-white">Select Class</button> */}

				</div>

				</div>
			</div>)
			}
			</div>) : (
			<h1 className="flex justify-center items-center text-red-500 text-3xl font-extrabold mt-7">No Class Available</h1>
		)
	}

		</div>
	);
};

export default PopularClasses;