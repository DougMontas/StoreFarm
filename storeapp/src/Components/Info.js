import "../Styles/styles.css";
import june1 from "../Assets/Juneplum1.jpeg";
import june3 from "../Assets/Juneplum3.jpeg";

export const Info = () => {
  return (
    <>
      <div className="info">
        <div className="info1">
          <img className="pics info1pic" src={june1} alt="juneplum1" />
          <p>
            June plums are a good source of essential vitamins and minerals,
            including vitamin C, potassium, calcium, magnesium, iron, and
            phosphorus. They are also high in dietary fiber and provide a good
            source of antioxidants. In addition, June plums are low in calories
            and contain no fat or cholesterol.
          </p>
        </div>

        <p>
          June plums have a variety of potential health benefits associated with
          them. They are thought to help prevent certain forms of cancer,
          improve digestion, boost immunity, and reduce inflammation.
          Additionally, they may help lower cholesterol levels, improve vision,
          and reduce the risk of stroke.
        </p>

        <div className="info3">
          <p>
            June plums have a sweet-tart flavor similar to other tropical fruits
            such as mangoes and guavas. They have thin skin that can be eaten or
            peeled off before consumption.
          </p>
          <img className="pics info3pic" src={june3} alt="juneplum3" />
        </div>
        <p>
          June plums can be used in a variety of recipes, both sweet and savory.
          They pair well with other tropical fruits, such as mangoes and guavas,
          and more traditional ingredients, such as nuts, cheeses, and herbs.
          June plums can make jams, chutneys, sauces, and even ice cream. They
          can also be eaten raw or used as a topping for cakes and other baked
          goods. By incorporating June plums into your diet, you can enjoy their
          sweet-tart flavor while reaping their potential health benefits. So
          why not give them a try? You will not be disappointed!
        </p>
      </div>
      <span>Source: <a href='https://gardenersmag.com/june-plum/' target="_blank" rel="noreferrer">gardenersmag.com/june-plum/ </a> </span>
    </>
  );
};
