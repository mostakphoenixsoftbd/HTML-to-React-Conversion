import React from "react";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
