// import Classes from "../../Classes/Classes";
import Instructor from "../../Instructor/Instructor";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import TypeOfClasses from "../TypeOfClasses/TypeOfClasses";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<PopularClasses></PopularClasses>
			<Instructor></Instructor>
			<TypeOfClasses></TypeOfClasses>
		</div>
	);
};

export default Home;