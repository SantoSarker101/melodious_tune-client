import {
	createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import AddClasses from "../pages/Dashboard/AddClasses/AddClasses";


  export const router = createBrowserRouter([
	{
	path: "/",
	element: <Main></Main>,
	children: [
		{
			path: '/',
			element: <Home></Home>
		},
		{
			path: '/signup',
			element: <SignUp></SignUp>
		},
		{
			path: '/login',
			element: <Login></Login>
		},
	]
	},
	{
		path: 'dashboard',
		element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
		children: [
			{
				path: '/dashboard/manageUsers',
				element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
			},
			{
				path: '/dashboard/add-classes',
				element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
			},
		]
	}
  ]);