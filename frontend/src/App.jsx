import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        alert( error);
      });
  }, []);

  return (
    <>
      <h1>Full Stack App</h1>
      <p>Users: {users.length}</p>
      {users.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
