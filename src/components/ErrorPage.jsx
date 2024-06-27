import { FaHeartBroken } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const { error, status } = useRouteError()
	// console.log(error.message);
	return (
		<>
			<section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
    <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className="flex gap-6">
		<FaHeartBroken className='w-40 h-40 text-red-500' />
        <FaHeartBroken className='w-40 h-40 text-red-500' />
        <FaHeartBroken className='w-40 h-40 text-red-500' />
		</div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-sky-400'>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-fuchsia-600 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn bg-cyan-800 hover:bg-cyan-600 text-white'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
		</>
	);
};

export default ErrorPage;