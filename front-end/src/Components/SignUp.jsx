import { useState } from "react"
import { NavLink } from "react-router-dom"

const SignUp = () => {
    const [userInfo, setUserinfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const [UserWarnings, setUserwarnings] = useState({
        firstnameWarning: "",
        lastnamewarning: "",
        emailWarning: "",
        passwordWarning: ""
    })
    const [ConfirmPassword, setConfirPassword] = useState("")
    const [ConfirmPasswordWarning, setConfirmPasswordWarning] = useState("")
    const signup = () => {
        let wornings = {
            firstnameWarning: "",
            lastnamewarning: "",
            emailWarning: "",
            passwordWarning: ""
        }

        if (userInfo.firstname.length < 4) {
            wornings.firstnameWarning = "First name characters can't be less the 4"
        }
        else {
            wornings.firstnameWarning = ""
        }
        // last name validation
        if (userInfo.lastname.length < 4) {
            wornings.lastnamewarning = "Last name characters can't be less the 4"
        }
        else {
            wornings.lastnamewarning = ""
        }
        // email validation
        if (userInfo.email.length < 4) {
            wornings.emailWarning = "Email characters can't be less the 4"
        }
        else {
            wornings.emailWarning = ""
        }
        // password validation
        if (userInfo.password.length < 4) {
            wornings.passwordWarning = "Password characters can't be less the 4"
        }
        else {
            wornings.passwordWarning = ""
        }

        if(Object.values(userInfo).every(ele=>ele.length>4) && ConfirmPassword===userInfo.password)
        {
            // api call
        }
        setUserwarnings(wornings)
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-200">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
                <h2 className="mb-6 text-center text-3xl font-semibold">Sign Up</h2>
                <div className="mb-4">
                    <input type="text" value={userInfo.firstname} onChange={(e) => {
                        setUserinfo({
                            ...userInfo,
                            firstname: e.target.value
                        })
                    }} placeholder="First Name" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1  text-sm text-red-500">{UserWarnings.firstnameWarning}</div>
                </div>
                <div className="mb-4">
                    <input type="text" value={userInfo.lastname} onChange={(e) => {
                        setUserinfo({
                            ...userInfo,
                            lastname: e.target.value
                        })
                    }} placeholder="Last Name" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1  text-sm text-red-500">{UserWarnings.lastnamewarning}</div>
                </div>
                <div className="mb-4">
                    <input type="email" value={userInfo.email} onChange={(e) => {
                        setUserinfo({
                            ...userInfo,
                            email: e.target.value
                        })
                    }} placeholder="Email" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1 text-sm text-red-500">{UserWarnings.emailWarning}</div>
                </div>
                <div className="mb-4">
                    <input type="password" value={userInfo.password} onChange={(e) => {
                        setUserinfo({
                            ...userInfo,
                            password: e.target.value
                        })
                    }} placeholder="Password" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1  text-sm text-red-500">{UserWarnings.passwordWarning}</div>
                </div>
                <div className="mb-6">
                    <input type="password" value={ConfirmPassword} onChange={(e) => {
                        setConfirPassword(e.target.value)
                        if (e.target.value !== userInfo.password) {
                            setConfirmPasswordWarning("password not matched")
                        }
                        else {
                            setConfirmPasswordWarning("")
                        }
                    }} placeholder="Confirm Password" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1 text-sm text-red-500">{ConfirmPasswordWarning}</div>
                </div>
                <button onClick={signup} className="w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign Up</button>
                <p className=" mt-2 ">Already have an account <NavLink className="text-blue-600" to="/login">Login</NavLink> </p>
            </div>
        </div>
    )
}

export default SignUp