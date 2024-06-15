import Classes from "../../Classes/Classes";
import Instructor from "../../Instructor/Instructor";
import Banner from "../Banner/Banner";
import TypeOfClasses from "../TypeOfClasses/TypeOfClasses";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Classes></Classes>
			<Instructor></Instructor>
			<TypeOfClasses></TypeOfClasses>
		</div>
	);
};

export default Home;