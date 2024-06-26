import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
	const {user, loading} = useContext(AuthContext)
	const [axiosSecure] = useAxiosSecure()

	const { data: isAdmin, isLoading: isAdminLoading } = useQuery({ queryKey: ['isAdmin', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/admin/${user.email}`)
			return res.data.admin
		} })


		return [isAdmin, isAdminLoading]
};

export default useAdmin;








// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import useAxiosSecure from "./useAxiosSecure";
// import { AuthContext } from "../providers/AuthProvider";


// const useAdmin = () => {
//   const { user} = useContext(AuthContext)
//   const [axiosSecure] = useAxiosSecure();

//   const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//     queryKey: ["isAdmin",user?.email],enabled:!!user?.email&& !!localStorage.getItem('access-token'),

//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/admin/${user?.email}`)

//       return res.data.admin;

//     },
//   });
//   return [isAdmin, isAdminLoading];
// };
// export default useAdmin;