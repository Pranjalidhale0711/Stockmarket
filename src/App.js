import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Components/Home";
import { useEffect, useState } from "react";
import { getUser } from "./Api/auth";
import { Link, useNavigate } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import Buy from './Components/Buy';
import Sell from './Components/Sell';
import Details from "./Components/Details";


function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

const AppRoutes = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({ user: " " });
  const navigate = useNavigate();
  const verifyToken = async () => {
    if (localStorage.getItem("user")) {
      const res = await getUser();
      if(res.error!=null){
        toast.error(res.error);
        setTimeout(() => {
          navigate("/sign-in");
        }, 3000);
        return;
      }
      if (res != null) {
        setUserData({user: res.user});
      }
    } 
    else {
      navigate("/sign-in");
    }
  };
  useEffect(() => {
    if (location.pathname !== "/sign-in" && location.pathname !== "/sign-up") {
      verifyToken();
    }
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />}></Route>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/dash-board" element={<DashBoard />}></Route>
        <Route exact path="/buy" element={<Buy />}></Route>
        <Route exact path="/sell" element={<Sell />}></Route>
        <Route exact path="/details/:stockName" element={<Details />}></Route>
      

      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default App;
