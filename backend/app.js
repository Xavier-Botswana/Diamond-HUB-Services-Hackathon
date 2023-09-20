const express = require("express");
const fs = require("fs");
const cors = require("cors");
const global_error_handler = require("./controllers/error_controller");
const user_router = require("./routes/user_routes");
const precious_stones_dealer_applications_router = require("./routes/precious_stone_dealer_licence_routes");
const diamond_export_import_applications_router = require("./routes/diamond_export_import_permit_routes");
const diamond_cutting_license_application_router = require("./routes/diamond_cutting_license_routes");
const kimberly_process_certificates_applications_router = require("./routes/kimberly_process_certificates_applications_routes");
const company_router = require("./routes/companies_routes");
const log_router = require("./routes/logs_routes");
const payment_router = require("./routes/payments_routes");
const app_error = require("./utils/app_error");

//express application configs
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());


//endpoints
app.use("/api/users", user_router);
app.use("/api/payments", payment_router);
app.use("/api/companies", company_router);
app.use("/api/logs", log_router);
app.use("/api/precious-stones-dealer-license-applications", precious_stones_dealer_applications_router);
app.use("/api/diamond-export-import-permit-applications", diamond_export_import_applications_router);
app.use("/api/diamond-cutting-license-applications", diamond_cutting_license_application_router);
app.use("/api/kimberly-process-certificates-applications", kimberly_process_certificates_applications_router);
app.get("/api/hackathon-certificate", (req, res) => {
    try {
        let data = fs.readFileSync("./hackathon_certificate.pdf");

        const buffer = Buffer.from(data);
        res.status(200).json({
            status: "success",
            message: buffer,
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err,
        });
    }
});
app.use("*", (req, res, next) => {
    next(new app_error(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(global_error_handler);

module.exports = app;
