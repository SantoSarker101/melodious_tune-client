import { FaTrashAlt } from "react-icons/fa";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const SelectedClasses = () => {
	const [selectedClasses, refetch] = useSelectedClasses()
	// const {axiosSecure} = useAxiosSecure()

	const total = selectedClasses.reduce((sum, classItem) => classItem.price + sum, 0)

	const handleDelete = (selectedClass) => {

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

			fetch(`${import.meta.env.VITE_API_BASE_URL}/selectedClasses/${selectedClass?._id}`, {
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

		<div className="mt-8 mb-10 flex flex-col justify-center items-center gap-4">

		<div className="uppercase md:flex justify-evenly items-center md:space-x-40">

		<h3 className="text-xl md:text-3xl font-extrabold text-green-500 md:text-center">Selected Classes: {selectedClasses.length}</h3>

		<h3 className="text-xl md:text-3xl font-extrabold text-green-500 md:text-center">Total Price: $ {total}</h3>

		</div>


		<Link to='/dashboard/payment'>
			<button className="btn-secondary btn px-12 text-lg md:text-2xl font-extrabold">PAY</button>
		</Link>

		</div>


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
		selectedClasses.map((selectedClass, index) => <tr key={selectedClass._id} >
			<td>{index + 1}</td>
			<td>
				<div className="avatar">
				<div className="mask mask-squircle w-12 h-12">
					<img src={selectedClass.image} alt="Avatar Tailwind CSS Component" />
				</div>
				</div>
			</td>
			<td>
			{selectedClass.name}
			</td>
			<td>$ {selectedClass.price}</td>
			<td>
				<button onClick={() => handleDelete(selectedClass)} className="btn btn-ghost bg-red-500 text-white">
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

export default SelectedClasses;