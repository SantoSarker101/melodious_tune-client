import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const DropdownMenu = () => {
	const { user, logOut } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)

	const handleLogout = () => {
		logOut()
	}

	return (
		<div className='relative'>
		<div className='flex flex-row items-center gap-3'>

		<Link to='/'>
			<div className='hidden md:block text-sm py-3 px-4 rounded-full text-white  hover:bg-purple-950 font-bold  transition cursor-pointer'>
				Home
			</div>
		</Link>


		<Link to='/instructor'>
			<div className='hidden md:block text-sm py-3 px-4 rounded-full text-white  hover:bg-purple-950 font-bold transition cursor-pointer'>
			Instructors
			</div>
		</Link>

		<Link to='/classes'>
			<div className='hidden md:block text-sm py-3 px-4 rounded-full text-white  hover:bg-purple-950 font-bold transition cursor-pointer'>
			Classes
			</div>
		</Link>


		{
		user ? <>

		<Link to='/dashboard'>
		<div className='hidden md:block text-sm py-3 px-4 rounded-full text-white  hover:bg-purple-950 font-bold transition cursor-pointer'>
			Dashboard
		</div>
		</Link>

		<Link>

		<div onClick={handleLogout} className='hidden md:block text-sm py-3 px-4 rounded-full text-white  hover:bg-purple-950 font-bold  transition cursor-pointer'>
			Logout
		</div>

		</Link>

		</> : <>

		<Link to='/login'>

		<div className='hidden md:block text-sm py-3 px-4 rounded-full text-white  hover:bg-purple-950 font-bold  transition cursor-pointer'>
			Login
		</div>

		</Link>


		<Link to='/signup'>

		<div className='hidden md:block text-sm py-3 px-4 rounded-full text-white  hover:bg-purple-950 font-bold transition cursor-pointer'>
			Sign Up
		</div>

		</Link>

		</>
		}

		{/* Dropdown btn */}
		<div
			onClick={ () => setIsOpen(!isOpen)}
			className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
		>

			<div>
			{
				user ? <>
				<img
				className="rounded-full"
				src={user.photoURL}
				alt="profile"
				width={30}
				height={30}
				/>
				</> : <div className="text-white font-extrabold"><FaUser /></div>
			}
			</div>

			<div className="text-white font-extrabold md:font-bold">
			<AiOutlineMenu></AiOutlineMenu>
			</div>

		</div>

		</div>


		{isOpen && (
		<div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
			<div className='flex flex-col cursor-pointer'>
			<Link
				to='/'
				className='block md:hidden px-4 py-3 text-green-700  hover:bg-neutral-200  transition font-bold'
			>
				Home
			</Link>
			<Link
				to='/classes'
				className='block md:hidden px-4 py-3 text-green-700  hover:bg-neutral-200  transition font-bold'
			>
				Classes
			</Link>
			<Link
				to='/instructor'
				className='block md:hidden px-4 py-3 text-green-700  hover:bg-neutral-200  transition font-bold'
			>
				Instructors
			</Link>
			<Link
				to='/dashboard'
				className='block md:hidden px-4 py-3 text-green-700  hover:bg-neutral-200  transition font-bold'
			>
				Dashboard
			</Link>


			{
			user ? <>

				<Link>

				<div onClick={handleLogout} className='block md:hidden px-4 py-3 text-green-700  hover:bg-neutral-200  transition font-bold'>
					Logout
				</div>

				</Link>

				</> : <>

				<Link to='/login'>

				<div className='block md:hidden px-4 py-3 text-green-700  hover:bg-neutral-200  transition font-bold'>
					Login
				</div>

				</Link>


				<Link to='/signup'>

				<div className='block md:hidden px-4 py-3 text-green-700  hover:bg-neutral-200  transition font-bold'>
					Sign Up
				</div>

				</Link>

			</>
			}

			</div>
		</div>
		)}
	</div>
	);
};

export default DropdownMenu;