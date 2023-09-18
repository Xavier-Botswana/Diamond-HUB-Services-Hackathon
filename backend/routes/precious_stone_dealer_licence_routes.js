const express = require("express");
const router = express.Router();
const application_controller = require("../controllers/precious_stone_dealer_applications_controller");

router.post('/', application_controller.create_application);

router.get('/:id', application_controller.get_application_by_id);
router.get('/', application_controller.get_applications);

router.patch('/:id', application_controller.update_application);

router.delete('/:id', application_controller.delete_application);

module.exports = router;