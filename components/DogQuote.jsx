import { useEffect, useState } from "react";
import "./DogQuote.css";

function DogQuote() {
  const [quote, setQuote] = useState("");

  const quotes = [
    "Dogs are not our whole life, but they make our lives whole.",
    "A dog is the only thing on earth that loves you more than itself.",
    "Every dog deserves a loving home.",
    "Life is better with a dog.",
    "Dogs leave paw prints on our hearts."
  ];

  useEffect(() => {
    const random =
      quotes[
        Math.floor(
          Math.random() * quotes.length
        )
      ];

    setQuote(random);
  }, []);

  return (
    <div className="quote-section">
      <h2>🐾 Daily Dog Wisdom</h2>
      <p>{quote}</p>
    </div>
  );
}

export default DogQuote;