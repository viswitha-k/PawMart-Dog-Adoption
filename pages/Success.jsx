import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import "./Success.css";

function Success() {
  return (
    <>
      <Navbar />

      <div className="success-page">
        <h1>🐾 Request Submitted!</h1>

        <h2>
          Thank you for choosing PawMart.
        </h2>

        <h2>
          Our adoption team will review
          your application and contact you
          within 2-3 business days.
        </h2>
      </div>

      <Footer />
    </>
  );
}

export default Success;