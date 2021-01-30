const express = require("express");

const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) =>
{
    res.render("index");
});

app.get("/contact", (req, res) =>
{
    res.render("contact");
});

const port = process.env.PORT || 80;
app.listen(port, () =>
{
   console.debug("listening on port " + port);
});



