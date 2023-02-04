const express  = require("express");

const user_controller= require('./../controller/user_controller');
const auth_controller= require('./../controller/auth_controller');
const router = express.Router();



router.post('/signup',auth_controller.signup); 
router.post('/login',auth_controller.login); 
router
  .route('/')
  .get(auth_controller.protect,user_controller.getAllUsers)
  .post(user_controller.createUser); 

router
  .route('/:id')
  .get(user_controller.getUser)
  .patch(user_controller.updateUser)
  .delete(user_controller.deleteUser);



module.exports = router;