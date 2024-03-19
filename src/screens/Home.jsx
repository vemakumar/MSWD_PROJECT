import React from "react";
import image1 from "../images/image.png";
import image2 from "../images/masti.png";
import image3 from "../images/girls.png";
import Card from "../components/Card";
import itemImage from "../images/item.png";

const Home = () => {
  const items = [
    { title: "Shell", price: "50$", rating: "4", imga: itemImage },
    { title: "Book", price: "50$", rating: "3", imga: itemImage },
    { title: "Pencil", price: "20$", rating: "3", imga: itemImage },
    { title: "Laptop", price: "100$", rating: "3", imga: itemImage },
    { title: "Shell", price: "50$", rating: "4", imga: itemImage },
    { title: "Book", price: "50$", rating: "3", imga: itemImage },
    { title: "Pencil", price: "20$", rating: "3", imga: itemImage },
    { title: "Laptop", price: "100$", rating: "3", imga: itemImage },
    { title: "Shell", price: "50$", rating: "4", imga: itemImage },
    { title: "Book", price: "50$", rating: "3", imga: itemImage },
    { title: "Pencil", price: "20$", rating: "3", imga: itemImage },
    { title: "Laptop", price: "100$", rating: "3", imga: itemImage },
  ];
  return (
    <div>
      <div className="flex flex-row justify-center">
        <img className="w-2/4" src={image1} alt="#" />
        <div className="flex justify-center items-center">
          <img className="w-3/4" src={image2} alt="#" />
        </div>
      </div>
      <div className="flex justify-around">
        <div className="w-2/4">
          <h5 className="font-extrabold text-3xl">Our Story</h5>
          <p className="w-3/4">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh.
            Supported by wide range of tailored marketing, data and
            service solutions, Exclusive has 10,500 sallers and 300 brands and
            serves 3 millioons customers across the region. <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div
          style={{
            width: 500,
            height:500,
          
          }}
          className="mr-20"
        >
          <img className="shadow-2xl " src={image3} alt="#" />
        </div>
      </div>
      <div className="flex justify-start items-center">
      <div style={{
        width:20,
        height:40,
        backgroundColor:"red"
      }}></div>This Month</div>
      <h1 className="text-3xl font-extrablod">Best Selling Products</h1>
      <div className="grid grid-cols-4">
        {items.map((item) => {
          return (
            <Card
              price={item.price}
              rating={item.rating}
              title={item.title}
              imga={item.imga}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
