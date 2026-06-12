import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">
        <div className="about-overlay">
          <h1>About PawMart</h1>
        </div>
      </section>

      <section className="about-content">

  <h2>Who We Are</h2>

  <p>
    PawMart is a community-driven dog adoption
    platform dedicated to helping dogs find
    loving forever homes.
  </p>

  <p>
    Our team works closely with shelters,
    foster families, and veterinary experts
    to ensure every dog listed on our platform
    receives proper care and attention.
  </p>

  <h2>Why Choose PawMart?</h2>

  <div className="features">

    <div className="feature-card">
      <h3>🐾 Verified Dogs</h3>
      <p>
        Every dog profile is reviewed and
        verified before publication.
      </p>
    </div>

    <div className="feature-card">
      <h3>🏠 Forever Homes</h3>
      <p>
        We focus on responsible adoptions and
        long-term pet care.
      </p>
    </div>

    <div className="feature-card">
      <h3>❤️ Community Support</h3>
      <p>
        Connect with experienced pet owners
        and adoption specialists.
      </p>
    </div>

  </div>

</section>
<section className="mission">

  <h2>Our Mission</h2>

  <p>
    At PawMart, we believe every dog
    deserves a loving forever home.
    Our mission is to connect caring
    families with healthy, happy dogs
    through a transparent adoption process.
  </p>

</section>

      <Footer />
    </>
  );
}

export default About;