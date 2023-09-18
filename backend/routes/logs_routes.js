const express = require("express");
const router = express.Router();
const logs_controller = require("../controllers/logs_controller");

router.post('/', logs_controller.create_log);

router.get('/:id', logs_controller.get_log_by_id);
router.get('/', logs_controller.get_logs);

router.patch('/:id', logs_controller.update_log);

router.delete('/:id', logs_controller.delete_log);

module.exports = router;