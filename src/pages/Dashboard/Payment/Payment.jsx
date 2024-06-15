import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)

const Payment = () => {
	const [selectedClasses] = useSelectedClasses()
	const total = selectedClasses.reduce((sum, classItem) => classItem.price + sum, 0)
	const price = parseFloat(total.toFixed(2))
	return (
		<div>
			<h2 className="text-3xl font-extrabold text-white text-center">Payment</h2>

			<Elements stripe={stripePromise}>
				<CheckoutForm price={price} selectedClasses={selectedClasses} ></CheckoutForm>
			</Elements>
		</div>
	);
};

export default Payment;