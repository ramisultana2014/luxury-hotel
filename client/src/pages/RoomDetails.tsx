import { useEffect, useMemo, useState } from "react";
import { useGetRoom } from "../../features/useGetRoom";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Wrapper from "../assets/wrapper/RoomDetails";
import { RoomImages } from "../components";
import Skeleton from "../components/Skeleton";
import { IoPersonOutline } from "react-icons/io5";
import { differenceInDays, isEqual } from "date-fns";
import { useForm } from "react-hook-form";
import { BookState, createReservation } from "../context/bookingSlice";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import toast from "react-hot-toast";
// import { useAppDispatch } from "../hooks";
function getDatesInRange(
  startDate: Date | undefined,
  endDate: Date | undefined
) {
  if (!startDate || !endDate) return;
  const date = new Date(startDate);
  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date)); // Push a copy, not the reference
    date.setDate(date.getDate() + 1);
  }

  return dates;
}
type FormValues = {
  email: string;
};
const today = new Date();
function RoomDetails() {
  // let bookedDays: { from: Date; to: Date }[] | undefined;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = useForm<FormValues>({
    mode: "onChange",
  });
  const { isValid } = formState;

  const { roomDetails, isLoading } = useGetRoom();
  const [showtxt, setShowtxt] = useState<boolean>(false);
  const [range, setRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  // from, to in DayPicker always look Thu Apr 24 2025 00:00:00 GMT+0300 (GMT+03:00)
  //from,to coming from our database always look from: '2025-04-19T21:00:00.000Z'
  //useMemo cuz typescript keep complaining
  const bookedDays = useMemo(() => {
    return roomDetails?.bookedDates?.map((d) => ({
      from: new Date(d?.from),
      to: new Date(d?.to),
    }));
  }, [roomDetails?.bookedDates]);
  const [guests, setGuests] = useState(1);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const totalNights =
    range?.from && range?.to && differenceInDays(range.to, range.from);

  const breakfastCost: number =
    isChecked && roomDetails?.breakfast && totalNights
      ? roomDetails?.breakfast * totalNights * guests
      : 0;
  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
  }
  function onSubmit(data: { email: string }): void {
    if (!range?.from || !range?.to || isEqual(range?.from, range?.to)) {
      alert("please select dates");
      return;
    }

    const reservation: BookState = {
      roomID: roomDetails?._id,
      email: data.email,
      roomName: roomDetails?.room,
      pricePerNight: roomDetails?.price,
      totalNights,
      guests,
      breakfastCost,
      totalPrice,
      from: range?.from.toISOString(),
      to: range?.to.toISOString(),
    };
    dispatch(createReservation(reservation));
    navigate("/confirmationPage");
    reset();
  }
  //console.log(range);
  useEffect(() => {
    if (!bookedDays) return;
    const daysSelected = getDatesInRange(range?.from, range?.to);

    const valuesFromArray = bookedDays?.flatMap((obj) => Object.values(obj));

    if (!daysSelected || !valuesFromArray) return;

    const hasOverlap = daysSelected.some((selectedDate) =>
      valuesFromArray.some(
        (bookedDate) =>
          selectedDate.toDateString() === bookedDate.toDateString()
      )
    );
    if (hasOverlap) {
      toast.error("Some days are already booked");
      setRange(undefined);
    }
  }, [range?.from, range?.to, bookedDays]);
  if (isLoading) return <Skeleton />;
  if (!roomDetails) return <p>No room details available.</p>;
  //console.log(roomDetails?.bookedDates);
  // bookedDays = roomDetails?.bookedDates?.map((d) => ({
  //   from: new Date(d?.from),
  //   to: new Date(d?.to),
  // }));
  //console.log(bookedDays);
  const totalPrice =
    breakfastCost && totalNights
      ? breakfastCost + roomDetails?.price * totalNights
      : totalNights && roomDetails?.price * totalNights;
  // console.log(totalNights, guests, breakfastCost, totalPrice);

  return (
    <Wrapper>
      <RoomImages images={roomDetails.images} />

      <div className="roomDetails">
        <p>{roomDetails.room}</p>
        <p>
          {showtxt
            ? roomDetails.description
            : `${roomDetails.description.slice(0, 30)}...`}
          <button onClick={() => setShowtxt((s) => !s)}>
            {showtxt ? "hide" : "show more"}
          </button>
        </p>
        <p>-{roomDetails.area} m&sup2;</p>
        <p>
          -Max {roomDetails.max}
          <IoPersonOutline />
        </p>
        <p>-{roomDetails.price}$/night</p>
        <p>-breakfast:{roomDetails.breakfast}$/person</p>
        <p>-Check-in:14:00 Check-out:12:00</p>
        <p>-free parking</p>
        <p>-Pets are not allowed</p>
      </div>
      <div className="calendar">
        {/* the class name for DayPicker is  .rdp-root */}
        <DayPicker
          mode="range"
          captionLayout="dropdown-months"
          startMonth={new Date()}
          onSelect={setRange}
          selected={range}
          disabled={[...(bookedDays || []), today, { before: today }]}
          modifiers={{
            booked: bookedDays || [],
          }}
          modifiersClassNames={{
            booked: "booked-range",
          }}
        />

        <div className="calculations">
          <div className="row">
            <p> Nights</p>
            <p>{totalNights ? totalNights : ""}</p>
          </div>
          <div className="row">
            <label>Guests</label>

            <select onChange={(e) => setGuests(Number(e.target.value))}>
              {Array.from({ length: roomDetails.max }, (_, i) => i + 1).map(
                (x) => {
                  return (
                    <option value={x} key={x}>
                      {x}
                    </option>
                  );
                }
              )}
            </select>
          </div>
          <div className="row">
            <p>Breakfast</p>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
          </div>
          <hr />
          <div className="row">
            <p>Total :</p>

            <h4>{totalPrice ? totalPrice : roomDetails.price} $</h4>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="email"
              placeholder="please write valid email"
              id="email"
              {...register("email", {
                required: "this field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              required
            />
          </div>
          <button
            className="submit"
            style={{ visibility: isValid ? "visible" : "hidden" }}
            type="submit"
          >
            proceed
          </button>
        </form>
      </div>
      <Link to="/">❌</Link>
    </Wrapper>
  );
}
export default RoomDetails;
