import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
	const {user, loading} = useContext(AuthContext)
	const [axiosSecure] = useAxiosSecure()

	const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({ queryKey: ['isInstructor', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/users/instructor/${user.email}`)
			return res.data.Instructor
		} })


		return [isInstructor, isInstructorLoading]
};

export default useInstructor;