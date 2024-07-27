import React from "react";
import logo2 from "../Assets/Logos/logolargenobg.png";
import img1 from "../Assets/JunePlums-section1.png";
import img2 from "../Assets/JunePlums-Section2.png";
import juice from "../Assets/june-plum-juice.jpg";
import sweet from "../Assets/sweet & spicy.png";
import chutney from "../Assets/Chutney.png";
import stewed from "../Assets/stewed.png";
import pickled from "../Assets/pickled.png";
import carrotjuice from "../Assets/carrotjuice.png";

export const Home2 = () => {
  return (
    <>
      <div className="container-fluid bg">
        {/* <ul className="links1">
          <li className="list">Home</li>
          <li className="list">About Us</li>
          <li className="list">Products</li>
        </ul> */}
        {/* <div className="logo2">
            <img height='300px' width='900px' src={logo2} />
        </div> */}
        <div>
          {/* <h1 className="subtitle topintro">
            ALWAYS FRESH FROM THE FARM TO YOUR DOOR STEP <span></span>
          </h1> */}

          <div className="orderbuttons">
            <h3 className="ship">Shipping Available</h3>
            <div className="thebuttons">
              <button className="btn btn-success button1">
                <a
                  href="https://www.etsy.com/listing/727749522/3lbs-fresh-dwarf-june-plums-always?ref=hp_active-mission-recs-rv-1-1"
                  alt="order"
                  target="_blank"
                  rel="noreferrer"
                >
                  Order Now
                </a>
              </button>
              <button className="btn btn-success button2">
                <a
                  href="https://www.etsy.com/shop/MyRedlandsFarm"
                  alt="more fruits"
                  target="_blank"
                  rel="noreferrer"
                >
                  See More Fruits
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="centerpiece">
          <h1 className="center1">HAVE A TASTE</h1>
          <h1 className="center2">THE BEST</h1>
          <h1 className="center3">DWARF</h1>
          <h1 className="center4 5">JUNE PLUMS</h1>
        </div>
      </div>
      <div className="container-fluid section2">
        <div className="shape1"></div>

        <div className="img-fluid section2a">
          <img className="section2aimg" src={img1} />
        </div>

        <p className="section2asub">
          June plums are a good source of essential vitamins and minerals,
          including vitamin C, potassium, calcium, magnesium, iron, and
          phosphorus. They are also high in dietary fiber and provide a good
          source of antioxidants. In addition, June plums are low in calories
          and contain no fat or cholesterol. June plums have a variety of
          potential health benefits associated with them. They are thought to
          help prevent certain forms of cancer, improve digestion, boost
          immunity, and reduce inflammation. Additionally, they may help lower
          cholesterol levels, improve vision, and reduce the risk of stroke.
          June plums have a sweet-tart flavor similar to other tropical fruits
          such as mangoes and guavas. They have thin skin that can be eaten or
          peeled off before consumption.
        </p>
      </div>
      <div className="orderbuttons2">
        <div className="thebuttonstwo">
          <button className="btn btn-success button1">
            <a
              href="https://www.etsy.com/listing/727749522/3lbs-fresh-dwarf-june-plums-always?ref=hp_active-mission-recs-rv-1-1"
              alt="order"
              target="_blank"
              rel="noreferrer"
            >
              Order Now
            </a>
          </button>
          <button className="btn btn-success button2">
            <a
              href="https://www.etsy.com/shop/MyRedlandsFarm"
              alt="more fruits"
              target="_blank"
              rel="noreferrer"
            >
              See More Fruits
            </a>
          </button>
        </div>
      </div>

      <div className="container-fluid section2">
        <p className="section2asub">
          June plums can be used in a variety of recipes, both sweet and savory.
          They pair well with other tropical fruits, such as mangoes and guavas,
          and more traditional ingredients, such as nuts, cheeses, and herbs.
          June plums can make jams, chutneys, sauces, and even ice cream. They
          can also be eaten raw or used as a topping for cakes and other baked
          goods. By incorporating June plums into your diet, you can enjoy their
          sweet-tart flavor while reaping their potential health benefits. So
          why not give them a try? You will not be disappointed!
        </p>
        <div className="shape2"></div>
        <div className="section2a">
          <img className="section2aimg" src={img2} />
        </div>
      </div>

      <div className="container-fluid recipe">
        <h1 className="rectitle">JUNE PLUM RECIPES</h1>
        <section className="main-sec">
          <div className="reccards">
            <div className="card" style={{ width: "24rem" }}>
              <img src={juice} className="card-img-top juice" alt="..." />
              <div className="card-body">
                <h5 className="card-title">June Plum Juice Recipe</h5>
                <p className="card-text">
                  Delicious and refreshing june plum juice
                </p>
                {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <p className="recinstruction1">
              Step 1: Wash and peel the June plums (do not peel if you wish to
              try it with the skin)
              <br /> Step 2: Remove the seed (at the core) and diced the flesh.{" "}
              <br />
              Step 3: Wash, peel and dice the ginger.
              <br /> Step 4: Add the June plum, ginger and water into a blender
              and blend until smooth.
              <br />
              Step 5: Then strain into a container, sweeten to taste with sugar.
              <br />
              <div>
                <a
                  alt="source"
                  href="https://jamaicanfoodsandrecipes.com/jamaican-june-plum-juice/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source
                </a>
              </div>
            </p>
          </div>

          <div className="reccards">
            <div className="card" style={{ width: "24rem" }}>
              <img src={sweet} className="card-img-top juice" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sweet and Spicy Ambarella Curry</h5>
                <p className="card-text">Sweet and Spicy</p>
                {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <p className="recinstruction1">
              Step 1: Just remove the skin, rinse and cook.
              <br />
              Step 2: Over medium heat, add oil(3 tbsps)to a pan. Once the
              oil heats, add the curry leaves( a sprig), cardamom pods(3), and
              cinnamon(1″).
              <br />
              Step 3: Add the sliced onion(1 large), green chillies (1 chopped),
              and mustard seeds.
              <br />
              Step 4: Cook for further 2 minutes over low heat or until the
              mustard seeds pop. Pour in water(2 cups, add more if needed),
              followed by sugar(1 cup), and cook over medium heat. While the
              liquid slow simmers, add chilli flecks(3 tsp), red chilli
              powder(1/2 tsp)and continue cooking over medium heat. 3 minutes.
              <br />
              Step 5: Add the ambarella into the simmering liquid.
              <br />
              Step 6: Make sure there is enough water covering the ambarella, if
              not pour more water and let the curry simmer over medium heat
              until the gravy of turns to dark amber. This would take some time
              as the ambarella curry is thick and takes longer to soften. Season
              with salt while the curry cooks.
              <br />
              <div>
                <a
                  alt="source"
                  href="https://www.islandsmile.org/sweet-and-spicy-ambarella-curry/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source - More Details
                </a>
              </div>
            </p>
          </div>
          <div className="reccards">
            <div className="card" style={{ width: "24rem" }}>
              <img src={chutney} className="card-img-top juice" alt="..." />
              <div className="card-body">
                <h5 className="card-title">June Plum Chutney Recipe</h5>
                <p className="card-text">
                  Delicious and refreshing june plum chutney
                </p>
                {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <p className="recinstruction1">
              Step 1: Peel off ambarella, wash and cut them into pieces and
              remove the seed.
              <br />
              Step 2: Keep a clay pot on the stove & add sugar into it. Add
              water to the level until all sugar is covered and heat.
              <br />
              Step 3: When sugar heats well add chopped ginger, chopped garlic,
              cinnamon, cloves, and cardamom.
              <br />
              Step 4: Then add vinegar. If you don’t like the taste of vinegar
              you can avoid using it.
              <br />
              Step 5: Add ambarella pieces into the sugar mixture, mix
              thoroughly and keep it closed until they boil. As ambarella boils
              it changes colour.
              <br />
              Step 6: Then add roasted chili powder, chili powder, and salt.
              Give it a good mix, cover and cook under medium heat. • It needs
              to cook this while stirring time to time until mixture gets
              thicker. • Meanwhile, we can sterilize the bottles that we need to
              put the chutney.
              <br />
              Step7: When the chutney is ready get the pot out of the stove and
              let it cool down a bot. It doesn’t need to wait until it cools
              down completely. • After that put the chutney into prepared
              bottles.
              <div>
                <a
                  alt="source"
                  href="https://www.dailylife.lk/kitchen/ambarella-chutney/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source - More Details
                </a>
              </div>
            </p>
          </div>
          <div className="reccards">
            <div className="card" style={{ width: "24rem" }}>
              <img src={stewed} className="card-img-top juice" alt="..." />
              <div className="card-body">
                <h5 className="card-title">June Plum Stewed Recipe</h5>
                <p className="card-text">Delicious stewed june plum</p>
                {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <p className="recinstruction1">
              <br />
              Step 1: Put a medium-size pot over high flame with four cups of
              water, cover, and bring to a boil. Add the June plum pieces, cover
              and continue boiling for 15 minutes.
              <br />
              Step 2: Add the sugar and ginger, stir, cover the pot and lower
              the flame. Simmer the June plum while stirring constantly until
              the liquid is thick and syrupy. Add salt to balance out the
              sweetness.
              <br /> Step 3: When the liquid reaches a caramelized consistency
              remove from heat and pour into a glass bottle, add the splash of
              rum.
              <br />
              Step 4: The stewed June plum should be completely cooled before
              refrigerated. Keep for a week in the refrigerator. Best with bread
              or crackers
              <div>
                <a
                  alt="source"
                  href="https://www.jamaicancookery.com/2014/12/jamaica-stewed-june-plum-recipe.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source - More Details
                </a>
              </div>
            </p>
          </div>
          <div className="reccards">
            <div className="card" style={{ width: "24rem" }}>
              <img src={pickled} className="card-img-top juice" alt="..." />
              <div className="card-body">
                <h5 className="card-title">June Plum Pickled Recipe</h5>
                <p className="card-text">Delicious pickled june plums</p>
                {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <p className="recinstruction1">
              Step 1: Wash and peel the June plums (do not peel if you wish to
              try it with the skin)
              <br /> Step 2: Remove the seed (at the core) and diced the flesh.{" "}
              <br />
              Step 3: Wash, peel and dice the ginger.
              <br /> Step 4: Add the June plum, ginger and water into a blender
              and blend until smooth.
              <br />
              Step 5: Then strain into a container, sweeten to taste with sugar.
              <br />
              <div>
                <a
                  alt="source"
                  href="https://mamasnowcooks.com/recipe/uncategorized-recipes/pickled-june-plum-recipe/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source - More Details
                </a>
              </div>
            </p>
          </div>
          <div className="reccards">
            <div className="card" style={{ width: "24rem" }}>
              <img src={carrotjuice} className="card-img-top juice" alt="..." />
              <div className="card-body">
                <h5 className="card-title">June Plum Juice Recipe</h5>
                <p className="card-text">
                  Delicious and refreshing june plum juice.
                </p>
                {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
            <p className="recinstruction1">
              Step 1: Wash June plum, (you can peel the June plum if you want,
              sometimes I do, other times I don't). Remove the flesh from the
              seed.
              <br />
              Step 2: Wash and dice carrots and  ginger and add to the bowl with
              the June plums.
              <br />
              Step 3: Add a portion of June plum, carrots and ginger to a
              blender, and pour enough water to cover them
              <br />
              Step 4: Blend until well smooth. Pour out the juice into a large
              bowl
              <br />
              Step 5: Repeat the process until all the June plums, carrots  and
              ginger have been blended
              <br />
              Step 6: Strain the juice through a strainer. Strain the juice a
              second time through a piece of cheesecloth
              <br />
              Step 7: Sweeten with sugar. Add the juice of 1 lime. Serve over
              cracked ice and enjoy
              <div>
                <a
                  alt="source"
                  href="https://www.jamaicancookery.com/2018/10/carrot-june-plum-drink.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source - More Details
                </a>
              </div>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
