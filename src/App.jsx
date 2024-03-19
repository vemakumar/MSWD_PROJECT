import Login from "./screens/Login";
import Register from "./screens/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import { useState } from "react";
// import Card from "./components/Card";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
const App = () => {
  const [isLogin,setIsLogin]=useState(false)
  return (
    <div className="flex flex-col flex-wrap">
      <BrowserRouter>
      <Navbar/>
      <hr />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/register" element={<Register isLogin={isLogin} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

      {/* <BrowserRouter>  <Navbar/></BrowserRouter>  */}
    </div>
  );
};
export default App;
// const App=()=>{
//   return <div>
//     <BrowserRouter>
//     <Navbar/>
//     </BrowserRouter>
//   </div>
// }
// export default App;
