import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_IMGBB_KEY

const AddClasses = () => {
	const [axiosSecure] = useAxiosSecure()
	const {user} = useContext(AuthContext)
	const { register, handleSubmit } = useForm();

	const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

	const onSubmit = data => {
		// console.log(data)
		const formData = new FormData()
		formData.append('image', data.image[0])

		fetch(url, {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(imgResponse => {
			const imageURL = imgResponse.data.display_url

			const instructor = {
				instructorName: user.displayName,
				instructorPhoto: user.photoURL,
				instructorEmail: user.email
			}

			const {name, seats, price, category, status, details, enrolled} = data;

			const newClass = {name, image: imageURL, seats, price: parseFloat(price), enrolled: parseInt(enrolled), category, status, details, instructorInfo: instructor}
			console.log(newClass);

			axiosSecure.post('/classes', newClass)
			.then(data => {
				console.log('After Posting New Classes', data.data);

				if(data.data.insertedId){
					// reset()
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Class Added Successfully",
						showConfirmButton: false,
						timer: 1500
					});
				}
			})
		})
	};
	// console.log(errors);

	return (
		<div className="px-10">
			<h2 className="text-3xl text-center font-extrabold my-6">Add a New Item</h2>

	<form onSubmit={handleSubmit(onSubmit)} className='space-y-4 flex flex-col justify-center items-center'>


	<div className='md:flex md:gap-4 lg:gap-40 space-y-4 md:space-y-0'>
	<div className="form-control w-full max-w-xs">
	<div className="label">
    <span className="label-text">Class Name *</span>

  </div>
  <input type="text" placeholder="Class Name"
 {...register("name", {required: true, maxLength: 150})}
  className="input input-bordered w-full max-w-xs" />

</div>


<div className="form-control w-full max-w-xs">

  <div className="label">
    <span className="label-text">Class Image *</span>

  </div>

  <input  {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />

</div>
	</div>


	<div className='md:flex md:gap-4 lg:gap-40 space-y-4 md:space-y-0'
	>
	<div className="form-control w-full max-w-xs">
	<div className="label">
    <span className="label-text">Available Seats *</span>

  </div>
  <input type="number"
 {...register("seats", { required: true })}
  placeholder="Available Seats" className="input input-bordered w-full max-w-xs" />

</div>


<div className="form-control w-full max-w-xs">
	<div className="label">
    <span className="label-text">Price *</span>

  </div>
  <input type="number"
 {...register("price", { required: true })}
  placeholder="Price" className="input input-bordered w-full max-w-xs" />

</div>
	</div>



	<div className='md:flex md:gap-4 lg:gap-40 space-y-4 md:space-y-0'>
	<div className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Category *</span>
  </div>
  <select defaultValue='Pick One' {...register("category", { required: true })} className="select select-bordered">
    <option disabled>Pick One</option>
    <option>Guitar</option>
    <option>Drums</option>
    <option>Piano</option>
    <option>Violin</option>
    <option>Saxophone</option>
    <option>Cello</option>
    <option>Trumpet</option>
  </select>
</div>


<div className="form-control w-full max-w-xs">
	<div className="label">
    <span className="label-text">Status *</span>

  </div>
  <input type="text" placeholder="Status"
  value='Pending'
 {...register("status", {required: true, maxLength: 150})}
  className="input input-bordered w-full max-w-xs text-yellow-600" />

</div>
	</div>



<div className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Class Details</span>

  </div>

  <textarea className="textarea textarea-bordered h-24 max-w-xs"
  {...register("details", { required: true })}
  placeholder="Description"></textarea>

</div>


<div className="form-control w-full max-w-xs">
	<div className="label">
    <span className="label-text">Total Enrolled Students *</span>

  </div>
  <input type="number" placeholder="Total Enrolled Students"
  value='0'
 {...register("enrolled", {required: true, maxLength: 150})}
  className="input input-bordered w-full max-w-xs text-yellow-600" />

</div>



<input className="btn border-indigo-500 border-2 btn-warning mt-5" type="submit" value='Add Classes' />


			</form>
		</div>
	);
};

export default AddClasses;