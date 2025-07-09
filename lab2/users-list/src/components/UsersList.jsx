import React, { useState } from "react";
import UserCards from "./UserCards";
import Search from "./Search"; 

const UsersList = () => {
  const [searchInput, setSearchInput] = useState("");

 const users = [
  {
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    userName: "ahmed",
    email: "ahmed@example.com",
    phone: "1234567890",
    verified: true,
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    userName: "reham",
    email: "reham@example.com",
    phone: "7777777777",
    verified: false,
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "mohammed",
    email: "mohammed@example.com",
    phone: "4567891230",
    verified: true,
  },
];

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <Search onSearch={(value) => setSearchInput(value)} />
      <UserCards users={users} filteredUsers={filteredUsers} />
    </>
  );
};

export default UsersList;
