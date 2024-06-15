import useEnrolledClasses from "../../../Hooks/useEnrolledClasses";

const EnrolledClasses = () => {
	const [enrolledClasses] = useEnrolledClasses()

	return (
		<div>
			<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-white font-extrabold md:text-lg">
      <tr>
        <th>Number</th>
        <th>Class Picture</th>
        <th>Class Name</th>
        <th>Price</th>
      </tr>
    </thead>

    <tbody className="text-orange-300 font-extrabold">

    {
		enrolledClasses.map((enrolledClass, index) => <tr key={enrolledClass._id} >
			<td>{index + 1}</td>
			<td>
				{
					enrolledClass.selectedClassImage.map(img => <div key={img.image} className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={enrolledClass.selectedClassImage} alt="Enrolled class picture" />
						</div>
					</div>)
				}
			</td>
			<td>
			{enrolledClass.selectedClassName.map(name => <p key={name}>{name}</p>)}
			</td>
			<td>$ {enrolledClass.price}</td>
		</tr>)
	}

    </tbody>


  </table>
</div>
		</div>
	);
};

export default EnrolledClasses;