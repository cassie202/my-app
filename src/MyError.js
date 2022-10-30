import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

function MyError() {
  const navigate = useNavigate();
  const handleError = () => {
    navigate("/");
  };
  return (
    <div className="Errorcontainer">
      <h2>Oops! Something Went Wrong!</h2>
      <p>Check the url and try again.</p>
      <button onClick={handleError} className="Home-btn">
        Back to Home
      </button>
    </div>
  );
}

export default MyError;
