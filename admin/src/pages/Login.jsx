import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

const Login = () => {

  const [state, setState] = useState('Admin')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Admin') {

      const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
      if (data.success) {
        setAToken(data.token)
        localStorage.setItem('aToken', data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
      if (data.success) {
        setDToken(data.token)
        localStorage.setItem('dToken', data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state}</span> Login</p>
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
        {
          state === 'Admin'
            ? <p>Doctor Login? <span onClick={() => setState('Doctor')} className='text-primary underline cursor-pointer'>Click here</span></p>
            : <p>Admin Login? <span onClick={() => setState('Admin')} className='text-primary underline cursor-pointer'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login



// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { AdminContext } from "../context/AdminContext";
// import { DoctorContext } from "../context/DoctorContext";
// import { PatientContext } from "../context/PatientContext";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   // Admin | Doctor | Patient | SignUp
//   const [state, setState] = useState("Admin");

//   const [name, setName] = useState(""); // only for signup
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const { setAToken } = useContext(AdminContext);
//   const { setDToken } = useContext(DoctorContext);
//   const { setPToken } = useContext(PatientContext);

//   const navigate = useNavigate();

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       // ✅ ADMIN LOGIN
//       if (state === "Admin") {
//         const { data } = await axios.post(
//           backendUrl + "/api/admin/login",
//           { email, password }
//         );

//         if (data.success) {
//           setAToken(data.token);
//           localStorage.setItem("aToken", data.token);
//           toast.success("Admin Login Success");
//           navigate("/admin-dashboard");
//         } else {
//           toast.error(data.message);
//         }
//       }

//       // ✅ DOCTOR LOGIN
//       else if (state === "Doctor") {
//         const { data } = await axios.post(
//           backendUrl + "/api/doctor/login",
//           { email, password }
//         );

//         if (data.success) {
//           setDToken(data.token);
//           localStorage.setItem("dToken", data.token);
//           toast.success("Doctor Login Success");
//           navigate("/doctor-dashboard");
//         } else {
//           toast.error(data.message);
//         }
//       }

//       // ✅ PATIENT LOGIN (SEPARATE FRONTEND)
//       else if (state === "Patient") {
//         const { data } = await axios.post(
//           backendUrl + "/api/patient/login",
//           { email, password }
//         );

//         if (data.success) {
//           setPToken(data.token);
//           localStorage.setItem("pToken", data.token);
//           toast.success("Patient Login Success");

//           // ✅ Redirect to PATIENT FRONTEND
//           window.location.href = "http://localhost:5173/";
//         } else {
//           toast.error(data.message);
//         }
//       }

//       // ✅ PATIENT SIGNUP (SEPARATE FRONTEND)
//       else if (state === "SignUp") {
//         const { data } = await axios.post(
//           backendUrl + "/api/patient/register",
//           { name, email, password }
//         );

//         if (data.success) {
//           setPToken(data.token);
//           localStorage.setItem("pToken", data.token);
//           toast.success("Patient Registration Success");

//           // ✅ Redirect to PATIENT FRONTEND
//           window.location.href = "http://localhost:5173/";
//         } else {
//           toast.error(data.message);
//         }
//       }

//     } catch (err) {
//       console.error(err.response || err);
//       toast.error(err.response?.data?.message || "Server Error");
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
//       <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">

//         <p className="text-2xl font-semibold m-auto">
//           {state === "SignUp" ? "Patient Registration" : `${state} Login`}
//         </p>

//         {/* ✅ FULL NAME ONLY FOR SIGNUP */}
//         {state === "SignUp" && (
//           <div className="w-full">
//             <p>Full Name</p>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border rounded w-full p-2 mt-1"
//               required
//             />
//           </div>
//         )}

//         <div className="w-full">
//           <p>Email</p>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border rounded w-full p-2 mt-1"
//             required
//           />
//         </div>

//         <div className="w-full">
//           <p>Password</p>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border rounded w-full p-2 mt-1"
//             required
//           />
//         </div>

//         <button className="bg-primary text-white w-full py-2 rounded-md">
//           {state === "SignUp" ? "Register" : "Login"}
//         </button>

//         {/* ✅ TOGGLE LINKS */}
//         <div className="mt-2 text-center w-full">
//           {state === "Admin" && (
//             <>
//               <p>Doctor Login? <span onClick={() => setState("Doctor")} className="text-primary underline cursor-pointer">Click here</span></p>
//               <p>Patient Login? <span onClick={() => setState("Patient")} className="text-primary underline cursor-pointer">Click here</span></p>
//             </>
//           )}

//           {state === "Doctor" && (
//             <>
//               <p>Admin Login? <span onClick={() => setState("Admin")} className="text-primary underline cursor-pointer">Click here</span></p>
//               <p>Patient Login? <span onClick={() => setState("Patient")} className="text-primary underline cursor-pointer">Click here</span></p>
//             </>
//           )}

//           {state === "Patient" && (
//             <>
//               <p>New Patient? <span onClick={() => setState("SignUp")} className="text-primary underline cursor-pointer">Register</span></p>
//               <p>Admin Login? <span onClick={() => setState("Admin")} className="text-primary underline cursor-pointer">Click here</span></p>
//               <p>Doctor Login? <span onClick={() => setState("Doctor")} className="text-primary underline cursor-pointer">Click here</span></p>
//             </>
//           )}

//           {state === "SignUp" && (
//             <p>
//               Already Registered?
//               <span onClick={() => setState("Patient")} className="text-primary underline cursor-pointer">
//                 Login
//               </span>
//             </p>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Login;



