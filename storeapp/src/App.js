import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AboutUs } from "./Pages/AboutUs";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { DiscountForm } from "./Pages/DiscountForm";
import { Policy } from "./Pages/Policy";
import { Title } from "./Components/Title";
import logo2 from "./Assets/Logos/logolargenobg.png";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <div className="navbar-expand">
          <nav>
            <ul className="nav">
              <div className="logo">
                <Link to='/'>
                <img src={logo2} alt="logo" />
                </Link>
              </div>
              <div className="links">
                <li className="navli">
                  <Link className="navli" to="/">
                    Home
                  </Link>
                </li>
                <li className="navli">
                  <Link className="navli" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="navli">
                  <Link className="navli" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="navlihidden">
                  <Link className="navli" to="./discountform">
                    Discount Form
                  </Link>
                </li>
                <li className="navlihidden">
                  <Link className="navli" to="./policy">
                    Policy
                  </Link>
                </li>
                <li className="navlihidden">
                  <Link className="navli" to="./policy">
                    Refund
                  </Link>
                </li>
                <li className="navlihidden">
                  <Link className="navli" to="./policy">
                    Return
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          <Title />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/discountform" element={<DiscountForm />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
