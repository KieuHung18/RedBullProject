import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Profile } from './page/Profile-FrontEnd/Profile';
// import PackageList from './page/PackageList/PackageList';
import {PackageList} from './page/PackageList/PackageList';
import  {PackageDetail}  from './page/PackageDetail/PackageDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PackageList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
