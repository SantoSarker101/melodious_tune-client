import { useContext, useEffect, useState } from "react";
import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import { motion } from "framer-motion"

const Classes = () => {
	const [approvedClasses, setApprovedClasses] = useState([])
	const [classes, , , asc, setAsc] = useClasses()
	const {user} = useContext(AuthContext)
	const navigate = useNavigate()
	const [axiosSecure] = useAxiosSecure()
	const location = useLocation()
	const [, refetch] = useSelectedClasses()
	const [isAdmin] = useAdmin()
	const [isInstructor] = useInstructor()


	useEffect(() => {
		if(classes && classes.length > 0){
			const approvedClasses = classes.filter(cl => cl.status === 'Approved')
			// console.log(approvedClasses);
			setApprovedClasses(approvedClasses)
		}
	},[classes])



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
		<div className="pt-28 md:pt-32 pb-10">
			<h1 className="text-2xl md:text-3xl text-sky-400 font-extrabold text-center">All Classes</h1>

			<motion.hr initial={{ opacity: 0, y: 500 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }} className="mb-6 w-32 md:w-40 mx-auto border-b-2 border-fuchsia-500" />

			<button onClick={() => setAsc(!asc)} className={`btn mt-5 ml-1 md:ml-5 font-bold text-white ${asc ? 'bg-fuchsia-950' : 'bg-green-900' } `}>{asc ? <div className="">Show Price High To Low</div> : <div>Show Price Low To High</div> }</button>

	{
		approvedClasses && approvedClasses.length > 0 ? (<div className={`pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 md:px-5 ${approvedClasses?.seats == 0? 'bg-red-600 text-white':''}`}>
			{
			approvedClasses.map(approvedClass =>  <motion.div initial={{ opacity: 0, x: 500 }} animate={{ opacity: 1, x:0 }} transition={{duration: 4}} key={approvedClass._id} className='col-span-1 cursor-pointer group shadow-slate-400 shadow-md p-2 rounded-lg text-green-500 font-bold'>
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
			</motion.div>)
			}
			</div>) : (
			<h1 className="flex justify-center items-center text-red-500 text-3xl font-extrabold mt-7">No Class Available</h1>
		)
	}

		</div>

	);
};

export default Classes;