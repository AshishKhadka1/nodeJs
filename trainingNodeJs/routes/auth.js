const {register} = require("../controllers/authControllers")
const router = require('express').Router()

router.post('/register', register)

module.exports = router

