import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fruit from "../Assets/Juneplums.png";

export const Products = () => {
  return (
    <>
      <div className="container-fluid products">
        <div className="card" style={{ width: "23rem", height: "23rem" }}>
          <img src={fruit} className="card-img-top fruitpic" alt="june plum" />
          <div className="card-body">
            <h5 className="card-title">Dwarf June Plums</h5>
            <p className="card-text">3 LBS</p>
            <a
              href="https://www.etsy.com/listing/727749522/3lbs-fresh-dwarf-june-plums-always?ref=hp_active-mission-recs-rv-1-1"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Order Today
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "23rem", height: "23rem" }}>
          <img src={fruit} className="card-img-top fruitpic" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dwarf June Plums</h5>
            <p className="card-text">5 LBS</p>

            <a
              href="https://www.etsy.com/listing/719299352/fresh-dwarf-june-plums-5-lbs-always?click_key=dcc5505535d2da097de198f2a53608713b7aaeb2%3A719299352&click_sum=08ea2903&ref=shop_home_recs_2"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Order Today
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
