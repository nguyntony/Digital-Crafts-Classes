const bcrypt = require('bcryptjs');

// Create a "salt" with 10 salt rounds
// For reference: https://www.npmjs.com/package/bcryptjs#gensaltsyncrounds-seed_length

// Use the salt to create a hash from this password.
// Reference: https://www.npmjs.com/package/bcryptjs#hashsyncs-salt
const password = "super-secret-password";


// console.log() the hash

const salt = bcrypt.genSaltSync(10)
console.log(salt)
const hash = bcrypt.hashSync(password, salt)
console.log(hash)

// this part you are checking the password input with the hash, which is the password mixed with salt.
const checking = bcrypt.compareSync(password, hash)
console.log(checking)