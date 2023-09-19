const express = require("express");
const router = express.Router();
const payments_controller = require("../controllers/payments_controller");

router.post('/', payments_controller.create_payment);

router.get('/:id', payments_controller.get_payment_by_id);
router.get('/', payments_controller.get_payments);

router.patch('/:id', payments_controller.update_paymemnt);

router.delete('/:id', payments_controller.delete_payment);

module.exports = router;