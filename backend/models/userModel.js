const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      // //required: true,
      unique: true,
    },
    phoneNo: {
      type: String,
      // //required: true,
    },
    password: {
      type: String,
      // //required: true,
    },
    gender: {
      type: String,
      // //required: true,
    }, //p
    city: {
      type: String,
      // //required: true,
    },
    dob: {
      type: String,
      // //required: true,
    },
    sexualOrientation: {
      type: String,
      // //required: true,
    }, //p
    country: {
      type: String,
      // //required: true,
    },
    primaryLanguage: {
      type: String,
      //required: true,
    },
    maritalStatus: {
      type: String,
      //required: true,
    },
    age: {
      type: String,
      //required: true,
    },
    
    numberOfChildren: {
      type: String,
      //required: true,
    },
    anyIllness: {
      type: String,
      //required: true,
    },
    pregnancyExperiance: {
      type: String,
      //required: true,
    },
    surrogacyHistory: {
      type: String,
      //required: true,
    },
    periodsHistory: {
      type: String,
      //required: true,
    },
    useOfAlchohol: {
      type: String,
      //required: true,
    },
    expectationFromSurrogacy: {
      type: String,
      //required: true,
    },
    criminalHistory: {
      type: String,
      //required: true,
    },
    availableForAppointment: {
      type: String,
      //required: true,
    },
    infoOfSupporter: {
      type: String,
      //required: true,
    },
    isVaccinated: {
      type: String,
      //required: true,
    },
    isNRI: {
      type: String,
      //required: true,
    },
    weight: {
      type: String,
      //required: true,
    },
    height: {
      type: String,
      //required: true,
    },
    onAnyMedication: {
      type: String,
      //required: true,
    },
    education: {
      type: String,
      //required: true,
    },
    occupation: {
      type: String,
      //required: true,
    },
    deliveryType: {
      type: String,
      //required: true,
    },
    pic: {
      type: String,
      // //required: true,
      default:
        "https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file",
    },
    participants: [
      {
        targetid: {
          type: String,
        },
        name: {
          type: String,
        },
        pic: {
          type: String,
        },
        time: {
          type: String,
        },
        message: {
          type: String,
        },
      },
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
// };
// userSchema.pre("save", async function (next) {
//   if (!this.odified) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });
const User = mongoose.model("User", userSchema);

module.exports = User;
