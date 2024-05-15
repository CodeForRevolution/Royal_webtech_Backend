const mongoose = require("mongoose");
const OPTIONS =require('../utils/helper/option')

const AstrologerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  gender: {
    type: String,
    enum:OPTIONS.genders.getAllGender()
  },
  email: {
    type: String,
  },
 
  language: [
   String
  ],

  speciality: [ 
      String

  ],

  profileImage: {
    type: String,
  },

},{ timestamps: true });

module.exports = mongoose.model("Astrologer", AstrologerSchema);
