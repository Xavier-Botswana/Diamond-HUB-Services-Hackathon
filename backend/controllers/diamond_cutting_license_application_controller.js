const catch_async = require("../utils/catch_async");
const axios = require("axios");
const {BASE_URL} = require("../utils/base_endpoints");
const FormData = require("form-data");

exports.create_application = catch_async(async (req,res, next) => {
    const form_data_to_send = new FormData();
    const files = req.files;
    const form_data = req.body;

    //preparing the multipart/form-data to send to the database
    Object.entries(form_data).forEach(([key,value]) => {
        form_data_to_send.append(key, value);
    });

    files.forEach((file) => {
        form_data_to_send.append(file.fieldname, file.buffer, {
            filename: file.originalname,
            contentType: file.mimetype,
        });
    })

    await axios
        .post(`${BASE_URL}/api/collections/diamond_cutting_license_application/records`, form_data_to_send, {
            headers: form_data_to_send.getHeaders(),
        })
        .then(function (response) {
            res.status(200).json(response.data);
        });

});

exports.update_application = catch_async(async (req, res, next) => {
    const application_id = req.params.id;

    const config = {
        method: "patch",
        url: `${BASE_URL}/api/collections/diamond_cutting_license_application/records/${application_id}`,
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
    // url: `${BASE_URL}/api/collections/diamond_cutting_license_application/records?page=${page}&per_page=${per_page}`
    let config ={
        method: "get",
        url: `${BASE_URL}/api/collections/diamond_cutting_license_application/records`
    };


    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.get_application_by_id = catch_async(async (req, res, next) => {
    const application_id = req.params.id;
    const config = {
        method: "get",
        url: `${BASE_URL}/api/collections/diamond_cutting_license_application/records/${application_id}`,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});

exports.delete_application = catch_async(async (req, res, next) => {
    const application_id = req.params.id;

    const config = {
        method: "delete",
        url: `${BASE_URL}/api/collections/diamond_cutting_license_application/records/${application_id}`,
    };

    await axios(config).then(function (response) {
        res.status(200).json(response.data);
    });
});