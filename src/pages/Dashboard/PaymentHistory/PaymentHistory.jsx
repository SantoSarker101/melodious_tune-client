import { FaTrashAlt } from "react-icons/fa";
import useEnrolledClasses from "../../../Hooks/useEnrolledClasses";
import Swal from "sweetalert2";

const PaymentHistory = () => {
	const [enrolledClasses, refetch] = useEnrolledClasses()

  const handleDelete = (enrolledClass) => {

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) => {
			if (result.isConfirmed) {

			fetch(`${import.meta.env.VITE_API_BASE_URL}/payments/${enrolledClass?._id}`, {
				method: 'DELETE'
			})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if(data.deletedCount > 0){
					refetch();

				Swal.fire({
				title: "Deleted!",
				text: "Your file has been deleted.",
				icon: "success"
			});
				}
			})

			}
		});


	}


	return (
		<div>
	<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-white font-extrabold md:text-lg">
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Email</th>
        <th>Transaction Id</th>
        <th>Date</th>
        <th>Paid</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody className="text-orange-300 font-extrabold">

    {
		enrolledClasses.map((enrolledClass, index) => <tr key={enrolledClass._id} >
			<td>{index + 1}</td>
			<td>{enrolledClass.name}</td>
			<td>{enrolledClass.email}</td>
			<td>{enrolledClass.transactionId}</td>
			<td>{enrolledClass.date}</td>
			<td>$ {enrolledClass.price}</td>
      <td>
				<button onClick={() => handleDelete(enrolledClass)} className="btn btn-ghost bg-red-500 text-white">
				<FaTrashAlt></FaTrashAlt>
				</button>
			</td>

		</tr>)
	}

    </tbody>


  </table>
</div>

		</div>
	);
};

export default PaymentHistory;