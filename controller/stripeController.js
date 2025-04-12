import * as dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import BookingsModel from "../models/Book.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customError.js";
import { format } from "date-fns";
export const createCheckoutSession = async (req, res) => {
  const origin = req.get("origin");
  // console.log("origin", origin);
  const reservationID = req.params.reservationID;

  const booking = await BookingsModel.findById(reservationID);
  if (!booking) throw new NotFoundError("please provide valid booking");

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      metadata: { reservationID },
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of
          // the product you want to sell
          quantity: 1,
          price_data: {
            currency: "usd",

            product_data: {
              name: `Luxury Hotel ${booking.roomName}`,

              description: `Stay in this wonderful place for ${
                booking.totalNights
              } nights, from ${format(
                new Date(booking?.from || ""),
                "dd MMM yyyy"
              )} to ${format(
                new Date(booking?.to || ""),
                "dd MMM yyyy"
              )}. Enjoy your stay!`,
            },
            unit_amount: booking.totalPrice * 100,
          },
        },
      ],
      mode: "payment",
      return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}&reservationID=${reservationID}`,
    });
    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    // console.log(error);
    throw new BadRequestError("stripe error");
  }
};

export const sessionStatus = async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  const reservationID = session.metadata?.reservationID;
  if (session.status === "complete" && reservationID) {
    await BookingsModel.findByIdAndUpdate(
      reservationID,
      { paymentStatus: true },
      {
        runValidators: true,
      }
    );
  }
  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
};
