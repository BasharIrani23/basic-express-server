"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const pageNotFound = require("./error-handlers/404");
const serverError = require("./error-handlers/500");
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");

app.use(serverError);
app.use(logger);
app.get("/", handleHome);
app.get("/person", validator, handleName);
app.use("*", pageNotFound);
//app.get("/bad", badRequest);

function handleName(req, res) {
    res.status(200).json({
        name: `${req.query.name}`,
    });
}
function handleHome(req, res) {
    res.status(200).json({
        code: 200,
        message: "Welcome to Home page",
        time: req.stamper,
    });
}
// function badRequest(req, res, next) {
//     req.body = {
//         test: "test",
//     };
//     next({ message: "Not a name" });

//     // }
// }

function start(port) {
    app.listen(port, () => console.log("running on port: ", port));
}

module.exports = {
    app,
    start,
};
