"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  username: {
    type: String,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  }
  // campus: {
  //   type: String,
  //   enum: [
  //     "Madrid",
  //     "Barcelona",
  //     "Miami",
  //     "Paris",
  //     "Berlin",
  //     "Amsterdam",
  //     "México",
  //     "Sao Paulo"
  //   ],
  //   trim: true
  // },
  // course: {
  //   type: String,
  //   enum: ["Data Analytics", "WebDev", "UX/UI"],
  //   trim: true
  // },
  // image: {
  //   type: String,
  //   trim: true
  // }
});

const signInStatic = require("./statics/sign-in");
const signUpStatic = require("./statics/sign-up");
const findByEmailStatic = require("./statics/find-by-email");

schema.statics.signIn = signInStatic;
schema.statics.signUp = signUpStatic;
schema.statics.findByEmail = findByEmailStatic;

const User = mongoose.model("User", schema);

module.exports = User;
