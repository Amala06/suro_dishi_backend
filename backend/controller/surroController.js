const asyncHandler = require("express-async-handler");
const Suro = require("../models/surroModel");
const generateToken = require("../config/generateToken");

const registerSurro = asyncHandler(async (req, res) => {
  //   res.send("working");
  const {
    name,
    email,
    password,
    pic,
    phoneNo,
    country,
    city,
    dob,
    primaryLanguage,
    maritalStatus,
    age,
    numberOfChildren,
    anyIllness,
    pregnancyExperiance,
    surrogacyHistory,
    periodsHistory,
    useOfAlchohol,
    expectationFromSurrogacy,
    criminalHistory,
    availableForAppointment,
    infoOfSupporter,
    isVaccinated,
    price,
    weight,
    height,
    onAnyMedication,
    education,
    occupation,
    deliveryType,
  } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }
  const surroExists = await Suro.findOne({ email });
  if (surroExists) {
    res.status(404);
    throw new Error("User already Exists");
  }
  const suro = await Suro.create({
    name,
    email,
    password,
    pic,
    phoneNo,
    city,
    dob,
    country,
    primaryLanguage,
    maritalStatus,
    age,
    numberOfChildren,
    anyIllness,
    pregnancyExperiance,
    surrogacyHistory,
    periodsHistory,
    useOfAlchohol,
    expectationFromSurrogacy,
    criminalHistory,
    availableForAppointment,
    infoOfSupporter,
    isVaccinated,
    price,
    weight,
    height,
    onAnyMedication,
    education,
    occupation,
    deliveryType,
  });

  if (suro) {
    // res.send("Working");
    res.status(201).json({
      _id: suro._id,
      name: suro.name,
      email: suro.email,
      pic: suro.pic,
      phoneNo: suro.phoneNo,
      city: suro.city,
      dob: suro.dob,
      country: suro.country,
      primaryLanguage: suro.primaryLanguage,
      maritalStatus: suro.maritalStatus,
      age: suro.age,
      numberOfChildren: suro.numberOfChildren,
      anyIllness: suro.anyIllness,
      pregnancyExperiance: suro.pregnancyExperiance,
      surrogacyHistory: suro.surrogacyHistory,
      periodsHistory: suro.periodsHistory,
      useOfAlchohol: suro.useOfAlchohol,
      expectationFromSurrogacy: suro.expectationFromSurrogacy,
      criminalHistory: suro.criminalHistory,
      availableForAppointment: suro.availableForAppointment,
      infoOfSupporter: suro.infoOfSupporter,
      isVaccinated: suro.isVaccinated,
      price: suro.price,
      weight: suro.weight,
      height: suro.height,
      onAnyMedication: suro.onAnyMedication,
      education: suro.education,
      occupation: suro.occupation,
      deliveryType: suro.deliveryType,
      token: generateToken(suro._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

const authSurro = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const suro = await Suro.findOne({ email });

  if (suro && password) {
    res.json({
      _id: suro._id,
      name: suro.name,
      email: suro.email,
      pic: suro.pic,
      phoneNo: suro.phoneNo,
      city: suro.city,
      dob: suro.dob,
      country: suro.country,
      primaryLanguage: suro.primaryLanguage,
      maritalStatus: suro.maritalStatus,
      age: suro.age,
      numberOfChildren: suro.numberOfChildren,
      anyIllness: suro.anyIllness,
      pregnancyExperiance: suro.pregnancyExperiance,
      surrogacyHistory: suro.surrogacyHistory,
      periodsHistory: suro.periodsHistory,
      useOfAlchohol: suro.useOfAlchohol,
      expectationFromSurrogacy: suro.expectationFromSurrogacy,
      criminalHistory: suro.criminalHistory,
      availableForAppointment: suro.availableForAppointment,
      infoOfSupporter: suro.infoOfSupporter,
      isVaccinated: suro.isVaccinated,
      price: suro.price,
      weight: suro.weight,
      height: suro.height,
      onAnyMedication: suro.onAnyMedication,
      education: suro.education,
      occupation: suro.occupation,
      deliveryType: suro.deliveryType,
      token: generateToken(suro._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const allsurrogate = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  try {
    const MyData = await Suro.find();
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});
const country = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  const country = req.params.country;
  try {
    const MyData = await Suro.find({ country });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});
const age = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  const age = req.params.country;
  try {
    const MyData = await Suro.find({ age });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});
const maritalStatus = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  const mar = req.params.maritalStatus;
  try {
    const MyData = await Suro.find({ mar });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});
const primarylang = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  const primaryLanguage = req.params.primaryLanguage;
  try {
    const MyData = await Suro.find({ primaryLanguage });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});

const price = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  const price = req.params.price;
  try {
    const MyData = await Suro.find({ price });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});

const suroSorted = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { country: { $regex: req.query.search, $options: "i" } },
          { age: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const surrogacy = await Suro.find(keyword);
  res.send(surrogacy);
});
// const suroSorted = asyncHandler(async (req, res) => {
//   const keyword = req.query.search
//     ? {
//         $or: [
//           { country: { $regex: req.query.search, $options: "i" } },
//             // { age: { $regex: req.query.search, $options: "i" } },
//         ],
//       }
//     : {};

//   const surrogacy = await Suro.find(keyword);

//   res.status(200).json({
//     keyword: keyword, // Include the keyword object in the response
//     data: surrogacy, // Include the search results in the response
//   });
// });

module.exports = {
  registerSurro,
  authSurro,
  suroSorted,
  allsurrogate,
  country,
  age,
  maritalStatus,
  primarylang,
  price,
};
