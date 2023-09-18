const app = require("./app");
// const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! Shutting down...");
    console.log(err.stack);
    console.log(err.name, err.message);
    process.exit(1);
});

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
// dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! Shutting down...");
    console.log(err.name, err.message);

    server.close(() => {
        process.exit(1);
    });
});
