import './App.module.css';
import { Routes, Route } from "react-router-dom";
import Store, { StoreContext } from "./globalFunctions/Store/Store";
import { Fragment } from 'react';
import Auth from "./globalFunctions/Authenticator";

import SignInOrRegister from './Pages/SignInOrRegister/SignInOrRegister';
import SignInAdmin from './Pages/SignInAdmin/SignInAdmin';
import Shop from './Pages/Shop/Shop';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ProductView from './Pages/ProductView/ProductView';
import Checkout from './Pages/Checkout/Checkout';

const content = () => {
  return <Fragment>
    <Header />
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product-view' element={<ProductView />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/sign-in-or-register' element={<SignInOrRegister />} />
      <Route path='/admin' element={<SignInAdmin />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </Fragment>

};

function App() {
  return (
    <div className="App">
      <Store>
        {/* <Auth> */}
        <StoreContext.Consumer>
          {content}
        </StoreContext.Consumer>
        {/* </Auth> */}
      </Store>
    </div>
  );
}

export default App;
