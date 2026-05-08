// import jwt from 'jsonwebtoken'

// // user authentication middleware
// const authUser = async (req, res, next) => {
//     const { token } = req.headers
//     if (!token) {
//         return res.json({ success: false, message: 'Not Authorized Login Again' })
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()
//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }
// }

// export default authUser;

import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }

        // ✅ Extract token from "Bearer TOKEN"
        const token = authHeader.split(" ")[1];

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        req.body.userId = token_decode.id;

        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default authUser;


// // middleware/authUser.js
// import jwt from "jsonwebtoken";
// import userModel from "../models/userModel.js";

// const authUser = async (req, res, next) => {
//   try {
//     const { token } = req.headers;

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Not Authorized, Login Again",
//       });
//     }

//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//     // ✅ ATTACH FULL USER OBJECT
//     const user = await userModel.findById(token_decode.id).select("-password");

//     if (!user) {
//       return res.status(401).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     req.user = user;   // ✅ THIS FIXES YOUR _id CRASH
//     next();

//   } catch (error) {
//     console.log("auth error:", error.message);
//     return res.status(401).json({
//       success: false,
//       message: "Invalid or expired token",
//     });
//   }
// };

// export default authUser;
