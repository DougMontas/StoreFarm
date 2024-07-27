import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Body } from "../Components/Body";
import { Products } from "../Components/Products";
import { Info } from "../Components/Info";
import { Discount } from "../Components/Discount";
import { Footer } from "../Components/Footer";
import { RecentPurch } from "../Components/RecentPurch";
import { Carousel } from "../Components/Carousel";
import { Home2 } from "./Home2"

export const Home = () => {
  return (
    <>
      <div className="container-fluid App">
        {/* <Body /> */}
        {/* <Products /> */}
        <Home2 />
        {/* <Carousel /> */}
        {/* <Info /> */}
        <Discount />
        <Footer />
        <RecentPurch />
      </div>
    </>
  );
};
