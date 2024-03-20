import Login from "./screens/Login";
import Register from "./screens/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import { useState } from "react";
import Cart from "./screens/Cart";
import Footer from "./components/Footer";
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex flex-col md:w-full sm:w-3/4">
      <BrowserRouter>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/register" element={<Register isLogin={isLogin} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
