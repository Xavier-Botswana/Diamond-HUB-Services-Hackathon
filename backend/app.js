const express = require("express");
const cors = require("cors");
const global_error_handler = require("./controllers/error_controller");
const user_router = require("./routes/user_routes");
const app_error = require("./utils/app_error");

//express application configs
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());


//endpoints
app.use("/api/users", user_router);
app.use("*", (req, res, next) => {
    next(new app_error(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(global_error_handler);

module.exports = app;
