const express= require("express");
const {register, login}= require("../controllers/authController")
const {test}= require("../controllers/testController")
const authMiddleware= require("../middleware/authMiddleware")

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/test",authMiddleware, test)
module.exports= router;

