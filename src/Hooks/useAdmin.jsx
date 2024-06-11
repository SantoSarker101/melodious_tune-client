// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// const useAdmin = () => {
// 	const {user, loading} = useContext(AuthContext)
// 	const [axiosSecure] = useAxiosSecure()

// 	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({ queryKey: ['isAdmin', user?.email],
// 		enabled: !loading,
// 		queryFn: async () => {
// 			const res = await axiosSecure.get(`/users/admin/${user.email}`)
// 			return res.data.admin
// 		} })


// 		return [isAdmin, isAdminLoading]
// };

// export default useAdmin;








import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
	const {user, loading} = useContext(AuthContext);
	// const token = localStorage.getItem('access-token')
	const [axiosSecure] = useAxiosSecure();


	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
		queryKey: ['isAdmin', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure(`/users/admin/${user?.email}`)
			console.log('is admin response', res.data.admin);
			return res.data.admin;
		},
	})
	// console.log(isAdmin);
	return [isAdmin, isAdminLoading];
}
export default useAdmin;