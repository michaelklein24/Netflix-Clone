const path = require("path");
const express = require("express");

const routes = require("./controllers");
const sequelize = require("./config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/public/index.html")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log("Now listening"));
});