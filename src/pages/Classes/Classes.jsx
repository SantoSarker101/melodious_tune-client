import { useContext, useEffect, useState } from "react";
import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Classes = () => {
	const [approvedClasses, setApprovedClasses] = useState([])
	const [classes] = useClasses()
	const {user} = useContext(AuthContext)
	const navigate = useNavigate()

	// useEffect(() => {
	// 	if(classes && classes.length > 0){
	// 		const appropedClasses =
	// 	}
	// },[])

	return (
		<div>
			<h1>All Approved Classes</h1>


		</div>
	);
};

export default Classes;