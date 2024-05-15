

const OPTIONS = {
  appVersion: '1.0.0',
  jwtTokenExpiry: '7d',
  appSchemaUrl: 'project_name',
  timeZone: 'Asia/Kolkata',
  otpExpireInDays: 1,
  orderNumber: 1000,
 
  usersRoles: {
    SUPER_ADMIN: 'SUPER_ADMIN',
    ADMIN: 'ADMIN',
    SHOP: 'SHOP',
    CUSTOMER: 'CUSTOMER',
    getAllRolesAsArray: function () {
      return [
        OPTIONS.usersRoles.SUPER_ADMIN,
        OPTIONS.usersRoles.ADMIN,
        OPTIONS.usersRoles.SHOP,
        OPTIONS.usersRoles.CUSTOMER,
      ];
    },
    getAdmin: () => [OPTIONS.usersRoles.SUPER_ADMIN, OPTIONS.usersRoles.ADMIN],
    getUser: () => [OPTIONS.usersRoles.SHOP, OPTIONS.usersRoles.CUSTOMER],
  },
  genders: {
    MALE: 'Male',
    FEMALE: 'Female',
    Other: 'Other',
    getAllGender:()=>{
    return [
        OPTIONS.genders.MALE,
        OPTIONS.genders.FEMALE,
        OPTIONS.genders.Other,
    ]
    }
  },

  Astrology_Specility: {
    ChineseAs_trology: 'Chinese Astrology', 
    Dream_Analysis: 'Dream Analysis',
    Feng_Shui: 'Feng Shui',
    Gemstone_Consultation: 'Gemstone Consultation',
    Palmistry: 'Palmistry',
    Prashna_Kundali: 'Prashna Kundali',
    Vastu_Shastra: 'Vastu Shastra',
    Vedic_Astrology: 'Vedic Astrology',
    Western_Astrology: 'Western Astrology',
    getAllStatusAsArray: function () {
      return [
        OPTIONS.Astrology_Specility.ChineseAs_trology,
        OPTIONS.Astrology_Specility.Dream_Analysis,
        OPTIONS.Astrology_Specility.Feng_Shui,
        OPTIONS.Astrology_Specility.Gemstone_Consultation,
        OPTIONS.Astrology_Specility.Palmistry,
        OPTIONS.Astrology_Specility.Prashna_Kundali,
        OPTIONS.Astrology_Specility.Vastu_Shastra,
        OPTIONS.Astrology_Specility.Vedic_Astrology,
        OPTIONS.Astrology_Specility.Western_Astrology,      
      ];
    },
  },

  Language: {
    Arabic: 'Arabic', 
    Bengali: 'Bengali',
    English: 'English',
    French: 'French',
    German: 'German',
    Hindi: 'Hindi',
    Italian: 'Italian',
    Russian: 'Russian',
    Marathi: 'Marathi',
    Urdu: 'Urdu',
    Japanese:'Japanese',


    getAllStatusAsArray: function () {
      return [
        OPTIONS.Astrology_Specility.Arabic,
        OPTIONS.Astrology_Specility.Urdu,
        OPTIONS.Astrology_Specility.Russian,
        OPTIONS.Astrology_Specility.Marathi,
        OPTIONS.Astrology_Specility.Hindi,
        OPTIONS.Astrology_Specility.German,
        OPTIONS.Astrology_Specility.Japanese,      
      ];
    },
  },



 
};
module.exports = OPTIONS;
