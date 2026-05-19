// const express = require("express");

// const router = express.Router();

// let generatedOtp = "";

// // SEND OTP

// router.post("/send-otp", (req, res) => {

//   const { phone } = req.body;

//   // EMPTY CHECK

//   if (!phone) {

//     return res.json({
//       success: false,
//       message: "Phone number required"
//     });

//   }

//   // ONLY 10 DIGITS

//   const phoneRegex = /^[0-9]{10}$/;

//   if (!phoneRegex.test(phone)) {

//     return res.json({
//       success: false,
//       message:
//         "Phone number must contain exactly 10 digits"
//     });

//   }

//   // GENERATE OTP

//   generatedOtp =
//     Math.floor(
//       100000 + Math.random() * 900000
//     ).toString();

//   console.log("📱 PHONE:", phone);

//   console.log("🔐 OTP:", generatedOtp);

//   res.json({
//     success: true,
//     message: "OTP Sent Successfully"
//   });

// });

// // VERIFY OTP

// router.post("/verify-otp", (req, res) => {

//   const { otp } = req.body;

//   console.log("Entered OTP:", otp);

//   if (otp === generatedOtp) {

//     return res.json({
//       success: true,
//       message: "Login Successful"
//     });

//   } else {

//     return res.json({
//       success: false,
//       message: "Invalid OTP"
//     });

//   }

// });

// module.exports = router;

const express = require("express");

const router = express.Router();


// SEND OTP

router.post("/send-otp", (req, res) => {

  const { phone } = req.body;

  // PHONE VALIDATION

  if (!phone) {

    return res.json({
      success: false,
      message: "Phone number required"
    });

  }

  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(phone)) {

    return res.json({
      success: false,
      message: "Enter valid 10 digit number"
    });

  }

  // RANDOM OTP ONLY FOR DISPLAY

  const fakeOtp =
    Math.floor(
      100000 + Math.random() * 900000
    ).toString();

  console.log("📱 PHONE:", phone);

  console.log("🔐 TEST OTP:", fakeOtp);

  res.json({
    success: true,
    message: "OTP Sent Successfully"
  });

});


// VERIFY OTP
// TEMPORARY TEST MODE
// ANY 6 DIGIT OTP WILL WORK

router.post("/verify-otp", (req, res) => {

  const { otp } = req.body;

  console.log("Entered OTP:", otp);

  // CHECK ONLY LENGTH

  if (otp && otp.length === 6) {

    return res.json({
      success: true,
      message: "Login Successful"
    });

  }

  return res.json({
    success: false,
    message: "Enter valid 6 digit OTP"
  });

});

module.exports = router;