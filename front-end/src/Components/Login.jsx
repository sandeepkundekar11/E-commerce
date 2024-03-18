import { useState } from "react"
import { NavLink } from "react-router-dom"

const Login = () => {
    const [UserInfo, setUSerInfo] = useState({
        email: "",
        password: ""
    })
    const [UserInfoWarning, setUserInfoWarning] = useState({
        emailWarning: "",
        passwordwarning: ""
    })
    const [ConfirmPassword, setConfirmPassowrd] = useState("")
    const [ConfirmPasswordWarning, setsetConfirmPasswordWarnig] = useState("")
    const Loginfun = () => {
        let wornings = {
            emailWarning: "",
            passwordwarning: ""
        }
        if (UserInfo.email.length < 4) {
            wornings.emailWarning = "Email characters can't be less then 4"
        }
        else {
            wornings.emailWarning = ""
        }
        if (UserInfo.password.length < 4) {
            wornings.passwordwarning = "Password characters can't be less then 4"
        }
        else {
            wornings.passwordwarning = "Password characters can't be less then 4"
        }

        setUserInfoWarning(wornings)
        if (Object.values(UserInfo).every(ele => ele.length > 4) && UserInfo.password === ConfirmPassword) {
            // api call
        }
    }
    return (
        <div className="bg-gray-200 flex items-center justify-center w-screen h-screen">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <div>
                    <div className="mb-4">
                        <input type="text" id="username" name="username"
                            value={UserInfo.email} onChange={(e) => {
                                setUSerInfo({
                                    ...UserInfo,
                                    email: e.target.value
                                })
                            }}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your Email" />
                        <p className="text-sm text-red-500 mt-1">{UserInfoWarning.emailWarning}</p>
                    </div>
                    <div className="mb-4">
                        <input type="password" id="password" name="password" value={UserInfo.password} onChange={(e) => {
                            setUSerInfo({
                                ...UserInfo,
                                password: e.target.value
                            })
                        }}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password" />
                        <p className="text-sm text-red-500 mt-1 ">{UserInfoWarning.passwordwarning}</p>
                    </div>
                    <div className="mb-4">
                        <input type="password" id="confirm-password" name="confirm-password" value={ConfirmPassword}
                            onChange={(e) => {
                                setConfirmPassowrd(e.target.value)
                                if (e.target.value !== UserInfo.password) {
                                    setsetConfirmPasswordWarnig("password not matched")
                                }
                                else {
                                    setsetConfirmPasswordWarnig("")
                                }
                            }}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Confirm your password" />
                        <p className="text-sm text-red-500 mt-1 ">{ConfirmPasswordWarning}</p>
                    </div>
                    <button type="button"
                        onClick={Loginfun}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>

                    <p className="mt-2">Don't have an account <NavLink className="text-blue-600">SignUp</NavLink></p>
                </div>
            </div>
        </div>
    )
}
export default Login