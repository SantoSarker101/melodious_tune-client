// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";

// const usePopularClasses = () => {
// 	const {loading} = useContext(AuthContext)
// 	const {data: enrollbasedClasses = [], isLoading: setloading, refetch} = useQuery({
// 		queryKey: ['enrollbasedClasses'],
// 		enabled: !loading,
// 		queryFn: async() => {
// 			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/enrollbasedClasses`)
// 			return res.json();
// 		}
// 	})
// 	return [enrollbasedClasses, setloading, refetch]
// };

// export default usePopularClasses;














// const usePopularClasses = () => {
//   const { loading } = useContext(AuthContext);

//   const { data: enrollbasedClasses = [], isLoading, refetch } = useQuery({
//     queryKey: ['enrollbasedClasses'],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/enrollbasedClasses`);
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return res.json();
//     },
//   });

//   return [enrollbasedClasses, isLoading, refetch];
// };

// export default usePopularClasses;
