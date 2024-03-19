import { Link } from "react-router-dom";
function Register(){
    return <div className="flex bg-white-200 w-full flex-col items-center justify-center h-screen">
        <div  className="flex flex-col border-2 shadow-lg border-black-700 p-10 px-16 rounded-lg">
        <h1 className="text-2xl font-semibold">Create Account</h1>
        <p className="my-4">Enter your details Below</p>
        <input className="border-b-2  mb-2 text-3xl hover:border-gray-600 outline-none" type="text" placeholder="Username" />
        <input className="border-b-2 mb-2 text-3xl hover:border-gray-600 outline-none" type="email" placeholder="Email" />

        <input className="border-b-2 mb-2 hover:border-gray-600 outline-none text-3xl" type="password" placeholder="Password" />
        <button className="bg-red-600 mt-4 p-4 text-white rounded-lg">Create Account</button>
        <span className="my-3">Already have an Account?<Link className="hover:border-b-2 hover:border-blue-400" to="/">Login</Link></span>
        </div>
    </div>
}
export default Register;
//my-4 marging through y -axis