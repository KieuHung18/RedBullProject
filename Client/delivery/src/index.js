import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PackageList } from './page/PackageList/PackageList';
import Footer from './page/Footer/Footer';
import Navbar from './page/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import AboutUS from './page/AboutUsPage/AboutUs.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <PackageList /> */}
    {/* <Navbar />
    <Footer /> */}
    <AboutUS />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
