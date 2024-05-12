var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');


var contactController = require('../src/contact/contactController');

var studentController = require('../src/student/studentController');



router.route('/user/getAll').get(userController.getDataConntrollerfn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/update/:id').patch(userController.updateUserController);

router.route('/user/delete/:id').delete(userController.deleteUserController);

router.route('/contact').post(contactController.createContact);

router.route('/student/login').post(studentController.loginUserControllerFn);

router.route('/student/create').post(studentController.createStudentControllerFn);


module.exports = router; 