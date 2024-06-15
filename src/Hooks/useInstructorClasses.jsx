import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useInstructorClasses = () => {
	const {user, loading} = useContext(AuthContext)
	const [axiosSecure] = useAxiosSecure()
	const {data: instructorClasses = [], isLoading: setloading, refetch} = useQuery({
		queryKey: ['instructorClasses', user.email],
		enabled: !loading,
		queryFn: async() => {
			const res = await axiosSecure.get(`/instructorClasses?instructorEmail=${user.email}`)
			return res.data;
		}
	})
	return [instructorClasses, setloading, refetch]
};

export default useInstructorClasses;