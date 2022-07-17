import './App.module.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignInOrRegister from './Pages/SignInOrRegister/SignInOrRegister';
import SignInAdmin from './Pages/SignInAdmin/SignInAdmin';
import Shop from './Pages/Shop/Shop';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ProductView from './Pages/ProductView/ProductView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-view' element={<ProductView />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sign-in-or-register' element={<SignInOrRegister />} />
          <Route path='/sign-in-admin' element={<SignInAdmin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
