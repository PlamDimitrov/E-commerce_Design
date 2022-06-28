import './App.module.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignInOrRegister from './Pages/SignInOrRegister/SignInOrRegister';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in-or-register' element={<SignInOrRegister />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
