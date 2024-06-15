import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { ImSpinner3 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const SignUp = () => {
  const [axiosSecure] = useAxiosSecure()
	const { loading,setLoading,createUser,signInWithGoogle,updateUserProfile } = useContext(AuthContext)
	const navigate = useNavigate()
	const location = useLocation()
	const form = location.state?.from?.pathname || '/';
	const [error, setError] = useState('')
	const [er, setEr] = useState('')
	const [passError, setPassError] = useState('')


	// User Registration Handle
	const handleSubmit = event => {
		event.preventDefault()
		const name = event.target.name.value
		const email = event.target.email.value
		const password = event.target.password.value
		const confirmPassword = event.target.confirmPassword.value
		const image = event.target.image.files[0]


		if (password !== confirmPassword) {
			setError('Passwords do not match');
			setLoading(false);
			return;
		}


		if (password.length < 6) {
			setPassError('Password must be at least 6 characters long')
			return;
		}

		if (!/[A-Z]/.test(password)) {
			setPassError('Password must contain at least one capital letter')
		return;
		}

		if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
			setPassError('Password must contain at least one special character')
		return;
		}


		const formData = new FormData()
		formData.append('image', image)
		const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;

		fetch(url, {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(imageData => {
			const imageURL = imageData.data.display_url
			console.log(imageURL);

		createUser(email,password)
        .then(result => {
          console.log(result.user);
		setEr('')
          updateUserProfile(name,imageURL)
          .then(() => {
            // console.log(result.user);
            toast.success('Signup successful');

            // Save User to Database
            const saveUser = {name: result.user.displayName, email: result.user.email, image: result.user.imageURL}

            axiosSecure.put(`/users/${result?.user?.email}`, saveUser)
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.log(error);
            })

            navigate(form, {replace: true})
			setEr('')
          })
          .catch(err => {
            setLoading(false)
            console.log(err.message);
			setEr(err.message)
          })

        })
        .catch(err => {
          setLoading(false)
          console.log(err.message);
          toast.error(err.message);
		setEr(err.message)
        })

		})
		.catch(err => {
			setLoading(false);
			console.log(err.message);
			toast.error(err.message);
		})

	}


	// Google SignIn
	const handleGoogleSignIn = () => {
		signInWithGoogle()
		.then(result => {
			console.log(result.user);
      toast.success('Signup successful');

       // Save User to Database
       const saveUser = {name: result.user.displayName, email: result.user.email, image: result.user.photoURL}

       axiosSecure.put(`/users/${result?.user?.email}`, saveUser)
       .then(data => {
         console.log(data);
       })
       .catch(error => {
         console.log(error);
       })

			navigate(form, { replace: true })
		})
		.catch(err => {
			setLoading(false);
			console.log(err.message);
			toast.error(err.message);
		})
	}

	return (
	<div>
		<div className='flex justify-center items-center min-h-screen pt-32 pb-10'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Melodious Tune</p>
        </div>
        <form onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>

            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>

            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>

			{passError && <p className="text-red-500">{passError}</p>}


            <div>
              <div className='flex justify-between'>
                <label htmlFor='confirmPassword' className='text-sm mb-2'>
				Confirm Password
                </label>
              </div>
              <input
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />

				{error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>

          </div>

          <div>
            <button
              type='submit'
              className='bg-green-500 w-full rounded-md py-3 text-white'
            >
              {loading ? <ImSpinner3 size={24} className='m-auto animate-spin' /> : 'Continue'}
            </button>
          </div>

        </form>

		{er && <p className="text-red-500 text-center mt-4 mb-4">{er}</p>}


        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>

        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>

        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>

        </p>

      </div>

    </div>
	</div>
	);
};

export default SignUp;