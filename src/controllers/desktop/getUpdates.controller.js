const { request, response } = require('express');

/**
*
*
* @param {request} req - HTTP Request instance from express
* @param {response} res - HTTP Response instance from express
* @returns HTTP Response
*/
const getUpdates = async (req = request, res = response) => {

  try {
    
    return res.status(200).json({
      ok: true,
      response: {
        data: null,
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

module.exports = getUpdates;