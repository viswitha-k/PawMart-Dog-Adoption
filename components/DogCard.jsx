import { Link } from "react-router-dom";
import "./DogCard.css";

function DogCard({ dog }) {
  return (
    <div className="dog-card">
      <img
        src={dog.image}
        alt={dog.name}
      />

      <div className="dog-content">

        <h3>{dog.name}</h3>

        <p>{dog.breed}</p>

        <Link
          className="view-btn"
          to={`/dog/${dog.id}`}
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

export default DogCard;