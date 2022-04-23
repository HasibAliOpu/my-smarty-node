const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Vallo from smartly-node");
});
const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01788888888" },
  {
    id: 2,
    name: "Shabnoor",
    email: "shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Suchorita",
    email: "suchorita@gmail.com",
    phone: "01788888888",
  },
  {
    id: 4,
    name: "Suchonda",
    email: "suchonda@gmail.com",
    phone: "01788888888",
  },
  {
    id: 5,
    name: "Srabonti",
    email: "srabonti@gmail.com",
    phone: "01788888888",
  },
  { id: 6, name: "Sabila", email: "sabila@gmail.com", phone: "01788888888" },
  { id: 7, name: "Sohana", email: "sohana@gmail.com", phone: "01788888888" },
];
app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening port", port);
});
