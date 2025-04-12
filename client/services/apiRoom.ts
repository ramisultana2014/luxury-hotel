type Booked = { from: string; to: string; roomID: string };
type Room = {
  _id: string;
  room: string;
  description: string;
  price: number;
  area: number;
  breakfast: number;
  max: number;
  images: string[];
  bookedDates?: Booked[];
  createdAt: string;
  updatedAt: string;
};
type ServerResponse = {
  data: {
    room: Room;
  };
};

type ErrorResponse = {
  msg: string;
};
export async function getRoomDetailsApi(roomName: string): Promise<Room> {
  try {
    const res = await fetch(`/api/v1/rooms/roomDetails/${roomName}`, {
      method: "GET",
    });
    if (!res.ok) {
      const errorData: ErrorResponse = await res.json();
      throw new Error(errorData.msg || "Something went wrong");
    }
    // the response from server look like {data:{room}}
    const { data }: ServerResponse = await res.json();
    return data.room;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
