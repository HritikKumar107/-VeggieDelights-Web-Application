import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Master(){
    return(
        <>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
        </>
    )
}