import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  const [searchParams] = useSearchParams();
  const reservationID = searchParams.get("reservationID");
  const sessionId = searchParams.get("session_id");
  // http://localhost:5100
  useEffect(() => {
    if (!sessionId) return;

    fetch(`/api/v1/stripe/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, [sessionId]);

  if (status === "open") {
    return <Navigate to={`/checkout/${reservationID}`} />;
  }

  if (status === "complete") {
    return (
      <section id="success">
        <PageNotFound
          errorMessage={`thanks for your reservation, confirmation email was sent to ${customerEmail}`}
        />
      </section>
    );
  }

  return null; // or a loading spinner, to handle the case where status is still null
}

export default Return;
