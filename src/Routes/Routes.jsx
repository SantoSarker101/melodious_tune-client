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
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Classes from "../pages/Classes/Classes";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Instructor from "../pages/Instructor/Instructor";
import UserRoute from "./UserRoute";


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
		{
			path: '/classes',
			element: <Classes></Classes>
		},
		{
			path: '/instructor',
			element: <Instructor></Instructor>
		}
	]
	},
	{
		path: 'dashboard',
		element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
		children: [
			{
				path: '/dashboard/manage-classes',
				element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
			},
			{
				path: '/dashboard/manage-users',
				element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
			},
			{
				path: '/dashboard/add-classes',
				element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
			},
			{
				path: '/dashboard/my-classes',
				element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
			},
			{
				path: '/dashboard/selected-classes',
				element: <UserRoute><SelectedClasses></SelectedClasses></UserRoute>
			},
			{
				path: '/dashboard/payment',
				element: <UserRoute><Payment></Payment></UserRoute>
			},
			{
				path: '/dashboard/payment-history',
				element: <UserRoute><PaymentHistory></PaymentHistory></UserRoute>
			},
			{
				path: '/dashboard/enrolled-classes',
				element: <UserRoute><EnrolledClasses></EnrolledClasses></UserRoute>
			},
		]
	}
  ]);