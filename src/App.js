import { lazy, memo, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.module.css';
import Store, { StoreContext } from "./globalFunctions/Store/Store";
import MenuStore, { MenuContext } from "./globalFunctions/Store/MenuStore";
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
import NotFound from './Pages/NotFound/NotFound';

const MemoHeader = memo(Header);
const AdminPanel = lazy(() => import('./Pages/AdminPanel/AdminPanel'));
const UserProfile = lazy(() => import('./Pages/UserProfile/UserProfile'));

const content = ({ state }, menuState) => {
  let isAdmin = state.role === "admin";
  let isUser = state.role === "user";

  return <>
    <Auth>
      <MemoHeader />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-view' element={<ProductView />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/sign-in-or-register' element={<LoginOrRegister />} />
        <Route path='/admin' element={<LoginAdmin />} />
        <Route path='/user/profile-page' element={
          isUser
            ? <Suspense fallback={<NotFound />}>
              <UserProfile />
            </Suspense>
            : <NotFound />
        } />
        <Route path='/admin/control-panel/*' element={
          isAdmin
            ? <Suspense fallback={<NotFound />}>
              <AdminPanel />
            </Suspense>
            : <NotFound />
        } />
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
          {(state) => <MenuStore>
            <MenuContext.Consumer>
              {(menuState) => content(state, menuState)}
            </MenuContext.Consumer>
          </MenuStore>}
        </StoreContext.Consumer>
      </Store>
    </div>
  );
}

export default App;
