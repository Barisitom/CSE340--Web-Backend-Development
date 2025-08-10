const utilities = require("../utilities")
const regValidate = require('../utilities/account-validation');


/***********************************************************
 * Deliver Login View
 * Unit 4, deliver login view activity
 ******************************************************/
router.get("/login", utilities.handleErrors(accountController.buildLogin))

/***********************************************************
 * Deliver Registration View
 * Unit 4, deliver Registration view activity
 ******************************************************/
router.get("/register", utilities.handleErrors(accountController.buildRegister))

// Process the registration data
router.post(
  "/register",
  regValidate.registationRules(),
  regValidate.checkRegData,
  utilities.handleErrors(accountController.registerAccount)
)
