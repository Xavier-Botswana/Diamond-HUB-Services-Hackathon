const catch_async = require("../utils/catch_async");
const axios = require("axios");
const {BASE_URL} = require("../utils/base_endpoints");


exports.create_application = catch_async(async (req,res, next) => {
    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/precious_stones_dealers_applications/records`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    }

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.update_application = catch_async(async (req, res, next) => {
    const application_id = req.params.id;

    const config = {
        method: "patch",
        url: `${BASE_URL}/api/collections/precious_stones_dealers_applications/records/${application_id}`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.get_applications = catch_async(async (req, res, next) => {
    // const {page, per_page} = req.query.page;

    let config ={
        method: "get",
        url: `${BASE_URL}/api/collections/precious_stones_dealers_applications/records`
    };


    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.get_application_by_id = catch_async(async (req, res, next) => {
    const application_id = req.params.id;
    const config = {
        method: "get",
        url: `${BASE_URL}/api/collections/precious_stones_dealers_applications/records/${application_id}`,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.delete_application = catch_async(async (req, res, next) => {
    const application_id = req.params.id;

    const config = {
        method: "delete",
        url: `${BASE_URL}/api/collections/precious_stones_dealers_applications/records/${application_id}`,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});