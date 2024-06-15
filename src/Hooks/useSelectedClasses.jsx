import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSelectedClasses = () => {
	const {user, loading} = useContext(AuthContext)
	const [axiosSecure] = useAxiosSecure()

	const { data: selectedClasses = [], refetch } = useQuery({ queryKey: ['selectedClasses', user?.email],

		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/selectedClasses?studentEmail=${user.email}`)
			return res.data
		} })

		return [selectedClasses, refetch]
};

export default useSelectedClasses;