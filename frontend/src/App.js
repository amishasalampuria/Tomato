import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from 'C:/Web_Development/zomato/frontend/src/pages/Home/Home.js';
import Cart from 'C:/Web_Development/zomato/frontend/src/pages/Cart/Cart.js';
import PlaceOrder  from './pages/PlaceOrder/PlaceOrder.js';
import NotFound from './pages/NotFound.js';
import Footer from 'C:/Web_Development/zomato/frontend/src/components/Footer/Footer.js'
import LoginPopUp from './components/LoginPopUp/LoginPopUp.js';

function App() {

  const[showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
   <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path="*"  element={<NotFound/>} />
      </Routes>
   </div>
   <Footer/>
   </>
  );
}

export default App;





// zxc@gmail.com
// Abcdefg123
// 12345678