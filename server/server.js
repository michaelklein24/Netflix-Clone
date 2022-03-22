const path = require("path");
const express = require("express");

const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/'));
})


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening at http://localhost:3001"));
});