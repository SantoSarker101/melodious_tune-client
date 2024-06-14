import useSelectedClasses from "../../../Hooks/useSelectedClasses";

const SelectedClasses = () => {
	const [selectedClasses] = useSelectedClasses()
	return (
		<div>
			<h3 className="text-3xl font-extrabold text-white text-center">Selected Classes: {selectedClasses.length}</h3>
		</div>
	);
};

export default SelectedClasses;