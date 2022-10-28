import React from "react";
import Css from "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <h1 className="random-user">Random Users</h1>
        <p className="get-user">Get User</p>
        <button className="User-btn">Users</button>
      </div>
    </div>
  );
}

export default Home;
