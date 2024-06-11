import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
})

const useAxiosSecure = () => {
	const { logOut } = useContext(AuthContext)
	const navigate = useNavigate()
useEffect(() => {
	// 1. Intercept request (Client ----> Server)
	axiosSecure.interceptors.request.use(config => {
		const token = `Bearer ${localStorage.getItem('access-token')}`
		if(token){
			config.headers.Authorization = token
		}
		return config
	})




	// 2. Intercept Response (Client <---- Server)
	axiosSecure.interceptors.response.use((response) => {
		return response
	}, async error => {
		if(
			(error.response && error.response.status === 401) || error.response.status === 403
		){
			await logOut()
			navigate('/login')
		}
		return Promise.reject(error)
	})
},[logOut, navigate])




	return [axiosSecure]
}

export default useAxiosSecure