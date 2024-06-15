import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe

const Payment = () => {
	return (
		<div>
			<h2 className="text-3xl font-extrabold text-white text-center">Payment</h2>

			<Elements stripe={stripePromise}>
				<CheckoutForm></CheckoutForm>
			</Elements>
		</div>
	);
};

export default Payment;