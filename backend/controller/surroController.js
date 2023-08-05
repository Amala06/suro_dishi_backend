const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
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
  const surroExists = await User.findOne({ email });
  if (surroExists) {
    res.status(404);
    throw new Error("User already Exists");
  }
  const user = await User.create({
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

  if (user) {
    // res.send("Working");
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      phoneNo: user.phoneNo,
      city: user.city,
      dob: user.dob,
      country: user.country,
      primaryLanguage: user.primaryLanguage,
      maritalStatus: user.maritalStatus,
      age: user.age,
      numberOfChildren: user.numberOfChildren,
      anyIllness: user.anyIllness,
      pregnancyExperiance: user.pregnancyExperiance,
      surrogacyHistory: user.surrogacyHistory,
      periodsHistory: user.periodsHistory,
      useOfAlchohol: user.useOfAlchohol,
      expectationFromSurrogacy: user.expectationFromSurrogacy,
      criminalHistory: user.criminalHistory,
      availableForAppointment: user.availableForAppointment,
      infoOfSupporter: user.infoOfSupporter,
      isVaccinated: user.isVaccinated,
      price: user.price,
      weight: user.weight,
      height: user.height,
      onAnyMedication: user.onAnyMedication,
      education: user.education,
      occupation: user.occupation,
      deliveryType: user.deliveryType,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

const authSurro = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && password) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      phoneNo: user.phoneNo,
      city: user.city,
      dob: user.dob,
      country: user.country,
      primaryLanguage: user.primaryLanguage,
      maritalStatus: user.maritalStatus,
      age: user.age,
      numberOfChildren: user.numberOfChildren,
      anyIllness: user.anyIllness,
      pregnancyExperiance: user.pregnancyExperiance,
      surrogacyHistory: user.surrogacyHistory,
      periodsHistory: user.periodsHistory,
      useOfAlchohol: user.useOfAlchohol,
      expectationFromSurrogacy: user.expectationFromSurrogacy,
      criminalHistory: user.criminalHistory,
      availableForAppointment: user.availableForAppointment,
      infoOfSupporter: user.infoOfSupporter,
      isVaccinated: user.isVaccinated,
      price: user.price,
      weight: user.weight,
      height: user.height,
      onAnyMedication: user.onAnyMedication,
      education: user.education,
      occupation: user.occupation,
      deliveryType: user.deliveryType,
      token: generateToken(user._id),
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
    const MyData = await User.find();
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});
// const country = asyncHandler(async (req, res) => {
//   // const users = await User.find();
//   // res.send(users);
//   const country = req.params.country;
//   try {
//     const MyData = await User.find({ country });
//     // console.log(MyData); // add this line to log MyData to the console
// //  {MyData._id,
// //         MyData.name,
// //         MyData.email,
// //         MyData.age,
// //         MyData.anyIllness,
// //         MyData.useOfAlchohol,
// //         MyData.periodsHistory,
// //         MyData.weight,
// //         MyData.height,
// //         MyData.maritalStatus,
// //         MyData.pregnancyExperiance}
//     res
//       .status(200)
//       .json(
//         {
        
//         email,
//         age,
//         anyIllness,
//         useOfAlchohol,
//         periodsHistory,
//         weighheight,
//         maritalStatus,
//         pregnancyExperiance}
//       );
//   } catch (error) {
//     console.error(error); // add this line to log any errors to the console
//     res.status(500).json({ message: "Could not fetch the data" });
//   }
// });
const country = asyncHandler(async (req, res) => {
  const country = req.params.country;
  try {
    const MyData = await User.find({ country });
   if (MyData.length === 0) {
     res
       .status(404)
       .json({ message: "Data not found for the specified country" });
   } 
    else{
      // Extract only the desired fields from MyData
        const specificResponse = MyData.map((data) => ({
          id:data._id,
          name:data.name,
          email: data.email,
          age: data.age,
          anyIllness: data.anyIllness,
          useOfAlchohol: data.useOfAlchohol,
          periodsHistory: data.periodsHistory,
          weight: data.weight ,
          height:data.height,
          maritalStatus: data.maritalStatus,
          pregnancyExperiance: data.pregnancyExperiance,
        }));

      res.status(200).json(specificResponse);
    // } else {
    //   res
    //     .status(404)
    //     .json({ message: "Data not found for the specified country" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not fetch the data" });
  }
});

const age = asyncHandler(async (req, res) => {
  // const users = await User.find();
  // res.send(users);
  const age = req.params.country;
  try {
    const MyData = await User.find({ age });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData._id,MyData.name,MyData.email,MyData.age,MyData.anyIllness,MyData.useOfAlchohol,MyData.periodsHistory,MyData.weight,MyData.height,MyData.maritalStatus,MyData.pregnancyExperiance);
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
    const MyData = await User.find({ mar });
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
    const MyData = await User.find({ primaryLanguage });
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
    const MyData = await User.find({ price });
    // console.log(MyData); // add this line to log MyData to the console

    res.status(200).json(MyData);
  } catch (error) {
    console.error(error); // add this line to log any errors to the console
    res.status(500).json({ message: "Could not fetch the data" });
  }
});

const UserSorted = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { country: { $regex: req.query.search, $options: "i" } },
          { age: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const surrogacy = await User.find(keyword);
  res.send(surrogacy);
});
// const UserSorted = asyncHandler(async (req, res) => {
//   const keyword = req.query.search
//     ? {
//         $or: [
//           { country: { $regex: req.query.search, $options: "i" } },
//             // { age: { $regex: req.query.search, $options: "i" } },
//         ],
//       }
//     : {};

//   const surrogacy = await User.find(keyword);

//   res.status(200).json({
//     keyword: keyword, // Include the keyword object in the response
//     data: surrogacy, // Include the search results in the response
//   });
// });

module.exports = {
  registerSurro,
  authSurro,
  UserSorted,
  allsurrogate,
  country,
  age,
  maritalStatus,
  primarylang,
  price,
};
