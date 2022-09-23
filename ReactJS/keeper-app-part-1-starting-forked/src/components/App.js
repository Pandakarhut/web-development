import React from "react";

const Header = () => (
  <header>
    <h1>Dream Note</h1>
  </header>
);

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <p>copyright ⓒ {year}</p>
    </footer>
  );
};

const Note = () => {
  return (
    <div className="note">
      <h1>title</h1>
      <p>content</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <Note />
    </div>
  );
};

export default App;
