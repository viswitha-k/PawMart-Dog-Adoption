import "./Header.css";

function Header() {

  const scrollToDogs = () => {
    const section =
      document.getElementById("dogs-section");

    section?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <header className="hero-header">
      <div className="hero-overlay">

        <h1>PawMart</h1>

        <p>
          Find Your Perfect Furry Companion
        </p>

        <button
          className="hero-btn"
          onClick={scrollToDogs}
        >
          View Dogs
        </button>

      </div>
    </header>
  );
}

export default Header;