const { request, response } = require('express');
const createUserController= require("../../services/Users/createUser")
/**
*
*
* @param {request} req - HTTP Request instance from express
* @param {response} res - HTTP Response instance from express
* @returns HTTP Response
*/
const createUser= async (req = request, res = response)=>{
    try {
    
       const user= await createUserController();

        return res.status(200).json({
          ok: true,
          response: {
            data: user,
            message: '[success]',
          }
        });
    
      } catch (error) {
        console.error(error);
        res.status(500).json({
          ok: false,
          response: {
            data: null,
            message: "[server-error]",
          }
        });
      }
}

module.exports= createUser;