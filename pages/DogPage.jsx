import {
  NavLink,
  Outlet,
  useParams
} from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import DogDetails from "../components/DogDetails.jsx";

import dogs from "../data/dogs.js";

import "./DogPage.css";

function DogPage() {

  const { id } = useParams();

  const dog = dogs.find(
    (dog) => dog.id === Number(id)
  );

  return (
    <>
      <Navbar />

      <div className="dog-page">

        <DogDetails dog={dog} />

        <div className="dog-tabs">

          <NavLink
            to="info"
            className="tab-link"
          >
            Dog Information
          </NavLink>

          <NavLink
            to="adoption"
            className="tab-link"
          >
            Adoption Guide
          </NavLink>

        </div>

        <div className="tab-content">
          <Outlet />
        </div>

      </div>

      <Footer />
    </>
  );
}

export default DogPage;