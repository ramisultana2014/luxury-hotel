// {
//     msg:string,
//     data:{
//         reservationID:string
//     }
// }

type ServerResponse = {
  msg: string;
  data?: { reservationID?: string };
};
type ErrorResponse = {
  msg: string;
};
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
export async function createReservation(
  obj: BookState
): Promise<ServerResponse> {
  try {
    const res = await fetch("/api/v1/bookings/createReservation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    if (!res.ok) {
      const errorData: ErrorResponse = await res.json();
      throw new Error(errorData.msg || "Something went wrong");
    }
    const data: ServerResponse = await res.json();
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
