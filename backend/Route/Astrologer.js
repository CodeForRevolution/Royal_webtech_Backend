const express=require("express");
const upload=require('../utils/servicess/upload')
const router=express.Router();
const Controller=require("../Controllers/AstrologerController")
router.route("/astrologers/register").post(upload.single('image'),Controller.createAstrologer)
router.route("/astrologers").get(Controller.getAstrologer);
router.route("/astrologers/:id").get(Controller.getById);
router.route("/astrologers/:id",).post(upload.single('image'),Controller.updateAstrologer);
router.route("/astrologers/:id").delete(Controller.deleteAstrologer); 
module.exports=router;
