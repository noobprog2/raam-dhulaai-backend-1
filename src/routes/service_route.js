const express = require('express');
const service_controller = require('./../controller/service_controller');

const router = express.Router();

// router.param('id', ServiceController.checkID);

router
  .route('/top-5-cheap')
  .get(service_controller.aliasTopServices, service_controller.getAllServices);

router.route('/service-stats').get(service_controller.getServiceStats);
router.route('/monthly-plan/:year').get(service_controller.getMonthlyPlan);

router
  .route('/')
  .get(service_controller.getAllServices)
  .post(service_controller.createService);

router
  .route('/:id')
  .get(service_controller.getService)
  .patch(service_controller.updateService)
  .delete(service_controller.deleteService);

module.exports = router;