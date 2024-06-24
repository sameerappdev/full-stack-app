import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: "001",
      name: "Aayush",
    },
    {
      id: "002",
      name: "Rohit",
    },
    {
      id: "003",
      name: "Mohit",
    },
    {
      id: "004",
      name: "Jain",
    },
    {
      id: "005",
      name: "Vincent",
    },
  ];
  res.send(users);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
