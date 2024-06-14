import { useContext, useEffect, useState } from "react";
import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Classes = () => {
	const [approvedClasses, setApprovedClasses] = useState([])
	const [classes] = useClasses()
	const {user} = useContext(AuthContext)
	const navigate = useNavigate()
	const [axiosSecure] = useAxiosSecure()
	const location = useLocation()

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
		<div>
			<h1>All Classes</h1>

	{
		approvedClasses && approvedClasses.length > 0 ? (<div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
					<span>Price:</span>{approvedClass.price} $<span></span>
				</div>

				<div>


				{user?.role === 'admin' || user?.role === 'Instructor' ? <button className="cursor-not-allowed btn bg-emerald-500 hover:bg-emerald-700 text-white font-extrabold" onClick={() => handleSelectedClasses(approvedClass)}>
					Select
				</button> : <button className="btn bg-emerald-500 hover:bg-emerald-700 text-white font-extrabold" onClick={() => handleSelectedClasses(approvedClass)}>Select</button>}
				</div>

				</div>
			</div>)
			}
			</div>) : (
			<h1>No Class Available</h1>
		)
	}

		</div>

	);
};

export default Classes;