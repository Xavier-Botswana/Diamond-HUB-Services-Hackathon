const express = require("express");
const router = express.Router();
const kimberly_process_certificates_applications_controller = require("../controllers/kimberly_process_certificates_applications_controller");

router.post('/', kimberly_process_certificates_applications_controller.create_application);

router.get('/:id', kimberly_process_certificates_applications_controller.get_application_by_id);
router.get('/', kimberly_process_certificates_applications_controller.get_applications);

router.patch('/:id', kimberly_process_certificates_applications_controller.update_application);

router.delete('/:id', kimberly_process_certificates_applications_controller.delete_application);

module.exports = router;