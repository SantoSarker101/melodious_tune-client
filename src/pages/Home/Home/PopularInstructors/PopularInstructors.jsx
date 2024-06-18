// import { useEffect, useState } from "react";

// const PopularInstructors = () => {
// 	const [enrollbasedClasses, setEnrollbasedClasses] = useState([])

// 	useEffect(() => {
// 		fetch(`${import.meta.env.VITE_API_BASE_URL}/enrollbasedClasses`)
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data);
// 			setEnrollbasedClasses(data)
// 		})
// 	}, [])
// 	return (
// 		<div className="pb-8 pt-28 md:pt-32">
// 			<h1 className="text-2xl md:text-3xl text-white font-extrabold text-center">enrollbasedClasses</h1>
// 			<hr className="border-b-0 w-32 md:w-52 mx-auto mt-1" />

// 	<div className={`pt-24 md:pt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2 md:px-5 ${enrollbasedClasses?.seats == 0? 'bg-red-600 text-white':''}`}>
// 			{
// 			enrollbasedClasses.map(Instructor =>  <div key={Instructor._id} className='col-span-1 cursor-pointer shadow-slate-50 rounded-lg text-white group'>
// 				<div className='flex flex-col gap-2 w-full'>
// 				<div
// 					className='
// 					  aspect-square
// 					  w-full
// 					  overflow-hidden
// 					  rounded-xl
// 					'
// 				>
// 					<img
// 					className='
// 						object-cover
// 						h-full
// 						w-full
// 						group-hover:scale-105
// 						transition rounded-full
// 					  '
// 					src={Instructor.instructorInfo.instructorPhoto}
// 					alt='Instructor Photo'
// 					/>
// 				</div>

// 				<div>
// 					<span>Name:</span> <span>{Instructor.instructorInfo.instructorName}</span>
// 				</div>

// 				<div>
// 					<span>Email:</span> <span>{Instructor.instructorInfo.instructorEmail}</span>
// 				</div>

// 				<div>



// 				</div>

// 				</div>
// 			</div>)
// 			}
// 			</div>

// 		</div>
// 	);
// };

// export default PopularInstructors;