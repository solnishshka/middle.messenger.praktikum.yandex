const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./dist"));
app.use("/profile", express.static("./dist"));
app.use("/error", express.static("./dist"));
app.use("/login", express.static("./dist"));
app.use("/register", express.static("./dist"));

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}!`);
});
