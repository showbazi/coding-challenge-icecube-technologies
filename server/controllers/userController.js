import asyncErrorMiddleware from "../middlewares/catchAsyncError.js";
import User from "../models/userModel.js";

// registering the user
const registerUser = asyncErrorMiddleware(async (req, res, next) => {
  // const { name, plan, renew, start, status } = req.body;

  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    user,
  });
});

// get all the users
const getUsers = asyncErrorMiddleware(async (req, res, next) => {
  const user = await User.find();

  res.status(200).json({
    success: true,
    user,
  });
});

// search feature(here "$or" is used to query through multiple fields)
const searchKeyword = asyncErrorMiddleware(async (req, res, next) => {
  const user = await User.find({
    $or: [
      { name: { $regex: req.params.keyword } },
      { "details.email": { $regex: req.params.keyword } },
      { "details.phoneNo": { $regex: req.params.keyword } },
    ],
  });

  res.status(200).json({
    success: true,
    user,
  });
});

export { registerUser, getUsers, searchKeyword };
