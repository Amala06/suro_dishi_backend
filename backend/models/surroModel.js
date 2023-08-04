const mongoose = require("mongoose");
const surroSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    phoneNo: {
      type: String,
      unique: true,
      // required: true,
    },
    password: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    dob: {
      type: String,
      // required: true,
    },
    country: {
      type: String,
      // required: true,
    },
    primaryLanguage: {
      type: String,
      // required: true,
    },
    maritalStatus: {
      type: String,
      // required: true,
    },
    age: {
      type: Number,
      // required: true,
    },
    numberOfChildren: {
      type: Number,
      // required: true,
    },
    anyIllness: {
      type: String,
      // required: true,
    },
    pregnancyExperiance: {
      type: String,
      // required: true,
    },
    surrogacyHistory: {
      type: String,
      // required: true,
    },
    periodsHistory: {
      type: String,
      // required: true,
    },
    useOfAlchohol: {
      type: String,
      // required: true,
    },

    expectationFromSurrogacy: {
      type: String,
      // required: true,
    },
    criminalHistory: {
      type: String,
      // required: true,
    },
    availableForAppointment: {
      type: String,
      // required: true,
    },
    infoOfSupporter: {
      type: String,
      // required: true,
    },
    isVaccinated: {
      type: String,
      // required: true,
    },
    price: {
      type: String,
      // required: true,
    },
    weight: {
      type: Number,
      // required: true,
    },
    height: {
      type: Number,
      // required: true,
    },
    onAnyMedication: {
      type: String,
      // required: true,
    },
    education: {
      type: String,
      // required: true,
    },
    occupation: {
      type: String,
      // required: true,
    },
    deliveryType: {
      type: String,
      // required: true,
    },
    pic: {
      type: String,
      // required: true,
      //   default:
      //     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
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
          default:
            "https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file",
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
surroSchema.pre("save", function (next) {
  if (!this.participants) {
    this.participants = [];
  }
  next();
});
const Surro = mongoose.model("Surro", surroSchema);

module.exports = Surro;
