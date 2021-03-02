// variables
const port = process.env.PORT || 80;



// setup
const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"));
const youtubedl = require("youtube-dl-exec"); // used for bandcamp as well
const fs = require("fs");



// index page
app.get("/", (req, res) =>
{
    res.render("index");
});



// about page
app.get("/about", (req, res) =>
{
    res.render("about");
});



// projects page
app.get("/projects", (req, res) =>
{
    res.render("projects");
});



// bandcamp downloader api page
app.get("/api/bandcamp", async (req, res) =>
{
    const bandcampUrl = decodeURI(req.query.url);
    const filename = decodeURI(req.query.filename);

    if (!(bandcampUrl && filename))
    {
        res.status(400).send("Forgot url and/or filename parameter(s)!");
        return;
    }

    // check if url is bandcamp url
    if (!bandcampUrl.toLowerCase().includes(".bandcamp.com"))
    {
        res.status(400).send("Received a non-Bandcamp URL!");
        return;
    }

    // download file
    const downloadLocation = `${__dirname}/public/apis/bandcamp/${filename}.mp3`;
    youtubedl(bandcampUrl, {
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        output: downloadLocation
    }).then(() =>
    {
        res.download(downloadLocation, filename + ".mp3", {}, (err) =>
        {
            if (err)
            {
                // delete the file
                deleteFileIfExists(downloadLocation).then(console.log).catch(console.error);

                // send error response and return
                res.status(400).send("ERROR SERVING DOWNLOADED FILE: " + err)

                return;
            }

            // delete the file
            deleteFileIfExists(downloadLocation).then(console.log).catch(console.error);
        });
    }).catch(err =>
    {
        res.status(400).send("RECEIVED ERROR ATTEMPTING TO DOWNLOAD: " + err);
    });
});



// helper function to asynchronously delete the downloaded file after it's sent to the client
async function deleteFileIfExists(location)
{
    return new Promise((resolve, reject) =>
    {
        fs.unlink(location, err =>
        {
            if (err)
            {
                reject("ERROR DELETING FILE: " + err);
                return;
            }

            resolve("successfully deleted file!");
        });
    });
}



// start server
app.listen(port, () =>
{
   console.debug("listening on port " + port);
});




