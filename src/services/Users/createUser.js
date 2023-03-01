const User = require("../../models/User");

const createUser= async()=>{
// Building the document
let document = {
    name: "Brian Cornejo",
    email:"brian1606@outlook.es"
  }

  try {
    let user = new User(document);
    await user.save();

    return user;

  } catch (error) {
    throw error;
  }
}

module.exports= createUser;