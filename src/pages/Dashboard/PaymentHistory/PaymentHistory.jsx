import useEnrolledClasses from "../../../Hooks/useEnrolledClasses";

const PaymentHistory = () => {
	const [enrolledClasses] = useEnrolledClasses()
	return (
		<div>
	<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-white font-extrabold md:text-lg">
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Email</th>
        <th>Transaction Id</th>
        <th>Date</th>
        <th>Paid</th>
      </tr>
    </thead>

    <tbody className="text-orange-300 font-extrabold">

    {
		enrolledClasses.map((enrolledClass, index) => <tr key={enrolledClass._id} >
			<td>{index + 1}</td>
			<td>{enrolledClass.name}</td>
			<td>{enrolledClass.email}</td>
			<td>{enrolledClass.transactionId}</td>
			<td>{enrolledClass.date}</td>
			<td>$ {enrolledClass.price}</td>

		</tr>)
	}

    </tbody>


  </table>
</div>

		</div>
	);
};

export default PaymentHistory;