import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Title = () => {
  return (
    <>
      <div className="container-fluid maintitle">
        <h1 className="title">My Redlands Farm</h1>
        <div>
          <h2 className="subtitle">
            always fresh from the farm to your door step!
          </h2>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};
