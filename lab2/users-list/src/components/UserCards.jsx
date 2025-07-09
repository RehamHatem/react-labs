import React from "react";
import "../UserCards.css";

function UserCards ({ users, filteredUsers }) {
  const displayedUsers = filteredUsers.length !== 0 ? filteredUsers : users;

  return (
    <div className="container">
      {displayedUsers.map((user) => (
        <div className="card" key={user.image}>
          <img src={user.image} alt={user.userName} />
          <p>
            Username: {user.userName}
            <span className={user.verified ? "star" : "starred"}>★</span>
          </p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
