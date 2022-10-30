import React, { useState, useEffect } from "react";
import "./App.css";

function User() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (number) => {
    setPage(number);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.results);
        setIsLoading(false);
      });
  }, [page]);

  return (
    <div>
      <div className="container">
        {isLoading && <p>Loading...</p>}
        {users.map((value) => {
          return (
            <div className="item">
              <p className="info">
                <span>{`${value.name.first} ${value.name.last}`}</span>
              </p>
              <p className="info">{value.email}</p>
              <p className="info">{value.dob.age}</p>
              <p className="info">{value.gender}</p>

              <img src={value.picture.medium} alt="avatar" className="image" />
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <button
          onClick={() => handleClick(-1)}
          className="previous-btn"
          aria-label="previous-slide"
          disabled={page === 1}
        >
          {"<"}
        </button>
        <button onClick={() => handleClick(1)} className="page-num">
          1
        </button>
        <button onClick={() => handleClick(2)} className="page-num">
          2
        </button>
        <button onClick={() => handleClick(3)} className="page-num">
          3
        </button>
        <button onClick={() => handleClick(4)} className="page-num">
          4
        </button>
        <button onClick={() => handleClick(5)} className="page-num">
          5
        </button>
        <button
          onClick={() => handleClick()}
          className="button-next"
          aria-label="next Slide"
        >
          {">"}
        </button>
      </div>
      <button className="Home-btn">Back to Home</button>
    </div>
  );
}

export default User;
