const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    }, //p
    city: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    sexualOrientation: {
      type: String,
      required: true,
    }, //p
    country: {
      type: String,
      required: true,
    },
    // primaryLanguage: {
    //   type: String,
    //   required: true,
    // },
    // maritalStatus: {
    //   type: String,
    //   required: true,
    // },
    // age: {
    //   type: String,
    //   required: true,
    // },
    //s
    // numberOfChildren: {
    //   type: String,
    //   required: true,
    // },
    // anyIllness: {
    //   type: String,
    //   required: true,
    // },
    // pregnancyExperiance: {
    //   type: String,
    //   required: true,
    // },
    // surrogacyHistory: {
    //   type: String,
    //   required: true,
    // },
    // periodsHistory: {
    //   type: String,
    //   required: true,
    // },
    // useOfAlchohol: {
    //   type: String,
    //   required: true,
    // },
    // expectationFromSurrogacy: {
    //   type: String,
    //   required: true,
    // },
    // criminalHistory: {
    //   type: String,
    //   required: true,
    // },
    // availableForAppointment: {
    //   type: String,
    //   required: true,
    // },
    // infoOfSupporter: {
    //   type: String,
    //   required: true,
    // },
    // isVaccinated: {
    //   type: String,
    //   required: true,
    // },
    // isNRI: {
    //   type: String,
    //   required: true,
    // },
    // weight: {
    //   type: String,
    //   required: true,
    // },
    // height: {
    //   type: String,
    //   required: true,
    // },
    // onAnyMedication: {
    //   type: String,
    //   required: true,
    // },
    // education: {
    //   type: String,
    //   required: true,
    // },
    // occupation: {
    //   type: String,
    //   required: true,
    // },
    // deliveryType: {
    //   type: String,
    //   required: true,
    // },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.odified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model("User", userSchema);

module.exports = User;