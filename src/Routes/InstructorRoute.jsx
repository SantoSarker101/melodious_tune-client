import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../Hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoute = ({children}) => {
	const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useInstructor();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;