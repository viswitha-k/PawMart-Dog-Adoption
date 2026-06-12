import "./DogDetails.css";

import {
  useContext
} from "react";

import {
  CartContext
} from "../context/CartContext.jsx";

function DogDetails({ dog }) {

  const { addRequest } =
    useContext(CartContext);

  return (
    <div className="details-container">

      <img
        src={dog.image}
        alt={dog.name}
      />

      <div className="details-text">

        <h2>{dog.name}</h2>

        <p>
          Breed: {dog.breed}
        </p>

        <p>
          Age: {dog.age}
        </p>

        <p>
          Gender: {dog.gender}
        </p>

        <p>
          {dog.description}
        </p>

        <button
          onClick={() => {
            addRequest(dog);
            alert(
              "Added to Requests"
            );
          }}
        >
          Adopt Dog
        </button>
         <div className="dog-highlights">

  <span>✓ Vaccinated</span>

  <span>✓ Health Checked</span>

  <span>✓ Adoption Ready</span>

</div>

      </div>
      
    </div>
  );
}

export default DogDetails;