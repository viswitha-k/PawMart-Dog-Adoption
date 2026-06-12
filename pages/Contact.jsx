import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">

        <div className="contact-card">

          <h1>Contact PawMart</h1>

          <p>
            We'd love to hear from you.
          </p>

          <p>
            📍 Hyderabad, Telangana
          </p>

          <p>
            📞 +91 9876543210
          </p>

          <p>
            ✉ support@pawmart.com
          </p>

          <p>
            🕒 Mon - Sat : 9 AM - 6 PM
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;