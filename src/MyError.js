import React from "react";
import Css from "./Error.css";

function MyError() {
  return (
    <div className="Errorcontainer">
      <h2>Oops! Something Went Wrong!</h2>
      <p>Check the url and try again.</p>
      <button className="Home-btn">Back to Home</button>
    </div>
  );
}

export default MyError;
