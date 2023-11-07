import Navbar from "../Components/Navbar";
import "../Components/NavbarStyles.css";
import "../routes/Home.css";
import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <Link to="/SignUp">
        <button>Click Here</button>
      </Link>
    </div>
  );
}

export default Home;
