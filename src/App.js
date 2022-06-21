import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";
import Cartitem from "./Cartitem";
import { useState } from "react";

function App() {
  let products = [
    {
      id: 1,
      productName: "iPhone",
      prize: 100000,
      img: "https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/2/g/r/-original-imagca5kqvhuscnv.jpeg?q=70",
      detail: "Apple iPhone mobile was launched in June 2007. . ",
    },
    {
      id: 2,
      productName: "OnePlus",
      prize: 75000,
      img: "https://rukminim1.flixcart.com/image/416/416/l2krs7k0/mobile/2/u/v/nord-ce-2-lite-5g-le2505-oneplus-original-imagdwf8mgtbmuz2.jpeg?q=70",
      detail: "The OnePlus 10 Pro 5G has upgrades over the 9 Pro. ",
    },
    {
      id: 3,
      productName: "Asus",
      prize: 50000,
      img: "https://rukminim1.flixcart.com/image/416/416/ky7lci80/mobile/b/q/6/-original-imagahvgmmtx2rtt.jpeg?q=70",
      detail: "Asus ROG Phone 5s was launched on 16th August 2021. . ",
    },
    {
      id: 4,
      productName: "Samsung",
      prize: 25000,
      img: "https://rukminim1.flixcart.com/image/416/416/jeiukcw0/mobile/e/r/h/samsung-galaxy-s9-plus-sm-g965fzpdins-original-imaf372un3kjj4q4.jpeg?q=70",
      detail: "Samsung Galaxy M33 5G phone comes with a 120 Hz.",
    },
    {
      id: 5,
      productName: "Realme",
      prize: 15000,
      img: "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/mobile/3/o/b/-original-imagetmeqj2tndqx.jpeg?q=70",
      detail: "The Realme 9 Pro+ elevates the 9 series  mid-range.  .",
    },
    {
      id: 6,
      productName: "Redmi",
      prize: 5000,
      img: "https://rukminim1.flixcart.com/image/416/416/l2tcfbk0/mobile/1/u/d/12-pro-5g-2201122g-xiaomi-original-image2zf939zvc4z.jpeg?q=70 ",
      detail: "Redmi 10 (2022) was launched on 13th February 2022. ",
    },
  ];
  const [total, setTotal] = useState(0);
  const [product, setProduct] = useState(products);
  const [cartItem, setCartItem] = useState([]);

  let addToCart = (id) => {
    const productIndex = products.findIndex((obj) => obj.id === id);
    const cart = products[productIndex];
    setCartItem([...cartItem, cart]);
    setTotal(total + cart.prize);
  };

  let removeFromCart = (id) => {
    const cartList = cartItem.findIndex((obj) => obj.id === id);
    setTotal(total - cartItem[cartList].prize);
    cartItem.splice(cartList, 1);
    setCartItem([...cartItem]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h1>Products</h1>

          <div className="row">
            {product.map((item) => {
              return (
                <Cards
                  cartItem={cartItem}
                  data={item}
                  addToCart={addToCart}
                ></Cards>
              );
            })}
          </div>
        </div>

        <div className="col-lg-4">
          <h1>Cart</h1>

          <div className="row">
            <div className="col-lg-12">
              <ol class="list-group list-group-numbered">
                {cartItem.map((item) => {
                  return (
                    <Cartitem
                      data={item}
                      removeFromCart={removeFromCart}
                    ></Cartitem>
                  );
                })}
              </ol>
              <h1>Total: {total}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
