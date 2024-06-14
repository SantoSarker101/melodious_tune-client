import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useInstructorClasses = () => {
	const {user} = useContext(AuthContext)
	const [axiosSecure] = useAxiosSecure()
	const {data: instructorClasses = [], isLoading: loading, refetch} = useQuery({
		queryKey: ['instructorClasses', user.email],
		queryFn: async() => {
			const res = await axiosSecure.get(`/instructorClasses?instructorEmail=${user.email}`)
			return res.data;
		}
	})
	return [instructorClasses, loading, refetch]
};

export default useInstructorClasses;