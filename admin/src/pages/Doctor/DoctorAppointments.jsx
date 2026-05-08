import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import { Link } from "react-router-dom";


const DoctorAppointments = () => {

  const { dToken, appointments, getAppointments, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) getAppointments()
  }, [dToken])

  return (
    <div className='w-full max-w-6xl m-5'>

      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
        
        {/* Table Header */}
        <div className="grid grid-cols-[0.3fr_2fr_1fr_0.7fr_3fr_1.5fr_0.8fr_1fr_1fr] gap-4 p-4 bg-white rounded-xl shadow-md">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Address</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
          <p>Health Info</p>
        </div>

        {/* Table Rows */}
       {Array.isArray(appointments) &&
  appointments
    .filter(item => item && item._id)
    .map((item, index) => {
      return (
        <div
          key={item._id}
          className='grid grid-cols-[0.3fr_2fr_1fr_0.7fr_3fr_1.5fr_0.8fr_1fr_1fr] gap-3 items-center py-3 px-6 border-b hover:bg-gray-50 text-gray-600'
        >
          <p>{index + 1}</p>

          <div className='flex items-center gap-2'>
            <img
              src={item.userData?.image || ""}
              className='w-8 h-8 rounded-full'
              alt=""
            />
            <p>{item.userData?.name || "Unknown"}</p>
          </div>

          <p className='text-xs inline border border-primary px-2 rounded-full'>
            {item.payment ? 'Online' : 'CASH'}
          </p>

          <p>
            {item.userData?.dob
              ? calculateAge(item.userData.dob)
              : "NA"}
          </p>

          <div className='leading-tight'>
            <p>{item.userData?.address?.line1 || ""}</p>
            <p className='text-gray-400 text-xs'>
              {item.userData?.address?.line2 || ""}
            </p>
          </div>

          <p>
            {slotDateFormat(item.slotDate)}, {item.slotTime}
          </p>

          <p>{currency}{item.amount}</p>

          {item.cancelled ? (
            <p className='text-red-400 text-xs font-medium'>Cancelled</p>
          ) : item.isCompleted ? (
            <p className='text-green-500 text-xs font-medium'>Completed</p>
          ) : (
            <div className='flex gap-2'>
              <img
                onClick={() => item?._id && cancelAppointment(item._id)}
                className='w-8 cursor-pointer'
                src={assets.cancel_icon}
                alt=""
              />
              <img
                onClick={() => item?._id && completeAppointment(item._id)}
                className='w-8 cursor-pointer'
                src={assets.tick_icon}
                alt=""
              />
            </div>
          )}

          <p>
            <Link
              to={item?._id ? `/doctor/health-info/${item._id}` : "#"}
              className="text-blue-500 underline"
            >
              View
            </Link>
          </p>
        </div>
      );
    })}

      </div>
    </div>
  )
}

export default DoctorAppointments