import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Body } from "../Components/Body";
import { Products } from "../Components/Products";
import { Info } from "../Components/Info";
import { Discount } from "../Components/Discount";
import { Footer } from "../Components/Footer";
import { RecentPurch } from "../Components/RecentPurch";

export const Home = () => {
  return (
    <>
      <div className="container-fluid App">
        <Products />
        <Body />
        <Info />
        <Discount />
        <Footer />
        <RecentPurch />
      </div>
    </>
  );
};
