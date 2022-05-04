import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import AddPackage from "./page/AddPackage/AddPackage";
import  PackageList  from './page/PackageList/PackageList';
import Footer from './page/Footer/Footer';
import Navbar from './page/Navbar/Navbar';
import AboutUS from './page/AboutUsPage/AboutUs.jsx';
import Profile from './page/Profile-FrontEnd/Profile';
import Profile2 from './page/Profile-FrontEnd/Profile2';
import  PackageDetail  from './page/PackageDetail/PackageDetail';
import NotFound from './page/NotFound/NotFound';
import {BrowserRouter,Routes,Route,Navigate,Outlet } from 'react-router-dom';
import {HomePage} from './page/HomePage/HomePage';
import Login from './page/Login/Login';
import Admin from "./page/Admin/Admin";
import EditPackage from "./page/EditPackage/EditPackage";
import AccessDenied from "./page/AccessDenied/AccessDenied";
import InsertCustomer from './page/InsertPage/InsertCustomer.jsx';
import InsertUser from './page/InsertPage/InsertUser.jsx';
import EditUser from './page/InsertPage/EditUser.jsx';
import EditCustomer from './page/InsertPage/EditCustomer.jsx';

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

const AdminProtectedRoute = ({ redirectPath = "/denied", children }) => {
  if (JSON.parse(localStorage.getItem("user")).userRole!="ROLE_ADMIN") {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

const ProtectedLogin = ({ redirectPath = "/home"}) => {
  if (localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Login />;
};
const PackageListGate = () => {
  if (JSON.parse(localStorage.getItem("user")).userRole=="ROLE_ADMIN") {
    return <Admin />;
  }else{
    return <PackageList />;
  }
  
};


const Application = () => {
  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* PUBLIC ROUTES IN HERE */}
      <Route path="*" element={<NotFound />} />
      <Route path="denied" element={<AccessDenied />} />
      <Route path="/" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<ProtectedLogin />} />
      <Route path="aboutus" element={<AboutUS />} />

      <Route path="/insertuser" element={<InsertUser />} />
      <Route path="/insertcustomer" element={<InsertCustomer/>} />
      <Route path="/edituser/:id" element={<EditUser />} />
      <Route path="/editcustomer/:id" element={<EditCustomer/>} />
      <Route path="admin" element={<Admin />} />
      <Route path="addpackage" element={<AddPackage />} />
      <Route path="editpackage/:id" element={<EditPackage/>} />

      <Route element={<ProtectedRoute/>}>
        {/* PROTECTED ROUTES IN HERE */}
        <Route path="profile" element={<Profile2 />} />
        <Route path="packagelist" element={<PackageListGate />} />
        <Route path="package/:id" element={<PackageDetail />} />
        <Route path="profile" element={<Profile />} />

       <Route element={<AdminProtectedRoute/>}>
        {/* ADMIN PROTECTED ROUTES IN HERE */}
        
       </Route>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Application/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
