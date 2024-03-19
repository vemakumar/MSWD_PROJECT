import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around bg-black text-white p-12">
      <div className="flex flex-col justify-between">
        <p className=" text-xl">Exclusive</p>
        <p>Subscribe</p>
        <p>Get 10%off your first Order</p>
        <input className="bg-black" type="email" placeholder="Enter Your Email" />
      </div>
      <div className="flex flex-col justify-between" >
        <p>Support</p>
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="flex flex-col justify-between">
        <p>Account</p>
        <p>My Account</p>
        <p>Login/Register</p>
        <p>Cart</p>
        <p>WishList</p>
        <p>Shop</p>
      </div>
      <div className="flex flex-col justify-between">
        <p>Ouick Link</p>
        <p>Privacy Policy</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col justify-between">
        <p>DownLoad App</p>
        <p>Save $3 with App New user Only</p>
        <div>images</div>
        <div>Icons</div>
      </div>
    </div>
  );
};

export default Footer;
