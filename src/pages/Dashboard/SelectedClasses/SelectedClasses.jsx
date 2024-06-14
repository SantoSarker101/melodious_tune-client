import useSelectedClasses from "../../../Hooks/useSelectedClasses";

const SelectedClasses = () => {
	const [selectedClasses] = useSelectedClasses()

	const total = selectedClasses.reduce((sum, classItem) => classItem.price + sum, 0)
	return (
		<div>
			<div className="uppercase">

			<h3 className="text-3xl font-extrabold text-white text-center">Selected Classes: {selectedClasses.length}</h3>

			<h3 className="text-3xl font-extrabold text-white text-center">Total Price: $ {total}</h3>

			</div>


		</div>
	);
};

export default SelectedClasses;