import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [axiosSecure] = useAxiosSecure()
  const { loading,setLoading,signIn,signInWithGoogle } = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)

    signIn(data.email, data.password)
		.then(result => {
			console.log(result.user);
      toast.success('Login successful');
			navigate(from, { replace: true })
		})
		.catch(err => {
			setLoading(false)
			console.log(err.message);
			toast.error(err.message);
		})

  }


  // Google SignIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user);
      toast.success('Login successful');

       // Save User to Database
       const saveUser = {name: result.user.displayName, email: result.user.email, image: result.user.photoURL}

       axiosSecure.put(`/users/${result?.user?.email}`, saveUser)
       .then(data => {
         console.log(data);
       })
       .catch(error => {
         console.log(error);
       })

      navigate(from, { replace: true })
    })
    .catch(err => {
      setLoading(false);
      console.log(err.message);
      toast.error(err.message);
    })
  }

	return (
		<div className="hero min-h-screen bg-base-200 pt-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Login and see everything better.
	Have a new and beautiful experience</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })}  placeholder="email" className="input input-bordered w-full" />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <div className="relative">
          <input type={show ? 'text' : 'password'} {...register("password", { required: true })} placeholder="Password" className="input input-bordered w-full" />

          <p className="absolute right-2 cursor-pointer top-3" onClick={() => setShow(!show)}>
						<small>
							{
								show ? <span><FaEye className='w-5 h-5' /></span> : <span><FaEyeSlash className='w-5 h-5' /></span>
							}
						</small>
					</p>

          </div>

          {errors.password && <span className="text-red-500">Password is required</span>}

        </div>

        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
				{loading ? <ImSpinner3 size={24} className='m-auto animate-spin' /> : 'Continue'}
            </button>
          </div>

        </div>
      </form>


      <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400 font-bold'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>

        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>

        <p className='px-6 text-sm text-center text-gray-400 mb-5 font-bold'>
          Already have an account?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-green-500'
          >
            Sign Up
          </Link>

        </p>

    </div>
  </div>
</div>
	);
};

export default Login;