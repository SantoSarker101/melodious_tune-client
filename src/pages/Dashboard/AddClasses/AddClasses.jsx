import { useForm } from 'react-hook-form';

const AddClasses = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
	
	return (
		<div className="px-10">
			<h2 className="text-3xl">Add a New Item</h2>

			<form>
			<div className="form-control w-full max-w-xs">
	<div className="label">
    <span className="label-text">Name of Class *</span>

  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

</div>


<div className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Category *</span>
  </div>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Guitars</option>
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
    <span className="label-text">Price *</span>

  </div>
  <input type="numer" placeholder="Price" className="input input-bordered w-full max-w-xs" />

</div>


<div className="form-control">
  <div className="label">
    <span className="label-text">Description</span>

  </div>

  <textarea className="textarea textarea-bordered h-24" placeholder="Description"></textarea>

</div>


<label className="form-control w-full max-w-xs">

  <div className="label">
    <span className="label-text">Class Image</span>

  </div>

  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

</label>

<input className="btn border-indigo-500 border-2 btn-warning" type="submit" value='Add Classes' />


			</form>
		</div>
	);
};

export default AddClasses;