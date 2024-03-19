import { Link } from "react-router-dom";
import image from "../images/slide.png";
import { useState } from "react";
function Register({isLogin}) {
    const [userName,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // console.log("The user is Logged in?",isLogin);
    const handleRegister=()=>{
    console.log("username:",userName)
    console.log("email:",email)
    console.log("password:",password)
    }


  return (
    <div className="flex bg-white-200 w-full flex-row flex-wrap  items-center justify-around h-screen">
      <div className="bg-red-100 w-max rounded-lg shadow-2xl">
        <img src={image} alt="#" />
      </div>
      <div className="flex flex-col border-2 shadow-lg border-black-700 p-32 rounded-lg">
        <h1 className="text-3xl font-semibold">Create Account</h1>
        <p className="my-4">Enter your details Below</p>
        <input
          className="border-b-2  mb-2 text-3xl hover:border-gray-600 outline-none"
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e)=>{
            setUsername(e.target.value);
          }}
        />
        <input
          className="border-b-2 mb-2 text-3xl hover:border-gray-600 outline-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
        />

        <input
          className="border-b-2 mb-2 hover:border-gray-600 outline-none text-3xl"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
        />
        <button onClick={ handleRegister} className="bg-red-600 mt-4 p-4 text-white rounded-lg">
          Create Account
        </button>
        {isLogin?"UserLoggedIn" : <span className="my-3">
          Already have an Account?
          <Link  className="hover:border-b-2 hover:border-blue-400" to="/">
            Login
          </Link>
        </span>}
        {/* <span className="my-3">
          Already have an Account?
          <Link  className="hover:border-b-2 hover:border-blue-400" to="/">
            Login
          </Link>
        </span> */}
      </div>
    </div>
  );
}
export default Register;
//my-4 marging through y -axis
