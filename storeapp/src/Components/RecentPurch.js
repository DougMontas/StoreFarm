import "../Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fruit from "../Assets/Juneplumspic4.jpeg";
import { useState, useEffect } from "react";

export const RecentPurch = () => {
  let [notHiddenClass, setNotHiddenClass] = useState("recentmain-hidden");

  useEffect(() => {
    const purchases = [
      {
        img: fruit,
        stars: "★★★★★",
        name: "Nicole Edwards from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased:
          "The fruit was good quality and came in earlier than expected! Thank you!",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "MarAnn Thornhill from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:3",
        purchased:
          "Got my fruits for my 3rd purchase as well as the replacement.",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Swayne groves from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "Omg I loved you guys June plum it’s the best",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Xia Garcia from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "The quality of the fruit were great!",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Yaromil from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "I'll be sure to order again and hope others do too.",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Stacy Ann from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "I was very satisfied ❤️😋.. just made my 2nd order",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Lisbeth from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "Amazing quality loved the manzana de oro",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Keyla from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "Thank you for the good quality of the product.!",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Sheeva from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:2",
        purchased:
          "Why are they so small and young I don’t think they were fit enough",
      },
      {
        img: fruit,
        stars: "★★★★",
        name: "Alicia from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "Plums were fresh and well package",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "khoi from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:3",
        purchased: "Really Fresh as described. I’ll buy again. Thank You",
      },
      {
        img: fruit,
        stars: "★★★★",
        name: "Tricia from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased:
          "Items arrived today and matched the description and I’m pleased and they are currently being stewed",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "sandra from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:2",
        purchased: "Got mine today,  beautiful tasty",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Eliana from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "Very good quality and good service",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Tandika from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased: "It was worth the wait.",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Naedia from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:1",
        purchased:
          "They all taste great. I’ve ordered from here multiple times.",
      },
      {
        img: fruit,
        stars: "★★★★★",
        name: "Cibelis from USA",
        item: "Recently bought 5LBS of June Plums",
        qty: "Qty:3",
        purchased: "The best june plums found online",
      },
    ];

    let postToaster = () => {
      let delay = 9000;
      let last = purchases.length;

      purchases.forEach((customer, i) => {
        setTimeout(() => {
          if (i + 1 === last) {
            setTimeout(() => {
              setNotHiddenClass("recentmaintwo");
            }, 8000);
          } else {
            let classEdit = () => {
              setNotHiddenClass("recentmain");
            };
            setTimeout(classEdit, 9000);
            let create = document.getElementById("recentmain");
            create.innerHTML = `<img src=${customer.img} alt="juneplums" />
            <div className='spandiv'>
              <span className='purchinfo'>${customer.stars}</span>
              <br />
              <span className='purchinfo'>${customer.name}</span>
              <br />
              <span className='purchinfo'>
                ${customer.item} ${customer.qty}
              </span>
              <br />
              <span className='purchinfo'>${customer.purchased}</span>
              <br />
            </div>`;
          }
          setTimeout(() => {
            setNotHiddenClass("recentmaintwo");
          }, 6000);
        }, i * delay);
      });
    };
    postToaster();
  }, []);

  return (
    <>
      <div className={notHiddenClass} id="recentmain"></div>
    </>
  );
};
