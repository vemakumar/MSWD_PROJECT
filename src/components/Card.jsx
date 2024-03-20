import { useState } from "react";
import useCart from "../hooks/useCart";
const Card = ({title,price,imga}) => {
  const [count,setCount]=useState(0)
  const {dispatch}=useCart()
  const handleAdd=()=>{
    const obj={title,price,imga}
    dispatch({type:"ADD_CART",payload:obj})
    setCount(count+1);
  }
  return (
    <div style={{
      width:250,
      
    }} className="p-4 bg-red">
      <div>
        <img src={imga} alt="" />
      </div>
      <div className="text-xl my-2">
        <p>{title}</p>
        <p>Price:{price}</p>
      </div>
      <button onClick={handleAdd}  className="border border-black w-20 hover:bg-slate-400">Add</button>
      <p>Selected:{count}</p>
    </div>
  );
};
export default Card;
