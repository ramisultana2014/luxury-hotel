import mongoose from "mongoose";
const BookingModelSchema = new mongoose.Schema(
  {
    roomID: { type: mongoose.Schema.Types.ObjectId, ref: "Rooms" },
    email: String,
    roomName: String,
    pricePerNight: Number,
    totalNights: Number,
    guests: Number,
    breakfastCost: Number,
    totalPrice: Number,
    paymentStatus: {
      type: Boolean,
      default: false,
    },
    from: Date,
    to: Date,
  },
  {
    timestamps: true, //that will add tow( fields created at update at)
  }
);
export default mongoose.model("BookingsModel", BookingModelSchema);
