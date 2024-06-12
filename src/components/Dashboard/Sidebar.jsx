import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import Logo from '../Shared/Navbar/Logo'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { AuthContext } from '../../providers/AuthProvider'
import { FaBuffer, FaHome, FaUsers } from 'react-icons/fa'
import { MdManageHistory } from 'react-icons/md'
import useAdmin from '../../Hooks/useAdmin'
import useInstructor from '../../Hooks/useInstructor'

const Sidebar = () => {
	const navigate = useNavigate()

	const { user, logOut } = useContext(AuthContext)

	const [isActive, setActive] = useState('false')

	// Sidebar Responsive Handler
	const handleToggle = () => {
	setActive(!isActive)
	}
	const handleLogOut = () => {
	logOut()
	navigate('/')
	}


  // TODO
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()

	return (
		<div>
			{/* Small Screen Navbar */}
			<div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          {/* <div className='block cursor-pointer p-4 font-bold'>
            <Logo />
          </div> */}
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Melodious Tune Profile Info */}
          <div>
            <div className='w-full md:flex py-2 justify-center items-center bg-rose-100 mx-auto'>
              {/* <Logo /> */}

			<h4 className='mx-2 mt-2 text-gray-800 font-extrabold hover:underline'>
                 Hi, {user?.displayName}
                </h4>
            </div>
          </div>

		<hr className='mt-8 border-green-700 border-2' />

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
      {
        isAdmin ? <>

<NavLink
          to='add-room'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >

          <MdManageHistory className='w-5 h-5' />

          <span className='mx-4 font-medium'>Manage Classes</span>

        </NavLink>


        <NavLink
          to='/dashboard/manageUsers'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
          <FaUsers className='w-5 h-5'></FaUsers>

          <span className='mx-4 font-medium'>Manage Users</span>
        </NavLink>

      </> :  isInstructor ?

      <>

      <NavLink
        to='/dashboard/add-classes'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform       hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >

        <FaBuffer className='w-5 h-5' />

        <span className='mx-4 font-medium'>Add Class</span>
      </NavLink>


      <NavLink
        to='/dashboard/my-classes'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform       hover:bg-gray-300   hover:text-gray-700 ${
           isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >

        <FaBuffer className='w-5 h-5' />

        <span className='mx-4 font-medium'>My Classes</span>
      </NavLink>

      </>

      : <>

<NavLink
        to='/dashboard/bookings'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform       hover:bg-gray-300   hover:text-gray-700 ${
           isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >

        <FaBuffer className='w-5 h-5' />

        <span className='mx-4 font-medium'>Bookings</span>
      </NavLink>

      </>
      }


            </nav>
          </div>
        </div>

        <div>

          <hr className='mt-10 border-green-700 border-2'/>

          <NavLink
            to='/'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-500 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FaHome className='w-5 h-5' />

            <span className='mx-4 font-medium'>Home</span>

          </NavLink>

          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
		</div>
	);
};

export default Sidebar;