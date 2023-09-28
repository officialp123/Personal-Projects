import React, { useState, useEffect } from "react";
import "./RandomUsers.css";

const RandomUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUsers(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching random users:", error);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="users-container">
      <h2>Random Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt="User Thumbnail" />
            <span>
              {user.name.first} {user.name.last}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomUsers;
