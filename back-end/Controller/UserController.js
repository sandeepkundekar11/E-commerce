const AsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { Usermodel } = require("../model/connection")
const Signup = AsyncHandler(async (req, res) => {
    const { firstname, lastname, email, password } = req.body

    if (!firstname || !lastname || !email || !password) {
        res.json({ message: "Please enter all details" })
    }
    else {
        let userExist = await Usermodel.findOne({ email: email })
        if (userExist) {
            res.json({ message: "User Already exist" })
        }
        else {
            let hashedPassword = await bcrypt.hashSync(password, 12)
            let token = jwt.sign({ email: email }, process.env.SECRET_KEY)
            let userData = {
                firstname,
                lastname,
                email,
                password: hashedPassword
            }
            let user = await Usermodel.create(userData)

            if (user) {
                res.json({
                    user: user,
                    auth: token
                })
            }
        }
    }
})

const Login = AsyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.json({
            message: "Please enter all the details"
        })
    }
    else {
        let userExist = await Usermodel.findOne({ email: email })
        if (userExist) {
            let hashedpassword =  bcrypt.compareSync(password, userExist.password)
            if (hashedpassword) {
                let token = jwt.sign({ email: email }, process.env.SECRET_KEY)
                res.json({
                    user: userExist,
                    auth: token
                })
            }
            else {
                res.json({ message: "password does't match" })
            }
        }
        else {
            res.json({
                message: "User does't exist"
            })
        }
    }



})
module.exports = { Signup,Login }