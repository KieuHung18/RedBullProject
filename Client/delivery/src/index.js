import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import { PackageList } from './page/PackageList/PackageList';
import Footer from './page/Footer/Footer';
import Navbar from './page/Navbar/Navbar';
import AboutUS from './page/AboutUsPage/AboutUs.jsx';
import { Profile } from './page/Profile-FrontEnd/Profile';
import  {PackageDetail}  from './page/PackageDetail/PackageDetail';
import NotFound from './page/NotFound/NotFound';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {HomePage} from './page/HomePage/HomePage';
import Login from './page/Login/Login';
const routing=(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="packagelist" element={<PackageList />} />
        <Route path="package/:id" element={<PackageDetail />} />
        <Route path="aboutUs" element={<AboutUS />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
const page=(
    <div className='ract-root'>
    <Navbar/>
    {routing}
    <Footer/>
    </div>
  );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {page}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
