const loadash=require('lodash')
const Astrologer = require("../model/AstrologerModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const cloudinary = require("../utils/servicess/cloudinary");

module.exports.createAstrologer = catchAsyncError(async (req, res, next) => {

  let { language, speciality } = req.body;
  const Data = {
    ...req.body,
    name:loadash.capitalize(req.body.name),
    email:loadash.lowerCase(req.body.email),
    speciality:JSON.parse(req.body.speciality),
    language:JSON.parse(req.body.language)
  };

  if (req.file) {
    Data.profileImage = await cloudinary.uploadFromBuffer(req.file.buffer);
  }
 
  const astrologer = await Astrologer.create(Data);
 
  res.status(200).json({
    message: "Astrologer Created",
    data: astrologer,
  });
});

module.exports.getAstrologer = catchAsyncError(async (req, res) => {
    const astrologer = await Astrologer.find({});
    res.status(200).json({
      message: "got all astrologer",
      data: astrologer,
    });
  }
  );
module.exports.updateAstrologer =catchAsyncError(async (req, res) => {   
    const Data = {
      ...req.body,
      name:loadash.capitalize(req.body.name),
      email:req.body.email.toLowerCase(),
      speciality:JSON.parse(req.body.speciality),
      language:JSON.parse(req.body.language)
    };
  
    if (req.file) {
      Data.profileImage = await cloudinary.uploadFromBuffer(req.file.buffer);
    }
  
    if (req.file) {
      Data.profileImage = await cloudinary.uploadFromBuffer(req.file.buffer);
    }
    const astrologer = await Astrologer.findByIdAndUpdate(req.params.id, Data);
    res.status(200).json({
      message: "Astrologer Updated",
      data:Data
    });
  });

module.exports.deleteAstrologer = catchAsyncError(async (req, res) => {
    const id = req.params.id;
    const astrologer = await Astrologer.findByIdAndDelete(id);
    res.status(200).json({
      message: "Astrologer Deleted",
    });
  });


module.exports.getById = catchAsyncError(async (req, res) => {
    const id = req.params.id;
    const astrologer = await Astrologer.findOne({_id:id});
    res.status(200).json({
      message: "Got the Astrologer",
     data:astrologer
    });
  });
