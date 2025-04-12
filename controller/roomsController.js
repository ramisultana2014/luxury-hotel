import Rooms from "../models/Rooms.js";
import BookingsModel from "../models/Book.js";
import { StatusCodes } from "http-status-codes";
export const getRoomDetails = async (req, res) => {
  // `http://localhost:5100/api/v1/rooms/roomDetails/${room}`
  const room = await Rooms.findOne({
    room: { $regex: req.params.roomName, $options: "i" },
  }).populate({ path: "bookedDates", select: "from to -_id" });
  // .sort(req.query.sort);

  return res.status(StatusCodes.OK).json({ data: { room } });
};
