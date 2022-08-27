import './App.module.css';
import { Routes, Route } from "react-router-dom";
import Store, { StoreContext } from "./globalFunctions/Store/Store";
import { Fragment, useEffect } from 'react';
import Auth from "./globalFunctions/Authenticator";

import LoginOrRegister from './Pages/LoginOrRegister/LoginOrRegister';
import LoginAdmin from './Pages/LoginAdmin/LoginAdmin';
import Shop from './Pages/Shop/Shop';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Home from './Pages/Home/Home';
import ProductView from './Pages/ProductView/ProductView';
import Checkout from './Pages/Checkout/Checkout';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import UserProfile from './Pages/UserProfile/UserProfile';
import NotFound from './Pages/NotFound/NotFound';


const content = ({ state }) => {
  let isAdmin = state.role === "admin";
  let isUser = state.role === "user";

  return <>
    <Auth>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-view' element={<ProductView />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/sign-in-or-register' element={<LoginOrRegister />} />
        <Route path='/admin' element={<LoginAdmin />} />
        <Route path='/user/profile-page' element={isUser ? <UserProfile /> : <NotFound />} />
        <Route path='/admin/control-panel/*' element={isAdmin ? <AdminPanel /> : <NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Auth>
  </>
};

function App() {
  return (
    <div className="App">
      <Store>
        <StoreContext.Consumer>
          {content}
        </StoreContext.Consumer>
      </Store>
    </div>
  );
}

export default App;
