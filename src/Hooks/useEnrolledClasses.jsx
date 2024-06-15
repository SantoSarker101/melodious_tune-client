import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useEnrolledClasses = () => {
	const {user, loading} = useContext(AuthContext)
	const [axiosSecure] = useAxiosSecure()
	const { data: enrolledClasses = [], refetch } = useQuery({ queryKey: ['payments', user?.email],

		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/payments?email=${user.email}`)
			return res.data
		} })

		return [enrolledClasses, refetch]
};

export default useEnrolledClasses;