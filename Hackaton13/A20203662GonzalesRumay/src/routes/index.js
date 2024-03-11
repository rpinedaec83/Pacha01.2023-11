const express = require("express")
const fs = require("fs")

const router = express.Router()

const path = __dirname;
const removeExtension = (filename) => {
  return filename.split('.').shift()
}

fs.readdirSync(path).filter((file) => {
  const route = removeExtension(file)
  if(route !== 'index') {
    console.log(route, file)
    router.use(`/${route}`, require(`./${file}`))
  }
})
router.get('*', (req, res) => {
  res.status(404)
  res.send({error: 'Not founnd. '})
})

module.exports = router