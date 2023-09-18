const express = require("express");
const router = express.Router();
const companies_controller = require("../controllers/companies_controller");

router.post('/', companies_controller.create_company);

router.get('/:id', companies_controller.get_company_by_id);
router.get('/', companies_controller.get_companies);

router.patch('/:id', companies_controller.update_company);

router.delete('/:id', companies_controller.delete_company);

module.exports = router;