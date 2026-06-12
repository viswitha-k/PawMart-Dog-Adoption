import dogs from "../data/dogs.js";
import DogCard from "../components/DogCard.jsx";
import "./DogsContainer.css";

function DogsContainer({ searchText }) {

  const filteredDogs = dogs.filter((dog) =>
    dog.breed
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="dogs-grid">
      {filteredDogs.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
        />
      ))}
    </div>
  );
}

export default DogsContainer;