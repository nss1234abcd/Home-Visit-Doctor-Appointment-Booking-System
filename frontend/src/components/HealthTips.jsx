// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const fallbackTips = [
//   "Drink plenty of water every day.",
//   "Get at least 7–8 hours of sleep.",
//   "Exercise for 30 minutes daily.",
//   "Eat more fruits and vegetables.",
//   "Take short breaks during long screen time.",
// ];

// const HealthTips = () => {
//   const [tips, setTips] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTips = async () => {
//       try {
//         const response = await axios.get("https://api.api-ninjas.com/v1/quotes?category=health", {
//           headers: { "X-Api-Key": "YOUR_API_KEY" }, // optional
//         });
//         setTips(response.data.map((item) => item.quote));
//       } catch (error) {
//         console.error("Error fetching health tips:", error);
//         setTips(fallbackTips);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTips();
//   }, []);

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md border transition-transform duration-300 hover:scale-[1.02]">
//       <div className="flex items-center gap-2 mb-2">
//         <span role="img" aria-label="lightbulb" className="text-yellow-500 text-xl">
//           💡
//         </span>
//         <h3 className="text-lg font-semibold text-gray-700">Daily Health Tips</h3>
//       </div>

//       {loading ? (
//         <p className="text-gray-500 text-sm animate-pulse">Loading tips...</p>
//       ) : (
//         <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
//           {tips.map((tip, i) => (
//             <li key={i} className="hover:text-green-600 transition-colors duration-200">
//               {tip}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default HealthTips;
