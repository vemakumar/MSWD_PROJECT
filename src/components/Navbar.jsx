import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return <div className="flex justify-around mt-2">
            <div>
            <h1 className="text-3xl font-extrabold">Exclusive</h1>
            </div>
            <div className="flex gap-10 ">
            <Link  to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link className="underline" to="/login">Sing Up</Link>            </div>
            <div>
            <input  className="w-52 px-2 py-3 mb-2 font-black text-sm rounded-sm bg-gray-100 outline-none" type="text" placeholder="What are you looking for?" />

            </div>
        </div>

}
export default Navbar;