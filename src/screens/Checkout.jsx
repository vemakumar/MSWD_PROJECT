import useCart from "../hooks/useCart";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {total}=useCart()
  return (
    <div className="flex h-screen w-full justify-around items-center">
      <div className="flex flex-col gap-6">
        <h1 className="font-extrabold text-2xl">Billing Address</h1>
        <div className="flex flex-col gap-2">
          <label   htmlFor="">First Name</label>
          <input style={{
            backgroundColor:"rgba(245, 245, 245, 1)",
            width:250
          }} className=" py-2 px-8 outline-none border-2 border-gray-100 rounded-lg" type="text"  />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Company Name</label>
          <input style={{
            backgroundColor:"rgba(245, 245, 245, 1)",
            width:250
          }} className=" py-2 px-8 outline-none border-2 border-gray-100 rounded-lg" type="text"  />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Street Address</label>
          <input style={{
            backgroundColor:"rgba(245, 245, 245, 1)",
            width:250
          }} className=" py-2 px-8 outline-none border-2 border-gray-100 rounded-lg" type="text"   />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Appartment,Floor(optional)</label>
          <input style={{
            backgroundColor:"rgba(245, 245, 245, 1)",
            width:250
          }} className=" py-2 px-8 outline-none border-2 border-gray-100 rounded-lg" type="text"  />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Town/City/label</label>
          <input style={{
            backgroundColor:"rgba(245, 245, 245, 1)",
            width:250
          }} className=" py-2 px-8 outline-none border-2 border-gray-100 rounded-lg" type="text"  />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Phone Number</label>
          <input style={{
            backgroundColor:"rgba(245, 245, 245, 1)",
            width:250
          }} className=" py-2 px-8 outline-none border-2 border-gray-100 rounded-lg" type="text"   />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email</label>
          <input style={{
            backgroundColor:"rgba(245, 245, 245, 1)",
            width:250
          }} className=" py-2 px-8 outline-none border-2 border-gray-100 rounded-lg" type="text"   />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Subtotal {total}</p>
        <hr />
        <p>Shipping:Free</p>
        <hr />
        <p>Total</p>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <button className="h-5 w-5 border rounded-full border-gray-300 focus:bg-blue-500"></button>
            <p>Bank</p>
          </div>
          <div className="flex gap-2">
            <button className="h-5 w-5 border border-gray-300 rounded-full focus:bg-blue-500" ></button>Cash On Delivery
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <input style={{
            backgroundColor:"rgba(245, 245, 245, 1)",
            width:250
          }} className=" py-2 px-8 outline-none border-2 border-gray-100 rounded-lg" type="text"  placeholder="Coupion Code"/>
          <button>Apply Coupon</button>
          <Link to="/order"  className="p-2 px-4 rounded-lg bg-red-600 text-white">PlaceOrder</Link>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
