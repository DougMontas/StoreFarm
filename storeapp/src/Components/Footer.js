import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <ul>
          <div>
            <Link to="/policy">
              <li>Refund Policy</li>
            </Link>
          </div>
          <div>
            <Link to="/policy">
              <li>Return Policy</li>
            </Link>
          </div>
          <div>
            <Link to="/policy">
              <li>Privacy Policy</li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};
