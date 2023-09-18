const express = require("express");
const router = express.Router();
const diamond_cutting_license_application_controller = require("../controllers/diamond_cutting_license_application_controller");

router.post('/', diamond_cutting_license_application_controller.create_application);

router.get('/:id', diamond_cutting_license_application_controller.get_application_by_id);
router.get('/', diamond_cutting_license_application_controller.get_applications);

router.patch('/:id', diamond_cutting_license_application_controller.update_application);

router.delete('/:id', diamond_cutting_license_application_controller.delete_application);

module.exports = router;