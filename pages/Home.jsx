import { useRef, useState } from "react";

import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import DogQuote from "../components/DogQuote.jsx";
import DogsContainer from "../container/DogsContainer.jsx";

import "./Home.css";

function Home() {
  const searchRef = useRef();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    setSearchText(searchRef.current.value);
  };

  return (
    <>
      <Navbar />
      <Header />
      <section className="stats-section">

  <div>
    <h2>100+</h2>
    <p>Dogs Adopted</p>
  </div>

  <div>
    <h2>50+</h2>
    <p>Happy Families</p>
  </div>

  <div>
    <h2>20+</h2>
    <p>Partner Shelters</p>
  </div>

</section>
    <div className="home-content">

      

      <DogQuote />

      <section className="welcome-section">
        <h2>Find Your Perfect Companion</h2>
        <p>
          Browse through our adorable dogs and
          discover your future best friend.
        </p>
      </section>

      <div className="search-section">

        <input
          ref={searchRef}
          type="text"
          placeholder="Search dogs by breed..."
        />

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

      <section
  id="dogs-section"
  className="dogs-section"
>
  <h2>Available Dogs</h2>

  <DogsContainer
    searchText={searchText}
  />
</section>

    </div>

      <Footer />
    </>
  );
}

export default Home;