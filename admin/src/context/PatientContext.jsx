// import { createContext, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const PatientContext = createContext();

// const PatientContextProvider = (props) => {

//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [pToken, setPToken] = useState(
//     localStorage.getItem("pToken") ? localStorage.getItem("pToken") : ""
//   );

//   const [profileData, setProfileData] = useState(false);
//   const [appointments, setAppointments] = useState([]);

//   // ✅ Patient Login
//   const loginPatient = async (email, password) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/user/login",
//         { email, password }
//       );

//       if (data.success) {
//         localStorage.setItem("pToken", data.token);
//         setPToken(data.token);
//         toast.success("Patient Login Success");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // ✅ Patient Register
//   const registerPatient = async (name, email, password) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/user/register",
//         { name, email, password }
//       );

//       if (data.success) {
//         localStorage.setItem("pToken", data.token);
//         setPToken(data.token);
//         toast.success("Patient Registered Successfully");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const value = {
//     pToken,
//     setPToken,
//     loginPatient,
//     registerPatient,
//     profileData,
//     appointments,
//   };

//   return (
//     <PatientContext.Provider value={value}>
//       {props.children}
//     </PatientContext.Provider>
//   );
// };

// export default PatientContextProvider;

