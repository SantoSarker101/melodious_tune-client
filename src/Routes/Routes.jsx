import {
	createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";


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
  ]);



// const Routes = () => {
// 	return (
// 		<div>

// 		</div>
// 	);
// };

// export default Routes;