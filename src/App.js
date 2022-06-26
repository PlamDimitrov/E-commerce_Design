import './App.module.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignInOrRegister from './Pages/SignInOrRegister/SignInOrRegister';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInOrRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
