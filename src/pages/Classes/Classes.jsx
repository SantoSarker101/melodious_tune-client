import { useContext, useEffect, useState } from "react";
import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Classes = () => {
	const [approvedClasses, setApprovedClasses] = useState([])
	const [classes] = useClasses()
	const {user} = useContext(AuthContext)
	const navigate = useNavigate()
	const [axiosSecure] = useAxiosSecure()

	useEffect(() => {
		if(classes && classes.length > 0){
			const approvedClasses = classes.filter(cl => cl.status === 'Approved')
			// console.log(approvedClasses);
			setApprovedClasses(approvedClasses)
		}
	},[classes])



	// const handleSelectedClasses = cls => {
	// 	console.log(user);
	// 	const student = {
	// 		studentName: user.displayName,
	// 		studentPhoto: user.photoURL,
	// 		studentEmail: user.email
	// 	}
	// 	const {_id, name, image, seats, price, category, status, details, enrolled, instructorInfo} = cls;

	// 	const selectedClass = {classId: _id, name, image, seats, price, category, status, details, enrolled, instructorInfo, studentInfo: student}

	// 	if(user){
	// 		axiosSecure.post('/selectedClass', selectedClass)
	// 		.then(res => {
	// 			console.log(res.data);


	// 			// if (res.data.insertedId) {
    //             //     Swal.fire({
    //             //         position: 'top-end',
    //             //         icon: 'success',
    //             //         title: 'class Selected successfully',
    //             //         showConfirmButton: false,
    //             //         timer: 1500
    //             //     })
    //             // }
	// 		})
	// 	}
	// 	// Swal.fire({
	// 	// 	title: 'Please Login to select the Class',
	// 	// 	icon: 'warning',
	// 	// 	showCancelButton: true,
	// 	// 	confirmButtonColor: '#3085d6',
	// 	// 	cancelButtonColor: '#d33',
	// 	// 	confirmButtonText: 'Login'
	// 	// }).then((result) => {
	// 	// 	if (result.isConfirmed) {
	// 	// 	navigate('/login')
	// 	// 	}

	// 	// })
	// }


	return (
		<div>
			<h1>All Classes</h1>





		</div>
	);
};

export default Classes;