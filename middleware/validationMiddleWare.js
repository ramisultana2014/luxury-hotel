import { body, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customError.js";
import mongoose from "mongoose";
import Rooms from "../models/Rooms.js";

const withValidationErrors = (validateValues) => {
  // we return [] because withValidationErrors have tow middleware first one is validateValues and second one is (req, res, next) , and in express thats the way to let tow middleware work together is to put them inside [] when we want return them
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      // here we look at the req and check for the logic in  validateValues,  validateValues is  an array contain
      //[ body("name")
      //         .notEmpty()
      //         .withMessage("name is required")
      //         .isLength({ min: 10 })
      //         .withMessage("name must be at least 10 character"),]
      //validationResult(req) have many methods one of them isEmpty(), which mean if there is errors it will gave us false , if there is no errors it gave us true
      //console.log(errors);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        // BadRequestError =400  is good for signup and login  for missing or wrong credintal like email , password ....
        throw new BadRequestError(errorMessages);

        //errors in sample form be like
        //         // type: 'field',
        //         // value: '',
        //         // msg: 'name is required',
        //         // path: 'name',
        //         // location: 'body'

        // BadRequestError,NotFoundError .... instead of return res.status(400/401 ...).json, will create error catch by express-async-errors in server.js and send it down to app.use((err, req, res, next)
      }
      next();
    },
  ];
};
//important notice : inside custom the BadRequestError and NotFoundError purpose is just to create error with the message provided (which is what we want the message) , the actual error that will catch by express-async-errors coming from  (!errors.isEmpty()){ throw new} inside withValidationErrors, so we can just write throw new Error like in validateRegisterInput

export const validateReservationInput = withValidationErrors([
  body("roomID")
    .notEmpty()
    .withMessage("roomID is required")
    .custom(async (value) => {
      const isValidID = mongoose.Types.ObjectId.isValid(value);
      if (!isValidID) throw new BadRequestError("invalid MongoDB id");
      const room = await Rooms.findById(value);
      if (!room) {
        throw new NotFoundError(`no job with id : ${value}`);
      }
      return true;
    }),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("roomName").notEmpty().withMessage("roomName is required"),
  body("pricePerNight")
    .notEmpty()
    .withMessage(`pricePerNight is required`)
    .isInt()
    .withMessage(`pricePerNight must be an integer`),
  body("totalNights")
    .notEmpty()
    .withMessage(`totalNights is required`)
    .isInt()
    .withMessage(`totalNights must be an integer`),
  body("guests")
    .notEmpty()
    .withMessage(`guests is required`)
    .isInt()
    .withMessage(`guests must be an integer`),
  body("breakfastCost")
    .notEmpty()
    .withMessage(`breakfastCost is required`)
    .isInt()
    .withMessage(`breakfastCost must be an integer`),
  body("totalPrice")
    .notEmpty()
    .withMessage(`totalPrice is required`)
    .isInt()
    .withMessage(`totalPrice must be an integer`),
  body("from")
    .notEmpty()
    .withMessage("from is required")
    .isISO8601()
    .toDate()
    .withMessage("from must be a valid date"),
  body("to")
    .notEmpty()
    .withMessage("to is required")
    .isISO8601()
    .toDate()
    .withMessage("to must be a valid date"),
]);
