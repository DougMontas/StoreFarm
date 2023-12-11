import { useState } from "react";
import { Link } from "react-router-dom";

export const Discount = () => {
  let [visible, setVisible] = useState("discount-notvisible");
  setTimeout(() => {
    setVisible("discount");
  }, 5000);

  return (
    <div className={visible}>
      <Link to="./discountform">
        <button className="button">Get 15% Off</button>
      </Link>
    </div>
  );
};
