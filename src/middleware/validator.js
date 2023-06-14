"use strict";

module.exports = (req, res, next) => {
    if (req.query.name) {
        next();
    } else {
        res.status(500).json({ message: "Pass a name" });
    }
};
