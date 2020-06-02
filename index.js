require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const models = require("./configure-db");
const passport = require("passport");

const employeesApi = require("./routes/employees")(models);
const customersApi = require("./routes/customers")(models);
const albumsApi = require("./routes/albums")(models);
const invoicesApi = require("./routes/invoices")(models);
const tracksApi = require("./routes/tracks")(models);
const playlistsApi = require("./routes/playlists")(models);

const authenticationApi = require("./routes/authentication")(models);
require("./routes/jwt");

const port = process.env.PORT || 3000; 

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/authentication", authenticationApi);
// app.use("/api/employees", passport.authenticate("jwt", {session: false}), usuariosApi);
app.use("/api/employees", employeesApi);
app.use("/api/customers", customersApi);
app.use("/api/invoices", invoicesApi);
app.use("/api/tracks", tracksApi);
app.use("/api/albums", albumsApi);
app.use("/api/playlists", playlistsApi);


app.all("/", (req, res)=> {
    res.render("index", {
        nombre: "usuarios"
    });
});



app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});