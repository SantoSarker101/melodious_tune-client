import { FaTrashAlt } from "react-icons/fa";
import useEnrolledClasses from "../../../Hooks/useEnrolledClasses";
import Swal from "sweetalert2";

const EnrolledClasses = () => {
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
    <thead className="text-violet-500 font-extrabold md:text-lg">
      <tr>
        <th>Number</th>
        <th>Class Picture</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody className="text-orange-500 font-extrabold">

    {
		enrolledClasses.map((enrolledClass, index) => <tr key={enrolledClass._id} >
			<td>{index + 1}</td>
			<td>
				{
					enrolledClass.selectedClassImage.map((img, index) => <div key={index} className="avatar">
						<div className="mask mask-squircle w-12 h-12 mx-3">
							<img src={enrolledClass.selectedClassImage} alt="Enrolled class picture" />
						</div>
					</div>)
				}
			</td>
			<td>
			{enrolledClass.selectedClassName.map((name, index) => <p key={index} className="my-2">{name}</p>)}
			</td>
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

export default EnrolledClasses;