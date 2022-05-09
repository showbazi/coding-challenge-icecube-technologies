import mongoose from "mongoose";

// Here in enums we are using "freeze()" so that the these values in enum can't be modified anywhere in the code base other than here
// Plan works on enums [EarlyBird, Starter, Professional]
const Plan = Object.freeze({
  EarlyBird: "earlyBird",
  Starter: "starter",
  Professional: "professional",
});

// Renew Enums [Monthly, anually, cancelled]
const Renew = Object.freeze({
  Monthly: "monthly",
  Annually: "annually",
  Cancelled: "cancelled",
});

// Status Enums [active, cancelled]
const Status = Object.freeze({
  Active: "active",
  Cancelled: "cancelled",
});

// here we are using MONGOOSE as ORM which acts as a bridge between database and server(here, express)
// defining the schema using schema() method of "mongoose".
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name"],
  },
  createdAt: {
    type: String,
  },
  plan: {
    type: String,
    required: [true, "Please enter the plan"],
    enum: Object.values(Plan),
  },
  renew: {
    type: String,
    required: [true, "Please enter the renew cycle"],
    enum: Object.values(Renew),
  },
  start: {
    type: String,
  },
  status: {
    type: String,
    required: [true, "Please enter the status"],
    enum: Object.values(Status),
  },
  details: {
    phoneNo: {
      type: String,
      required: [true, "Please enter the phone number"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email id"],
    },
  },
});

Object.assign(UserSchema.statics, {
  Plan,
  Renew,
  Status,
});

// User model
const User = mongoose.model("user", UserSchema);

export default User;
