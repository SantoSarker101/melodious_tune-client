// import { MdSystemUpdateAlt } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClasses from "../../../Hooks/useClasses";

const ManageClasses = () => {
	const [classes, , refetch] = useClasses();
	const [axiosSecure] = useAxiosSecure()

	return (
		<div>
			<h1 className="text-3xl text-center font-extrabold my-6">My Classes</h1>



<div className="overflow-x-auto">
<table className="table">


    {/* head */}
    <thead className="text-white font-extrabold">
      <tr>
        <th>No.</th>
        <th>Class Image</th>
        <th>Class name</th>
        <th>Instructor name</th>
        <th> Instructor email</th>
        <th>Available seats</th>
        <th>Price</th>
		<th>Status</th>
        <th>Feedback</th>
      </tr>
    </thead>



    <tbody className="text-white">

	{
		classes.map((cls, index) => <tr key={cls._id}>

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
		<td>{cls.instructorInfo.instructorEmail}</td>
		<td>{cls.seats}</td>
		<td>{cls.price} $</td>
		<td className="flex gap-2">
			<button className="btn bg-green-600 hover:bg-green-700 text-white font-bold">
				Approve
			</button>

			<button className="btn bg-red-500 hover:bg-red-700 text-white font-bold">
				Deny
			</button>
		</td>
		{/* <td className="space-y-1">
			<input className="p-2 rounded-lg text-white border-pink-500 border-2" type="text" placeholder="Send Feeback" />

			<button className="btn bg-orange-700 hover:bg-orange-800 text-white">Send</button>
		</td> */}

		<td>
			<button className="btn bg-violet-700 hover:bg-violet-800 text-white font-bold">Feedback</button>
		</td>

		</tr>)
	}

    </tbody>

  </table>
</div>

		</div>
	);
};

export default ManageClasses;