import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { FaShoppingCart } from "react-icons/fa";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
	const [selectedClasses] = useSelectedClasses()
	const [isAdmin] = useAdmin()
	const [isInstructor] = useInstructor()
	const {user} = useContext(AuthContext)
	return (
		<div className="px-4 fixed w-full bg-white z-10 bg-opacity-10 shadow-sm">
			<div className="py-4 border-b-1">

			<div className="flex flexrow items-center justify-between gap-3 md:gap-0">
				<Link to='/' className="text-lg md:text-3xl text-purple-600 font-extrabold">Melodious Tune</Link>

			{
				user && <div>
				{
				isAdmin || isInstructor || <div>
				<Link to='/dashboard/selected-classes'>
				<div className="badge badge-secondary">+{selectedClasses.length || 0}</div>
				<FaShoppingCart className='w-5 h-5'></FaShoppingCart>
				</Link>
			</div>
			}
			</div>
			}

				<DropdownMenu></DropdownMenu>
			</div>

			</div>

		</div>
	);
};

export default NavBar;