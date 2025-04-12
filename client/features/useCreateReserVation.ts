import { useMutation } from "@tanstack/react-query";
import { createReservation } from "../services/apiReservation";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
type BookState = {
  roomID?: string;
  email: string;
  roomName?: string;
  pricePerNight?: number;
  totalNights?: number;
  guests: number;
  breakfastCost: number;
  totalPrice?: number;
  from: string;
  to: string;
};
export function useCreateBooking() {
  const navigate = useNavigate();
  //   const queryClient = useQueryClient();
  const { mutate: createBooking, isPending } = useMutation({
    mutationFn: (obj: BookState) => createReservation(obj),
    onSuccess: (data) => {
      toast.success(`${data.msg}`);
      navigate(`/checkout/${data.data?.reservationID}`);
    },
    onError: (error) => {
      //console.log("error", error);
      const errorMessage = error.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });
  return { createBooking, isPending };
}
