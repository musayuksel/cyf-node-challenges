const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// const data = require("./data.json");
const data = require("./data2");

// let newUser = { id: 6, from: "Nei34l", text: "hi CYF!" };

//ALL MESSAGES
app.get("/messages", (request, response) => {
  //wwww.mysite.com/messages
  response.send(data);
});

app.get(`/messages/:id`, (request, response) => {
  //www.myws/messages/5
  let userID = +request.params.id;
  const filteredUser = data.filter(
    (person) => person.id === userID
  );
  response.send(filteredUser);
});

app.listen(PORT, () => {
  console.log(`server is working on PORT: ${PORT}`);
});
