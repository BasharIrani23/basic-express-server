"use strict";

module.exports = (req, res, next) => {
    if (req.query.name) {
        next();
    } else {
        res.json({ message: "Pass a name" });
    }
};
