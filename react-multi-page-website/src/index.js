import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Riders,
  Location,
  StartButton
} from "./components";
import 'bootstrap/dist/css/bootstrap.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/riders" element={<Riders />} />
      <Route path="/location" element={<Location />} />
    </Routes>
    <Footer />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
