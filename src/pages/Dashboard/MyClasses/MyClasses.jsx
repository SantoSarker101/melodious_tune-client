import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { MdSystemUpdateAlt } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useInstructorClasses from "../../../Hooks/useInstructorClasses";

const MyClasses = () => {
	const [instructorClasses, , refetch] = useInstructorClasses();
	const [axiosSecure] = useAxiosSecure()

	const handleDelete = cls => {
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

			axiosSecure.delete(`/instructorClasses/${cls._id}`)
			.then(res => {
				console.log('Deleted instructorClasses', res.data);

				if(res.data.deletedCount > 0){
					refetch();

				Swal.fire({
					title: "Deleted!",
					text: "Your Class has been deleted.",
					icon: "success"
				});

				}
			})
			}
		});
	}

	return (
		<div>
			<h1 className="text-3xl text-center font-extrabold my-6 text-white">My instructorClasses</h1>



<div className="overflow-x-auto">
  <table className="table">


    {/* head */}
    <thead className="text-white font-extrabold">
      <tr>
        <th>No.</th>
        <th>Class Image</th>
        <th>Class name</th>
        <th>Instructor name</th>
        <th>Available seats</th>
        <th>Price</th>
        <th>Update</th>
		<th>Delete</th>
		<th>Status</th>
        <th>Feedback</th>
      </tr>
    </thead>



    <tbody className="text-white">

	{
		instructorClasses.map((cls, index) => <tr key={cls._id}>

		<td>{index + 1}</td>

		<td>
			<div className="flex items-center gap-3">
			<div className="avatar">
				<div className="mask mask-squircle w-12 h-12">
				<img src={cls.image} alt="Avatar Tailwind CSS Component" />
				</div>
			</div>
			</div>
		</td>
		<td className="font-bold">{cls.name}</td>
		<td>{cls.instructorInfo.instructorName}</td>
		<td>{cls.seats}</td>
		<td>{cls.price} $</td>
		<td>
		<button className="btn btn-ghost bg-purple-500 text-white">
		<MdSystemUpdateAlt />
		</button>
		</td>
		<td>
		<button onClick={() => handleDelete(cls)} className="btn btn-ghost bg-red-500 text-white">
			<FaTrashAlt></FaTrashAlt>
		</button>
		</td>
		<td>
		{
			cls?.status === 'Approved' ? <button className="text-lg cursor-auto text-green-500 font-extrabold">{cls.status}</button> : cls?.status === 'Denied' ? <button className="text-lg cursor-auto text-red-500 font-extrabold">{cls.status}</button> : <button className="text-lg cursor-auto text-cyan-400 font-extrabold">{cls.status}</button>
		}
		</td>
		<td></td>

		</tr>)
	}

    </tbody>

  </table>
</div>

		</div>
	);
};

export default MyClasses;