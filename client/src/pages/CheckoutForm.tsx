import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RBsIECkjcxMHiHKJn9gg5vTfrMELMTfSpV1VHARmEmeZr70mYceBTUjBD4DGQAhmxxvkUd4BQZPow2KHl9aTm5X00NuJxMiuc"
);
type ErrorResponse = {
  msg: string;
};
function CheckoutForm() {
  const { reservationID } = useParams<{ reservationID: string }>();

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    // http://localhost:5100
    try {
      const res = await fetch(
        `/api/v1/stripe/create-checkout-session/${reservationID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) {
        const errorData: ErrorResponse = await res.json();
        throw new Error(errorData.msg || "Something went wrong");
      }
      const data = await res.json();
      return data.clientSecret;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }, [reservationID]);

  const options = { fetchClientSecret };
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
export default CheckoutForm;
