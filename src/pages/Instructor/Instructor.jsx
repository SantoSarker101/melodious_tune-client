import { useContext, useEffect, useState } from "react";
// import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"
// import { Helmet } from "react-helmet-async";

const Instructor = () => {
	// const [classes] = useClasses()
	// const [Instructors, setInstructors] = useState([])
	const { loading } = useContext(AuthContext)
	const [axiosSecure] = useAxiosSecure()

	const { data: Instructors = [], refetch } = useQuery({ queryKey: ['users'],
	enabled: !loading,
	queryFn: async () => {
		const res = await axiosSecure.get('/users/instructors?Instructor=Instructor')
		return res.data
	} })

	// useEffect(() => {
	// 	if(users && users.length > 0){
	// 		const InstructorUsers = users.filter(user => user.role === 'Instructor')
	// 		setInstructors(InstructorUsers)
	// 	}
	// },[users])
	return (
		<div className="pb-8 pt-28 md:pt-32">

		{/* <Helmet><title>Melodious Tune |
		Instructors</title></Helmet> */}

			<h1 className="text-2xl md:text-3xl text-sky-400 font-extrabold text-center">Instructors</h1>
			<motion.hr initial={{ opacity: 0, x: 500 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 3 }} className="mb-6 w-32 md:w-40 mx-auto border-b-2 border-fuchsia-500" />

	<div className='pt-16 md:pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-2 md:px-5'>
			{
			Instructors.slice(0, 6).map(Instructor =>  <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 8 }} key={Instructor._id} className='col-span-1 cursor-pointer shadow-slate-50 rounded-lg text-pink-400 font-bold group'>
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
						group-hover:scale-105
						transition rounded-full
					  '
					src={Instructor.image}
					alt='Instructor Photo'
					/>
				</div>

				<div>
					<span>Name:</span> <span>{Instructor.name}</span>
				</div>

				<div>
					<span>Email:</span> <span>{Instructor.email}</span>
				</div>

				<div>



				</div>

				</div>
			</motion.div>)
			}
			</div>

		</div>
	);
};

export default Instructor;