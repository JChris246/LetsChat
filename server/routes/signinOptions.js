var express = require('express');
var router = express.Router();
var controller = require("../controllers/signinOptions");

//Manage all signinOptions
router//just for testing in development.
    .route("/")
    .get(controller.getAllSigninOption)// get all signinOptions in the database
    

// Manage a single signinOption
router
    .route("/:email/:service_name")
    .get(controller.getSigninOption)
    // .put(controller.signinOptions)
    // .delete(controller.deleteUser);

router
    .route("/:user_id")
    .get(controller.getSigninOptionsByUserID)// get all a user's signinOptions using their user_id
    .post(controller.createSigninOption);// may be useful for adding more than 1 signin option for 1 user
    // .delete(controller.deleteUser);

module.exports = router;