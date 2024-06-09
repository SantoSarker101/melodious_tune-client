import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const NavBar = () => {
	return (
		<div className="px-4 fixed w-full bg-white z-10 bg-opacity-10 shadow-sm">
			<div className="py-4 border-b-1">

			<div className="flex flexrow items-center justify-between gap-3 md:gap-0">
				<Link className="text-lg md:text-3xl text-purple-600 font-extrabold">Melodious Tune</Link>
				<DropdownMenu></DropdownMenu>
			</div>

			</div>

		</div>
	);
};

export default NavBar;