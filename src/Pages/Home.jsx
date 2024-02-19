import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
