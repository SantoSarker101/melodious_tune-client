import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";

const UserRoute = ({children}) => {
	const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
	const [isInstructor, isInstructorLoading] = useInstructor();

    const location = useLocation();

    if (loading || isAdminLoading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    // if (user && isAdmin) {
    //     return children;
    // }

	if(!isAdmin && !isInstructor && user){
		return children
	}

	return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default UserRoute;