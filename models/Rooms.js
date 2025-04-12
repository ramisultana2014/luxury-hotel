import mongoose from "mongoose";
const RoomsSchema = new mongoose.Schema(
  {
    room: { type: String, required: true, trim: true, unique: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    area: { type: Number, required: true, min: 0 },
    breakfast: { type: Number, default: 10 },
    max: { type: Number, required: true, min: 1 },
    images: { type: [String], default: [] },
  },
  {
    timestamps: true, //that will add tow( fields created at update at)
    toJSON: { virtuals: true }, // to make virual below works
    toObject: { virtuals: true },
  }
);
RoomsSchema.virtual("bookedDates", {
  ref: "BookingsModel", //model name
  localField: "_id",
  foreignField: "roomID", //the name of field in model // each document in  BookingsModel have the id of the room
  //so we go to BookingsModel and gather all the bookings that have the same roomID, localField let us compare the localField _id in room model with the id stored in BookingsModel as roomID
  //then in controller when we rooms.find().populate({path:"bookedDates"})
  justOne: false,
});
export default mongoose.model("Rooms", RoomsSchema);
