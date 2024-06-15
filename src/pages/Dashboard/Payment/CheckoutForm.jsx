import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import './CheckoutForm.css'
import Swal from "sweetalert2";
const CheckoutForm = ({ price, selectedClasses }) => {
	const stripe = useStripe();
	const elements = useElements();
  const [cardError, setCardError] = useState('')
  const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')


  useEffect(() => {
    if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
    }
  }, [axiosSecure, price])


	const handleSubmit = async(event) => {
		event.preventDefault()

		if(!stripe || !elements){
			return
		}

		const card = elements.getElement(CardElement);
		if(card === null){
			return
		}

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if(error){
      console.log('error',error);
      setCardError(error.message)
    }
    else{
      setCardError('')
      // console.log('Payment Method', paymentMethod);
    }

    setProcessing(true)


    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || 'Unknown',
        name: user?.displayName || 'Anonymous'
      },
    },
  })

  if(confirmError){
    console.log(confirmError);
  }

  console.log('paymentIntent',paymentIntent);
  setProcessing(false)
  if(paymentIntent.status === 'succeeded'){
    const transactionId = paymentIntent.id;
    setTransactionId(transactionId)

    // Save Payment information to the server
    const payment = {
      email: user?.email,
      name: user.displayName,
      transactionId: transactionId,
      price,
      date: new Date(),
      orderStatus: 'Service Pending',
      quantity: selectedClasses.length,
      selectedClassName: selectedClasses.map(item => item.name),
      selectedClassId: selectedClasses.map(item => item._id),
      singleClassId: selectedClasses.map(item => item.classId),
      selectedClassImage: selectedClasses.map(item => item.image),
      selectedClassSeats: selectedClasses.map(item => item.seats),
      selectedClassEnrolled: selectedClasses.map(item => item.enrolled),
      selectedClassInstructorInfo: selectedClasses.map(item => item.instructorInfo),
    }

    axiosSecure.post('/payments', payment)
    .then(res => {
      console.log(res.data);
      if(res.data.result.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Dear ${user.displayName}, Bill Successfully Paid. Thank You So Much. and Your TransactionId is ${transactionId}`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    })

  }

	}
	return (
		<div className="my-8 md:my-14">
			<form className="px-2 md:w-4/5 lg:w-3/5 mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-outline btn-secondary px-10 border-4 font-extrabold flex justify-center items-center mx-auto mt-9 md:mt-12" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>


    <div>
      {
        cardError && <h2 className="text-lg md:text-2xl text-red-500 font-extrabold text-center mt-10">{cardError}</h2>
      }

      {
        transactionId && <h2 className="text-lg md:text-2xl text-green-500 font-extrabold text-center mt-10">Dear {user.displayName}, Bill Successfully Paid. Thank You So Much. and Your TransactionId is {transactionId}</h2>
      }
    </div>
		</div>
	);
};

export default CheckoutForm;