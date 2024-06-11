import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";

const ManageUsers = () => {
	const { loading } = useContext(AuthContext)
	const [axiosSecure] = useAxiosSecure()

	const { data: users = [], refetch } = useQuery({ queryKey: ['users'],
	enabled: !loading,
	queryFn: async () => {
		const res = await axiosSecure.get('/users')
		return res.data
	} })

	// Click and Make Admin
	const handleMakeAdmin = user => {
		axiosSecure.patch(`/users/admin/${user._id}`)
		.then(res => res.data)
		.then(data => {
			console.log(data);
			if(data.modifiedCount){
				refetch();
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `${user.name} is Admin Now!`,
					showConfirmButton: false,
					timer: 1500
				});
			}
		})
	}


	// Click and Make Instructor
	const handleMakeInstructor = user => {
		axiosSecure.patch(`/users/instructor/${user._id}`)
		.then(res => res.data)
		.then(data => {
			console.log(data);
			if(data.modifiedCount){
				refetch();
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `${user.name} is Instructor Now!`,
					showConfirmButton: false,
					timer: 1500
				});
			}
		})
	}

	const handleDelete = (user) => {
		console.log(user.email);
	}

	return (
		<div className="w-full">
			<h3 className="text-3xl font-semibold text-center my-4">Total Users: {users.length}</h3>


		<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className="font-extrabold text-yellow-600">
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th className="flex justify-center font-extrabold">Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
		users.map((user, index) => <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>

        <td className="flex gap-8 justify-center">

		<span className={`cursor-pointer flex flex-col gap-1 hover:text-green-500 ${user.role === 'Instructor' && 'hidden'}`}><span>{
			user.role === 'admin' ? <span className="text-green-400 font-extrabold ">Admin</span> : <span onClick={() => handleMakeAdmin(user)}><FaUserShield className='w-5 h-5'></FaUserShield>
			<>{
			user.role === 'admin' || <span>Make Admin</span>
			}</>
			</span>
		}</span> </span>

		<span className={`cursor-pointer hover:text-green-500 ${user.role === 'admin' && 'hidden'}`}><>{
			user.role === 'Instructor' ? <span className="text-green-400 font-extrabold cursor-not-allowed opacity-50">Instructor</span> : <span onClick={() => handleMakeInstructor (user)} className="flex flex-col gap-1"><GiTeacher className='w-5 h-5' />
			{user.role === 'Instructor' || <span>Make Instructor</span> }
			</span>
		}</> </span>

		</td>

        <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-500 text-white">
			<FaTrashAlt></FaTrashAlt>
		</button></td>
      </tr>)
	}

    </tbody>
  </table>
</div>
		</div>
	);
};

export default ManageUsers;