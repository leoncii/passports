const jwt = require('jsonwebtoken')

const [, , options, password, nameOrToken] = process.argv

function signToken(payload, secret) {
  return jwt.sign(payload, secret)
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret)
}

if (options == 'sign') {
  console.log(signToken({ nombre: nameOrToken }, password))
}

if (options == 'verify') {
  console.log(verifyToken(nameOrToken, password))
}
