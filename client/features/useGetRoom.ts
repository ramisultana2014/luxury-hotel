import { useQuery } from "@tanstack/react-query";
import { getRoomDetailsApi } from "../services/apiRoom";
import { useParams } from "react-router-dom";
type Booked1 = {
  from: string;
  to: string;
  roomID: string;
};

type Room1 = {
  _id: string;
  room: string;
  description: string;
  price: number;
  area: number;
  breakfast: number;
  max: number;
  images: string[];
  bookedDates?: Booked1[];
  createdAt: string;
  updatedAt: string;
};
export function useGetRoom() {
  const { roomName } = useParams<{ roomName: string }>();

  const {
    isLoading,
    data: roomDetails,
    error,
  } = useQuery<Room1, Error>({
    queryKey: ["roomDetails", roomName],
    queryFn: () => {
      if (!roomName) throw new Error("roomName is required"); // Prevent query with undefined roomName
      return getRoomDetailsApi(roomName);
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    enabled: !!roomName, // Ensure the query runs only if roomName exists
  });
  return { roomDetails, isLoading, error };
}
