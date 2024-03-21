import React, { useEffect, useState } from "react";
import image1 from "../images/image.png";
import image2 from "../images/masti.png";
import image3 from "../images/girls.png";
import Card from "../components/Card";
import DATA from "../data/data";
import useCart from "../hooks/useCart";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  // const [cart,dispatch]=useCart()
  const {dispatch}=useCart()
  const [isLoading,setIsLoading]=useState(false);
  const {cart}=useCart()
  console.log(cart);
  const handleClick=()=>{
    dispatch({type:"SET_TOTAL"})
  }
  return (
    <div>
      <div className="flex flex-row justify-center">
        <img className="md:flex-shrink-0 w-2/4" src={image1} alt="#" />
        <div className="flex justify-center items-center">
          <img className="w-3/4" src={image2} alt="#" />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-2/4">
          <h5 className="font-extrabold text-3xl">Our Story</h5>
          <p className="w-3/4">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh.
            Supported by wide range of tailored marketing, data and
            service solutions, Exclusive has 10,500 sallers and 300 brands and
            serves 3 millioons customers across the region. <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div
          style={{
            width: 500,
            height:500,
          
          }}
          className="mr-20"
        >
          <img className="shadow-2xl " src={image3} alt="#" />
        </div>
      </div>
      <div className="flex justify-start items-center">
      <div style={{
        width:20,
        height:40,
        backgroundColor:"red"
      }}></div>This Month</div>
      <h1 className="text-3xl font-extrablod">Best Selling Products</h1>
      <div className="flex flex-wrap">
        {DATA.map((item) => {
          return (
            <Card
            key={item.id}
              price={item.price}
              title={item.title}
              imga={item.img}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-end mr-40">
      <Link  onClick={handleClick} to="/cart" className="border border-black py-2 my-10 w-28 rounded-md px-6 hover:bg-blue-500">Cart</Link>
      <p>Total Added:{cart.length}</p>
      </div>
      
    </div>
  );
};

export default Home;
