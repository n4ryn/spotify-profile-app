const express = require("express");
const app = express();
const port = 4444;

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  const data = {
    name: "Vinay",
    isAwesome: true,
  };
  res.json(data);
});

app.get("/awesome-generator", (req, res) => {
  const { name, isAwesome } = req.query;
  res.send(`${name} is ${JSON.parse(isAwesome) ? "really" : "not"} awesome`);
});

app.listen(port, () => {
  console.log(`Express app listning at http://localhost:${port}`);
});
