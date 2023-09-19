const catch_async = require("../utils/catch_async");
const axios = require("axios");
const {BASE_URL} = require("../utils/base_endpoints");

exports.get_logs = catch_async(async (req, res, next) => {

    const config = {
        method: "get",
        url: `${BASE_URL}/api/collections/logs/records`,
    };

    await axios(config).then(function (response) {
        // res = response;
        res.status(200).json(response.data);
    });
});

exports.get_log_by_id = catch_async(async (req, res, next) => {
    const log_id = req.params.id;
    const config = {
        method: "get",
        url: `${BASE_URL}/api/collections/logs/records/${log_id}`,
    };

    await axios(config).then(function (response) {
        // res = response;
        res.status(200).json(response.data);
    });
});

exports.delete_log = catch_async(async (req, res, next) => {
    const log_id = req.params.id;
    const config = {
        method: "delete",
        url: `${BASE_URL}/api/collections/logs/records/${log_id}`,
    };

    await axios(config).then(function (response) {
        // res = response;
        res.status(200).json(response.data);
    });
});

exports.create_log = catch_async(async (req, res, next) => {
    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/logs/records`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.update_log = catch_async(async (req, res, next) => {
    const log_id = req.params.id;

    const config = {
        method: "patch",
        url: `${BASE_URL}/api/collections/logs/records/${log_id}`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});
