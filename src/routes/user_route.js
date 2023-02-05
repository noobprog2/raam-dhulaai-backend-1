const express  = require("express");
const AppError= require('./../util/appError');
const user_controller= require('./../controller/user_controller');
const auth_controller= require('./../controller/auth_controller');
const router = express.Router();



router.post('/signup',auth_controller.signup); 
router.post('/login',auth_controller.login); 
router.post('/forgotPassword',auth_controller.forgotPassword); 
router.patch('/resetPassword/:token',auth_controller.resetPassword); 
router.patch('/updateMyPassword', auth_controller.protect, auth_controller.updatePassword);
router.patch('/updateMe', auth_controller.protect, user_controller.updateMe);
router.delete('/deleteMe', auth_controller.protect, user_controller.deleteMe);



router
  .route('/')
  .get(auth_controller.protect,user_controller.getAllUsers)
  .post(user_controller.createUser); 

router
  .route('/:id')
  .get(user_controller.getUser)
  .patch(user_controller.updateUser)
  .delete(
    auth_controller.protect,
    auth_controller.restrictTo('admin'),
    user_controller.deleteUser);



module.exports = router;