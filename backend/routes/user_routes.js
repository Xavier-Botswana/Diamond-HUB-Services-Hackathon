const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/user_controller");

router.post('/', user_controller.create_user);
router.delete('/:id', user_controller.delete_user);

router.patch('/:id', user_controller.update_user);

router.get('/:id', user_controller.get_user_by_id);
router.get('/', user_controller.get_users);

router.post('/auth-with-password', user_controller.authenticate_user);
router.post("/request-password-reset", user_controller.request_password_reset);
router.post("/confirm-password-reset", user_controller.confirm_password_reset);
router.post('/request-email-change', user_controller.request_emai_change);
router.post('/confirm-email-change', user_controller.confirm_email_change);

module.exports = router;