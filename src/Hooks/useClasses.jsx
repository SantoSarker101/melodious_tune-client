import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useClasses = () => {
	const [asc, setAse] = useState(true)
	const {loading} = useContext(AuthContext)
	const {data: classes = [], isLoading: setloading, refetch} = useQuery({
		queryKey: ['classes', asc],
		enabled: !loading,
		queryFn: async() => {
			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/classes?sort=${asc ? 'asc' : 'desc'}`)
			return res.json();
		}
	})
	return [classes, setloading, refetch, asc, setAse]
};

export default useClasses;