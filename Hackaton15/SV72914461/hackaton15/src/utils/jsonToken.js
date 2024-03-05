const jwt = require('jsonwebtoken')

const createToken = async (payload) => {
  const token = jwt.sign(payload, '123LlaveSecreta@@@@');
  return token;
}

module.exports = {createToken}