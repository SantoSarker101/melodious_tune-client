import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useClasses = () => {
	const {loading} = useContext(AuthContext)
	const {data: classes = [], isLoading: setloading, refetch} = useQuery({
		queryKey: ['classes'],
		enabled: !loading,
		queryFn: async() => {
			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/classes`)
			return res.json();
		}
	})
	return [classes, setloading, refetch]
};

export default useClasses;