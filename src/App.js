import './css/App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from './Checkout'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          } />

        <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path="/Login" element={
            <>
              <Login />
            </>
          } />

        </Routes>
      </Router>


    

    </div>
  );
}

export default App;
