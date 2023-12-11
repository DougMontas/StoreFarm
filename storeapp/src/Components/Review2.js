import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import review1 from "../Assets/Reviews/review1.png";
import review2 from "../Assets/Reviews/review2.png";
import review4 from "../Assets/Reviews/review4.png";
import review5 from "../Assets/Reviews/review5.png";
import review7 from "../Assets/Reviews/review7.png";
import review8 from "../Assets/Reviews/review8.png";
import review9 from "../Assets/Reviews/review9.png";
import review10 from "../Assets/Reviews/review10.png";

export const Review2 = () => {
  const pics = [
    review1,
    review2,
    review4,
    review5,
    review7,
    review8,
    review9,
    review10,
  ];

  let getReviews = pics.map((pic) => {
    return <img className='review-img' src={pic} alt="review" key={Math.random() * pics.length} />;
  });

  return (
    <>
      <div>{getReviews}</div>
    </>
  );
};
