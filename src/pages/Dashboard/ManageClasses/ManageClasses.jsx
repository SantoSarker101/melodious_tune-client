// import { MdSystemUpdateAlt } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClasses from "../../../Hooks/useClasses";

const ManageClasses = () => {
	const [classes, , refetch] = useClasses();
	const [axiosSecure] = useAxiosSecure()

	// This Function is for make status Approved
	const handleApprove = cls => {
		axiosSecure.patch(`/classes/approve/${cls._id}`)
		.then(res => {
			console.log('Updated Status Approved',res.data);

			if(res.data.modifiedCount){
				refetch()
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "This Class is Approved",
					showConfirmButton: false,
					timer: 1500
				});
			}
		})
	}


	// This Function is for make status Denied
	const handleDeny = cls => {
		axiosSecure.patch(`/classes/deny/${cls._id}`)
		.then(res => {
			console.log('Updated Status Denied',res.data);

			if(res.data.modifiedCount){
				refetch()
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "This Class is Denied",
					showConfirmButton: false,
					timer: 1500
				});
			}
		})
	}

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
				<img src={cls?.image} alt="Avatar Tailwind CSS Component" />
				</div>
			</div>
			</div>
		</td>
		<td className="font-bold">{cls?.name}</td>
		<td>{cls?.instructorInfo.instructorName}</td>
		<td>{cls?.instructorInfo.instructorEmail}</td>
		<td>{cls?.seats}</td>
		<td>{cls?.price} $</td>

		<td className="flex gap-2">

		<button onClick={() => handleApprove(cls)} disabled={cls?.status === 'Approved' || cls?.status === 'Denied'} className="btn bg-green-600 hover:bg-green-700 text-white font-bold">
				Approve
			</button>
			{
				cls?.status === 'Approved' ? <button className="px-2 py-2 rounded-lg bg-green-600 font-extrabold cursor-not-allowed opacity-50">Approved</button> : <></>
			}

			{
				cls?.status === 'Denied' ? <button className="px-4 py-2 rounded-lg bg-red-500 text-white font-extrabold cursor-not-allowed opacity-50">Denied</button> : <></>
			}

			<button onClick={() => handleDeny(cls)} disabled={cls?.status === 'Approved' || cls?.status === 'Denied'} className="btn bg-red-500 hover:bg-red-700 text-white font-bold">
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