"use strict";

module.exports = (req, res) => {
    res.status(404).json({
        code: 404,
        message: "Page not Found!",
        route: req.originalUrl,
    });

    // You can use path if you use app.get while using middleware
};
