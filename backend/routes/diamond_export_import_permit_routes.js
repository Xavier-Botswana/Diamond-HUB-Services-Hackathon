const express = require("express");
const router = express.Router();
const diamond_export_import_permit_controller = require("../controllers/diamond_export_import_permit_controller");

router.post('/', diamond_export_import_permit_controller.create_application);

router.get('/:id', diamond_export_import_permit_controller.get_application_by_id);
router.get('/', diamond_export_import_permit_controller.get_applications);

router.patch('/:id', diamond_export_import_permit_controller.update_application);

router.delete('/:id', diamond_export_import_permit_controller.delete_application);

module.exports = router;