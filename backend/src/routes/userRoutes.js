const express= require("express");
const {register, login}= require("../controllers/authController")
const {testOnline, clearRedis}= require("../controllers/testController")
const authMiddleware= require("../middleware/authMiddleware")

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/test",authMiddleware, testOnline)
router.post("/clearRedis",authMiddleware, clearRedis)


module.exports= router;

