import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customError.js";
import Rooms from "../models/Rooms.js";
import BookingsModel from "../models/Book.js";
export const createReservationApi = async (req, res) => {
  const room = await Rooms.findById(req.body.roomID);
  if (!room) throw new NotFoundError("please provide valid room");
  if (req.body.pricePerNight !== room.price)
    throw new BadRequestError("please provide valid fields");
  await BookingsModel.deleteMany({
    paymentStatus: false,
  });
  let reservationID = null;
  const reservation = await BookingsModel.create({ ...req.body });
  reservationID = reservation._id;
  res.status(StatusCodes.CREATED).json({
    msg: "success",
    data: { reservationID },
  });
};
