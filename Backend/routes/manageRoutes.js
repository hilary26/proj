const express = require ('express');
const manageController = require('../controllers/manageController');
const router = express.Router();


router.route("/").get(manageController.getAllManage).post(manageController.createManage);
router.route("/:id").get(manageController.getManageById).put(manageController.updateManage).delete(manageController.deleteManage);
module.exports = router;