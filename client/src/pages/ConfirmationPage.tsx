import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrapper/ConfirmationPage";
import { useAppDispatch, useAppSelector } from "../hooks";
import PageNotFound from "./PageNotFound";
import { format } from "date-fns";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteReservation } from "../context/bookingSlice";
import { useCreateBooking } from "../../features/useCreateReserVation";
function ConfirmationPage() {
  const { createBooking, isPending } = useCreateBooking();
  const reservation = useAppSelector((store) => store.bookedState.reservation);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleReset() {
    dispatch(deleteReservation());
    navigate("/");
  }
  function handleBooking() {
    createBooking(reservation);
  }
  if (!reservation?.email && !reservation?.from && reservation?.to)
    return <PageNotFound errorMessage="please make reservation" />;

  return (
    <Wrapper>
      <h2>reservation details</h2>
      <p>Email : {reservation.email}</p>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>room</th>
              <th>nights</th>
              <th>total $</th>
              <th>check in</th>
              <th>check out</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{reservation.roomName}</td>
              <td>{reservation.totalNights}</td>
              <td>{reservation.totalPrice}</td>
              <td>
                {format(new Date(reservation?.from || ""), "dd MMM yyyy")}
              </td>
              <td>{format(new Date(reservation?.to || ""), "dd MMM yyyy")}</td>
              <td>
                <button onClick={handleReset}>
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button disabled={isPending} onClick={handleBooking}>
        {isPending ? "booking is creating" : "Continue to payment"}
      </button>
    </Wrapper>
  );
}
export default ConfirmationPage;
// ConfirmationPage{format(new Date(reservation?.from || ""), "dd MMM yyyy")}
