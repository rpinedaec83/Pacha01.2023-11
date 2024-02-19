const bcrypt = require('bcryptjs');

const encriptar = async(password) => {
  const salt = await  bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

const desencriptar = async(password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = {encriptar, desencriptar}