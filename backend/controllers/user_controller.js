const catch_async = require("../utils/catch_async");
const axios = require("axios");
const {BASE_URL} = require("../utils/base_endpoints");

exports.get_users = catch_async(async (req, res, next) => {
    const {page, per_page} = req.query.page;

    let config = {
        method: "get",
        url: `${BASE_URL}/api/collections/user/api/collections/records?page=${page}&per_page=${per_page}`
    }

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.get_user_by_id = catch_async(async (req, res, next) => {
    const user_id = req.params.id;
    const config = {
        method: "get",
        url: `${BASE_URL}/api/collections/users/records/${user_id}`,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.delete_user = catch_async(async (req, res, next) => {
    const user_id = req.params.id;

    const config = {
        method: "delete",
        url: `${BASE_URL}/api/collections/users/records/${user_id}`,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.authenticate_user = catch_async(async (req,res,next) => {
    const data = JSON.stringify({
        identity: req.body.identity,
        password: req.body.password,
    });

    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/users/auth-with-password`,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});


exports.create_user = catch_async(async (req,res, next) => {
    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/users/records`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    }

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
})

exports.update_user = catch_async(async (req, res, next) => {
    const user_id = req.params.id;

    const config = {
        method: "patch",
        url: `${BASE_URL}/api/collections/users/records/${user_id}`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.request_password_reset = catch_async(async (req, res, next) => {
    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/users/request-password-reset`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.confirm_password_reset = catch_async(async (req, res, next) => {
    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/users/confirm-password-reset`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.request_emai_change = catch_async(async (req, res, next) => {
    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/users/request-email-change`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.confirm_email_change = catch_async(async (req, res, next) => {
    const config = {
        method: "post",
        url: `${BASE_URL}/api/collections/users/confirm-email-change`,
        headers: {
            "Content-Type": "application/json",
        },
        data: req.body,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});
