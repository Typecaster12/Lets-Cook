import { Outlet } from "react-router-dom";
import Header from "../Ui/Header";
import Footer from "../Ui/Footer";
import Chatbot from "../Ui/Chatbot";

const AppLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
        <Chatbot/>
    </>
  )
}

export default AppLayout;