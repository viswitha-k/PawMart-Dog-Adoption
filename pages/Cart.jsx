import { useContext } from "react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { CartContext } from "../context/CartContext";

import "./Cart.css";

function Cart() {
  const { requests } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1>Your Adoption Requests</h1>

        <p className="request-count">
          Total Requests: {requests.length}
        </p>

        {requests.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://placedog.net/500/300?id=50"
              alt="No requests"
            />

            <h2>No Dogs Added Yet</h2>

            <p>
              Browse our dogs and add one to begin
              the adoption process.
            </p>
          </div>
        ) : (
          <div className="cart-grid">
            {requests.map((dog, index) => (
              <div
                className="request-card"
                key={`${dog.id}-${index}`}
              >
                <img
                  src={dog.image}
                  alt={dog.name}
                />

                <h3>{dog.name}</h3>

                <p>{dog.breed}</p>

                <p>{dog.age}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;