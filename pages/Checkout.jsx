import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { CartContext } from "../context/CartContext.jsx";

import "./Checkout.css";

function Checkout() {
  const { requests } = useContext(CartContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    emergencyContact: "",
    homeType: "",
    experience: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all required fields");
      return;
    }

    navigate("/success");
  };

  if (requests.length === 0) {
    return (
      <>
        <Navbar />

        <div className="empty-checkout">
          <img
            src="https://placedog.net/500/300?id=88"
            alt="dog"
          />

          <h2>No Dogs Selected</h2>

          <p>
            Please add a dog to your adoption
            requests before continuing.
          </p>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="checkout-page">
        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>Dog Adoption Application</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={formData.occupation}
            onChange={handleChange}
          />

          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
          />

          <select
            name="homeType"
            value={formData.homeType}
            onChange={handleChange}
          >
            <option value="">
              Select Home Type
            </option>

            <option>
              Apartment
            </option>

            <option>
              Independent House
            </option>

            <option>
              Farm House
            </option>
          </select>

          <textarea
            rows="4"
            name="experience"
            placeholder="Previous Pet Experience"
            value={formData.experience}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            name="reason"
            placeholder="Why do you want to adopt this dog?"
            value={formData.reason}
            onChange={handleChange}
          />

          <button type="submit">
            Submit Adoption Request
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;