import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Background />
      <Footer />
    </div>
  );
}

export default App;
