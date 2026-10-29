import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Product from "../page/Product";
import Login from "../page/Login";
import Register from "../page/Register";



export default function Appruot() {
    return (
        <>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>


        </>
    )
}
