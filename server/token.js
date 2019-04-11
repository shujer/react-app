const jwt = require('jsonwebtoken')
const serect = require('./config').TOKEN.secret

module.exports = ({uid, password}) => {
  return jwt.sign(
    {
      uid,
      password
    },
    serect,
    {expiresIn: '2h'}
  )
}
