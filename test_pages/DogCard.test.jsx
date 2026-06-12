import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import DogCard from "../components/DogCard";

test("renders dog name", () => {
  const dog = {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    image: "test.jpg",
  };

  render(
    <BrowserRouter>
      <DogCard dog={dog} />
    </BrowserRouter>
  );

  expect(
    screen.getByText("Buddy")
  ).toBeInTheDocument();
});