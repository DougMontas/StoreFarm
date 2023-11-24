import "../Styles/styles.css";
import { Link } from "react-router-dom";

function TheNav() {
  return (
    <div className="container-fluid">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TheNav;
