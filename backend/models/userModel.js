const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    default:"",},
    email: {
      type: String,
      // //required: true,
      unique: true,
    default:"",},
    phoneNo: {
      type: String,
      // //required: true,
    default:"",},
    password: {
      type: String,
      // //required: true,
    default:"",},
    gender: {
      type: String,
      // //required: true,
    default:"",}, //p
    city: {
      type: String,
      // //required: true,
    default:"",},
    dob: {
      type: String,
      // //required: true,
    default:"",},
    sexualOrientation: {
      type: String,
      // //required: true,
    default:"",}, //p
    country: {
      type: String,
      // //required: true,
    default:"",},
    primaryLanguage: {
      type: String,
      //required: true,
    default:"",},
    maritalStatus: {
      type: String,
      //required: true,
    default:"",},
    age: {
      type: String,
      //required: true,
    default:"",},
    
    numberOfChildren: {
      type: String,
      //required: true,
    default:"",},
    anyIllness: {
      type: String,
      //required: true,
    default:"",},
    pregnancyExperiance: {
      type: String,
      //required: true,
    default:"",},
    surrogacyHistory: {
      type: String,
      //required: true,
    default:"",},
    periodsHistory: {
      type: String,
      //required: true,
    default:"",},
    useOfAlchohol: {
      type: String,
      //required: true,
    default:"",},
    expectationFromSurrogacy: {
      type: String,
      //required: true,
    default:"",},
    criminalHistory: {
      type: String,
      //required: true,
    default:"",},
    availableForAppointment: {
      type: String,
      //required: true,
    default:"",},
    infoOfSupporter: {
      type: String,
      //required: true,
    default:"",},
    isVaccinated: {
      type: String,
      //required: true,
    default:"",},
    isNRI: {
      type: String,
      //required: true,
    default:"",},
    weight: {
      type: String,
      //required: true,
    default:"",},
    height: {
      type: String,
      //required: true,
    default:"",},
    onAnyMedication: {
      type: String,
      //required: true,
    default:"",},
    education: {
      type: String,
      //required: true,
    default:"",},
    occupation: {
      type: String,
      //required: true,
    default:"",},
    deliveryType: {
      type: String,
      //required: true,
    default:"",},
    pic: {
      type: String,
      // //required: true,
      default:
        "https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file",
    default:"",},
    participants: [
      {
        targetid: {
          type: String,
        default:"",},
        name: {
          type: String,
        default:"",},
        pic: {
          type: String,
        default:"",},
        time: {
          type: String,
        default:"",},
        message: {
          type: String,
        default:"",},
      default:"",},
    ],
  },
  {
    timestamps: true,
  }
);
// Initialize the participants array with an empty array when creating a new user
userSchema.pre("save", function (next) {
  if (!this.participants) {
    this.participants = [];
  }
  next();
});
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// default:"",};
// userSchema.pre("save", async function (next) {
//   if (!this.odified) {
//     next();
//   default:"",}

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// default:"",});
const User = mongoose.model("User", userSchema);

module.exports = User;
