import { Link } from "react-router-dom";
import image from "../images/slide.png";
import { useState } from "react";
function Login(props) {
  const {setIsLogin}=props;
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // console.log(email);
    const handleLogin=()=>{
        // console.log("pressed");
        console.log(email);
        console.log(password);
        setIsLogin(true);
    }
  return (
    <div className="flex bg-white-200 w-full flex-row flex-wrap items-center justify-around h-screen">
      <div className="bg-red-100 shadow-2xl rounded-lg">
        <img src={image} alt="#" />
      </div>
      <div className="flex flex-col shadow-lg border-2 border-black-700 p-32 rounded-lg ">
        <h1 className="text-5xl font-semibold">Login</h1>
        <p className="my-4">Enter your details Below</p>
        <input
          value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className="border-b-2 mb-2 text-3xl hover:border-gray-600 outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          value={password}
          className="border-b-2 mb-2 hover:border-gray-600 outline-none text-3xl"
          type="password"
          placeholder="Password"
        />
        <button onClick={handleLogin} className="bg-red-600 mt-4 p-4 text-white rounded-lg">
          Login
        </button>
        <span className="my-2">
          Not Registered yet?
          <Link className="border-b-2 hover:border-blue-400" to="/Register">
            Register Here
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Login;
//my-4 marging through y -axis
