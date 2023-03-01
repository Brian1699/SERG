const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const {userRol, account}= require("../types/userTypes")

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
 
},{ strict: false }); 
 
UserSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject(); // we let __v left
  object.id = object._id; // Replace _id for id
  return object;
});

UserSchema.plugin(uniqueValidator, {
  message: "{PATH} should be unique"
});

module.exports = model("User", UserSchema);