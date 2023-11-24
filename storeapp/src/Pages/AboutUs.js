import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Review2 } from "../Components/Review2";

export const AboutUs = () => {
  window.addEventListener("load", () => {
    let getClass = document.getElementById("p1");
    getClass.className = "p1after";
  });
  return (
    <>
      <div className="container-fluid aboutus">
        <div className="info3">
          <p className="p1" id="p1">
            We are located in South Florida and enjoy bringing a piece of the
            Carribean to your door step. We are a family own business. We
            specialize in providing the best dwarf June Plums around.
          </p>
          <div className="info4">
            <p className="p2">
              FunFact: Other names for June Plums - Manzana de oro, Golden
              Apple, Ambarella, Otaheite Apple, Wi-Tree, Wi-Apple, Ainakori,
              Aioo kwai, Ambarella, Amra, Auri, Gnoe, Hevi, Hog plum, Jew plum,
              Kedongdong jawa, Kedongdong, Makaw farang.
            </p>
          </div>
        </div>
      </div>

      <div className="reviews">
        <a
          href="https://www.etsy.com/shop/MyRedlandsFarm?ref=dashboard-header#reviews"
          alt="reviews"
          target="_blank"
          rel="noreferrer"
        >
          <h4>click here for more reviews</h4>
        </a>
      </div>
      <div className="therevs">
        <Review2 />
      </div>
    </>
  );
};
