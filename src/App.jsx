import Login from "./screens/Login";
import Register from "./screens/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App=()=>{
    return <div className="flex justify-center">
        <BrowserRouter>
    <Routes>
<Route path="/" element={<Login/>}/>

<Route path="/register" element={<Register/>} />
    </Routes>
        </BrowserRouter>
    </div>
}
export default App;
