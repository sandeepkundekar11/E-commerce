const SignUp = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-center text-3xl font-semibold">Sign Up</h2>
                <div className="mb-4">
                    <input type="text" placeholder="Username" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1 hidden text-sm text-red-500">Please enter a username.</div>
                </div>
                <div className="mb-4">
                    <input type="email" placeholder="Email" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1 hidden text-sm text-red-500">Please enter a valid email address.</div>
                </div>
                <div className="mb-4">
                    <input type="password" placeholder="Password" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1 hidden text-sm text-red-500">Please enter a password.</div>
                </div>
                <div className="mb-6">
                    <input type="password" placeholder="Confirm Password" className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none" />
                    <div className="mt-1 hidden text-sm text-red-500">Passwords do not match.</div>
                </div>
                <button className="w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign Up</button>
            </div>
        </div>
    )
}

export default  SignUp