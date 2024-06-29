// import Classes from "../../Classes/Classes";
import Instructor from "../../Instructor/Instructor";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import TypeOfClasses from "../TypeOfClasses/TypeOfClasses";
import { Helmet } from 'react-helmet-async';

const Home = () => {
	return (
		<div>

			<Helmet><title>Melodious Tune | Home</title></Helmet>

		<div>



			<Banner></Banner>
			<PopularClasses></PopularClasses>
			<div>
				<Instructor></Instructor>
			</div>
			<TypeOfClasses></TypeOfClasses>
		</div>

		</div>
	);
};

export default Home;