const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
// const Surro = require("../models/surroModel");

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    pic,
    gender,
    phoneNo,
    country,
    city,
    dob,
    sexualOrientation,
    age,
    isSurrogate,
    weight,
    height,
  } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(404);
    throw new Error("User already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
    gender,
    phoneNo,
    city,
    dob,
    country,
    sexualOrientation,
    age,
    isSurrogate,
    weight,
    height,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      gender: user.gender,
      phoneNo: user.phoneNo,
      city: user.city,
      dob: user.dob,
      country: user.country,
      sexualOrientation: user.sexualOrientation,
      age: user.age,
      isSurrogate: user.isSurrogate,
      weight: user.weight,
      height: user.height,
      participants: [],
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});



const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      gender: user.gender,
      phoneNo: user.phoneNo,
      city: user.city,
      dob: user.dob,
      country: user.country,
      sexualOrientation: user.sexualOrientation,
      participants: user.participants,
      age: user.age,
      isSurrogate: user.isSurrogate,
      weight: user.weight,
      height: user.height,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const allSurrogate = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  try {
    const MyData = await User.find({ isSurrogate: "true" });
    // console.log(MyData); // add this line to log MyData to the console
    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});

const singleUser = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.body;
    console.log(_id);
    const userchat = await User.findById(_id);
    console.log("userchat", userchat);
    res.status(200).json(userchat);
  } catch (error) {
    console.log(error);
  }
});

const allsurro = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  try {
    const MyData = await User.find();
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { country: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

// const chatList = asyncHandler(async (req, res) => {
//   try {
//     const _id = req.body.params;
//     const { username, userpic, targetid, name, pic } = req.body;

//     const userchat = await User.findById(_id);
//     const targetchat = await User.findById(targetid);

//     // Add the new participant to the participants array
//     // userchat.participants.push({
//     //   targetid,
//     //   name,
//     //   pic,
//     //   time: "00:00",
//     //   message: "hi all",
//     // });
//     targetchat.participants.push({
//       targetid: _id.toString(),
//       name: username,
//       pic: userpic,
//       time: "00:00",
//       message: "hi all",
//     });

//     // Save the updated chat to the database
//     // await userchat.save();
//     await targetchat.save();
//     console.log("userchat line 137", userchat);
//     console.log("target", targetchat);

//     res.status(200).json(userchat);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// });
const chatList = asyncHandler(async (req, res) => {
  try {
    // const _id = req.params._id;
    const { _id, username, userpic, targetid, name, pic } = req.body;
    console.log(_id);
    const userchat = await User.findById(_id);
    console.log("userchat", userchat);

    //User->Suro
    const targetchat = await User.findById(targetid);
    console.log("targetchat", targetchat);

    if (!userchat) {
      res.status(404).json({ error: "User chat not found" });
      return;
    }

    if (!targetchat) {
      res.status(404).json({ error: "Target user not found" });
      return;
    }
    userchat.participants.push(
      {
        targetid: targetid.toString(),
        name,
        pic,
        time: "00:00",
        message: "hi all",
      },
      {
        targetid: _id.toString(), // Convert _id to a string before pushing
        name: username,
        pic: userpic,
        time: "00:00",
        message: "hi all",
      }
    );
    // Add the new participant to the participants array of targetchat
    targetchat.participants.push(
      {
        targetid: _id.toString(), // Convert _id to a string before pushing
        name: username,
        pic: userpic,
        time: "00:00",
        message: "hi all",
      },
      {
        targetid: targetid.toString(),
        name,
        pic,
        time: "00:00",
        message: "hi all",
      }
    );

    // Save the updated chat to the database
    await userchat.save();
    await targetchat.save();
    console.log("userchat line 137", userchat);
    console.log("target", targetchat);

    res.status(200).json(userchat);
    // res.status(200).json(targetchat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
const chatListNew = asyncHandler(async (req, res) => {
  try {
    const { _id, username, userpic, targetid, name, pic } = req.body;
    console.log(_id);

    const userchat = await User.findById(_id);
    console.log("userchat", userchat);
    //user ->suro
    const targetchat = await User.findById(targetid);
    console.log("targetchat", targetchat);

    if (!userchat) {
      res.status(404).json({ error: "User chat not found" });
      return;
    }

    if (!targetchat) {
      res.status(404).json({ error: "Target user not found" });
      return;
    }

    // Check if targetid already exists in participants array
    const userTargetParticipant = userchat.participants.find(
      (participant) => participant.targetid.toString() === targetid.toString()
    );

    if (!userTargetParticipant) {
      // Add the new participant to userchat's participants array
      userchat.participants.push({
        targetid: targetid.toString(),
        name,
        pic,
        time: "00:00",
        message: "hi all",
      });
    }

    // Check if _id already exists in participants array of targetchat
    const targetUserParticipant = targetchat.participants.find(
      (participant) => participant.targetid.toString() === _id.toString()
    );

    if (!targetUserParticipant) {
      // Add the new participant to targetchat's participants array
      targetchat.participants.push({
        targetid: _id.toString(),
        name: username,
        pic: userpic,
        time: "00:00",
        message: "hi all",
      });
    }

    // Save the updated chat to the database
    await userchat.save();
    await targetchat.save();

    console.log("userchat line 137", userchat);
    console.log("target", targetchat);

    // Respond with success message or appropriate data
    res.status(200).json({ message: "Participants added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = {
  registerUser,
  authUser,
  allUsers,
  allsurro,
  chatList,
  chatListNew,
  singleUser,
  allSurrogate,
};
