// import React, { useContext, useState, useEffect } from "react";
// import { PatientContext } from "../../context/PatientContext.jsx";
// import { useNavigate } from "react-router-dom";


// const PatientLogin = () => {

//   const [state, setState] = useState("Login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { pToken, loginPatient, registerPatient } =
//     useContext(PatientContext);

//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (state === "Login") {
//       loginPatient(email, password);
//     } else {
//       registerPatient(name, email, password);
//     }
//   };

//   useEffect(() => {
//     if (pToken) {
//       navigate("/"); // redirect after login
//     }
//   }, [pToken]);

//   return (
//     <form onSubmit={submitHandler} className="min-h-screen flex items-center">
//       <div className="m-auto p-8 border rounded-lg min-w-[350px]">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Patient {state}
//         </h2>

//         {state === "Sign Up" && (
//           <input
//             className="border w-full p-2 mb-2"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         )}

//         <input
//           type="email"
//           className="border w-full p-2 mb-2"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           className="border w-full p-2 mb-3"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button className="bg-green-600 text-white w-full py-2 rounded">
//           {state}
//         </button>

//         {state === "Login" ? (
//           <p className="mt-3 text-center">
//             New patient?{" "}
//             <span
//               onClick={() => setState("Sign Up")}
//               className="text-blue-600 cursor-pointer"
//             >
//               Create Account
//             </span>
//           </p>
//         ) : (
//           <p className="mt-3 text-center">
//             Already have account?{" "}
//             <span
//               onClick={() => setState("Login")}
//               className="text-blue-600 cursor-pointer"
//             >
//               Login
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default PatientLogin;
