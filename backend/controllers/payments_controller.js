const catch_async = require("../utils/catch_async");
const axios = require("axios");
const {BASE_URL} = require("../utils/base_endpoints");


exports.create_payment = catch_async(async (req,res, next) => {
    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/payments/records`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    }

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.update_paymemnt = catch_async(async (req, res, next) => {
    const payment_id = req.params.id;

    const config = {
        method: "patch",
        url: `${BASE_URL}/api/collections/payments/records/${payment_id}`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.get_payments = catch_async(async (req, res, next) => {
    // const {page, per_page} = req.query.page;
    // url: `${BASE_URL}/api/collections/diamond_cutting_license_application/records?page=${page}&per_page=${per_page}`
    let config ={
        method: "get",
        url: `${BASE_URL}/api/collections/payments/records`
    };


    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.get_payment_by_id = catch_async(async (req, res, next) => {
    const payment_id = req.params.id;
    const config = {
        method: "get",
        url: `${BASE_URL}/api/collections/payments/records/${payment_id}`,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.delete_payment = catch_async(async (req, res, next) => {
    const payment_id = req.params.id;

    const config = {
        method: "delete",
        url: `${BASE_URL}/api/collections/payments/records/${payment_id}`,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});