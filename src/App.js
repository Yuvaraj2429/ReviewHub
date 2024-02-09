import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Bank from './Components/Categories/Bank/Bank';
import Fashion from './Components/Categories/Fashion/Fashion';
import Herbal from './Components/Categories/Herbal/Herbal';
import Laptop from './Components/Categories/Laptop/Laptop';
import Phone from './Components/Categories/Phone/Phone';
import Shoes from './Components/Categories/Shoes/Shoes';
import Travel from './Components/Categories/Travel/Travel';
import Watches from './Components/Categories/Watches/Watches';
import Banking from './Components/Categories/Bank/Banking';
import ReviewList from './Components/ReviewList';
import ReviewForm from './Components/ReviewForm';
import Login from './Components/Login/Login';
import Travelmain from './Components/Categories/Travel/Travelmain';
import Shoemain from './Components/Categories/Shoes/Shoemain';
import Watchmain from './Components/Categories/Watches/Watchmain';
import Phonemain from './Components/Categories/Phone/Phonemain';
import Laptopmain from './Components/Categories/Laptop/Laptopmain';
import Herbalmain from './Components/Categories/Herbal/Herbalmain';
import Fashionmain from './Components/Categories/Fashion/Fashionmain';

import JoinNow from './Components/JoinNow';
import ProtectedRoute from './Components/Protected';
import React, { useEffect, useState } from "react";



function App() {
  

  return (
    <BrowserRouter scrollRestoration="auto">
      <Header />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="Bank" element={< Bank />} />
        <Route path="Fashion" element={< Fashion />} />
        <Route path="Herbal" element={< Herbal />} />
        <Route path="Laptop" element={< Laptop />} />
        <Route path="Phone" element={< Phone />} />
        <Route path="Shoes" element={< Shoes />} />
        <Route path="Travel" element={< Travel />} />
        <Route path="Watches" element={<Watches />} />
        <Route path="ReviewList" element={<ReviewList />} />
        <Route path="JoinNow" element={<JoinNow />} />
        <Route path="Bank/Banking" element={<Banking />} />
        <Route path="Fashion/Fashionmain" element={<Fashionmain />} />
        <Route path="Herbal/Herbalmain" element={<Herbalmain />} />
        <Route path="Laptop/Laptopmain" element={<Laptopmain />} />
        <Route path="Phone/Phonemain" element={<Phonemain />} />
        <Route path="Shoes/shoemain" element={<Shoemain />} />
        <Route path="Travel/Travelmain" element={<Travelmain />} />
        <Route path="Watches/Watchmain" element={<Watchmain />} />

        <Route path="/ReviewForm" element={<ReviewForm />} />
        <Route path="/ReviewList" element={<ReviewList />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
