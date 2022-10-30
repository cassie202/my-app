import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleUsers = () => {
    navigate("/users");
  };
  return (
    <div>
      <div className="home-container">
        <h1 className="random-user">Random Users</h1>
        <p className="get-user">Get User</p>
        <button onClick={handleUsers} className="User-btn">
          Users
        </button>
      </div>
    </div>
  );
}

export default Home;
