# 🏥 AI-Enabled Home Visit Doctor Appointment Booking System
Built an AI-enabled Doctor Appointment Booking System with separate Admin, Doctor, and Patient panels. Integrated chatbot support for appointment handling, multilingual communication, and automated prescription generation using full-stack technologies. An intelligent healthcare platform that allows patients to book doctor appointments for home visits.

The system consists of three separate panels:

- 👨‍⚕️ Doctor Panel
- 👤 Patient Panel
- 🛠️ Admin Panel

The platform aims to improve healthcare accessibility, reduce waiting time, and enhance patient experience through AI-assisted healthcare services.

---

# 📖 Project Overview

Healthcare services are increasingly moving toward patient-centric models. Traditional appointment booking systems often fail to support home visits, multilingual communication, and preliminary symptom assessment.

This project addresses these challenges by integrating:

- AI Symptom Checker
- Multi-language Processing
- Auto Prescription Generator
- Home Visit Appointment Booking
- Secure Role-Based Access Control

The system enables patients to consult doctors from home while providing doctors with intelligent tools for efficient healthcare delivery.

---

# ✨ Key Features

## 👤 Patient Panel

- User Registration & Login
- Book Home Visit Appointments
- View Appointment Status
- AI Symptom Checker
- Multi-language Support
- View Prescriptions
- Profile Management

---

## 👨‍⚕️ Doctor Panel

- Doctor Authentication
- Manage Appointments
- View Patient Details
- Generate Prescriptions
- AI-Assisted Prescription Suggestions
- Appointment Status Updates

---

## 🛠️ Admin Panel

- Dashboard Overview
- Manage Patients
- Manage Doctors
- Monitor Appointments
- System Administration
- User Management

---

# 🧠 AI Features

### AI Symptom Checker

Patients can describe symptoms and receive preliminary health suggestions before consulting a doctor.

### Multi-Language Processor

Supports communication in multiple languages, making healthcare accessible to users from diverse linguistic backgrounds.

### Auto Prescription Generator

Helps doctors generate prescriptions efficiently based on patient symptoms and diagnosis.

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- HTML5
- CSS3
- JavaScript
- Tailwind CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## Other Technologies

- REST APIs
- JWT Authentication
- Role-Based Access Control
- AI Integration

---

# 📂 Project Structure

```text
PRESCRIPTION PROJECT
│
├── admin
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── context
│   │   │   ├── AdminContext.jsx
│   │   │   ├── AppContext.jsx
│   │   │   ├── DoctorContext.jsx
│   │   │   └── PatientContext.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Admin
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── AddDoctor.jsx
│   │   │   │   ├── DoctorsList.jsx
│   │   │   │   └── AllAppointments.jsx
│   │   │   │
│   │   │   ├── Doctor
│   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   ├── DoctorAppointments.jsx
│   │   │   │   ├── DoctorProfile.jsx
│   │   │   │   ├── PrescriptionGenerator.jsx
│   │   │   │   └── PrescriptionGenerate.jsx
│   │   │   │
│   │   │   └── Patient
│   │   │       ├── Login.jsx
│   │   │       └── PatientLogin.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── backend
│   ├── config
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   │
│   ├── controllers
│   │   ├── adminController.js
│   │   ├── doctorController.js
│   │   └── userController.js
│   │
│   ├── middleware
│   │   ├── authAdmin.js
│   │   ├── authDoctor.js
│   │   ├── authUser.js
│   │   └── multer.js
│   │
│   ├── models
│   │   ├── appointmentModel.js
│   │   ├── doctorModel.js
│   │   └── userModel.js
│   │
│   ├── routes
│   │   ├── adminRoute.js
│   │   ├── doctorRoute.js
│   │   └── userRoute.js
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── HealthTips.jsx
│   │   │   ├── RelatedDoctors.jsx
│   │   │   ├── SpecialityMenu.jsx
│   │   │   └── TopDoctors.jsx
│   │   │
│   │   ├── context
│   │   │   └── AppContext.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Appointment.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MyAppointments.jsx
│   │   │   ├── MyProfile.jsx
│   │   │   └── Verify.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   ├── vercel.json
│   └── README.md
│
├── How_To_Run_Project.pdf
└── README.md
---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/nss1234abcd/Home-Visit-Doctor-Appointment-Booking-System
```
---
## Backend Setup

```bash
cd backend
npm install
npm start
```
---
## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
---
## Admin Setup

```bash
cd admin
npm install
npm run dev
```
---
# 🔑 Environment Variables

Create a `.env` file in the admin directory.

```env
VITE_BACKEND_URL = 'http://localhost:4000'
```

Create a `.env` file in the frontend directory.

```env
VITE_BACKEND_URL = 'http://localhost:4000'
GENAI_API_KEY= your_api_key
REACT_APP_API_BASE_URL= http://localhost:9000
```

Create a `.env` file in the backend directory.

```env
# Admin Panel Credentials
ADMIN_EMAIL = "add_your_email"
ADMIN_PASSWORD = "add_your_password"

# MongoDB Setup ( required )
MONGODB_URI = "your_mongodb_connection_string"

# Cloudinary Setup ( required )
CLOUDINARY_NAME = "name"
CLOUDINARY_API_KEY = "your_api_key"
CLOUDINARY_SECRET_KEY = "your_secret_key"

```
---

# 📸 Screenshots

## Home Page

<img width="1669" height="912" alt="image" src="https://github.com/user-attachments/assets/f0d671e4-59e8-4be4-90a0-d8dd3e0538c4" />

## Patient Dashboard

<img width="1748" height="808" alt="image" src="https://github.com/user-attachments/assets/e894f61b-101d-4af1-9ea0-ec25631c2569" />


## Doctor Dashboard

<img width="1884" height="890" alt="image" src="https://github.com/user-attachments/assets/f6a06f1c-a868-4693-a1e8-33691d7353e2" />

## Admin Dashboard

<img width="1888" height="878" alt="image" src="https://github.com/user-attachments/assets/92f529b4-9617-488e-ab76-f0aab957f0b6" />


## Appointment Booking

<img width="1641" height="863" alt="image" src="https://github.com/user-attachments/assets/0ad987f1-c610-4d50-91dc-967e9da603d5" />

## AI Symptom Checker

<img width="1666" height="712" alt="image" src="https://github.com/user-attachments/assets/de642d47-df96-49e2-a5ea-76ada5d19f79" />

## AI Multilanguage Checker

<img width="1054" height="873" alt="image" src="https://github.com/user-attachments/assets/aa352af4-7aa8-4e16-9cf7-a0e83a06eabb" />

## Auto Prescription Generator

<img width="1855" height="912" alt="image" src="https://github.com/user-attachments/assets/b1dd17d6-0f86-43e5-bd7b-40d8c2161efc" />

---

# 🔄 System Workflow
1. Patient registers and logs in.
2. Patient checks symptoms using AI Symptom Checker.
3. Patient books a home visit appointment.
4. Doctor receives appointment request.
5. Doctor reviews patient details.
6. Doctor generates prescription using AI assistance.
7. Patient receives prescription and appointment updates.
8. Admin monitors and manages the complete system.

---

# 🎯 Objectives
- Improve healthcare accessibility.
- Enable home visit appointment booking.
- Support multilingual healthcare communication.
- Reduce patient waiting time.
- Assist doctors with AI-powered tools.
- Enhance healthcare service efficiency.

---

# 📊 Benefits
- Faster appointment scheduling
- Improved patient satisfaction
- Reduced manual workload
- Better healthcare accessibility
- AI-assisted decision support
- User-friendly healthcare platform

---

# 🚀 Future Enhancements
- Video Consultation
- Online Payment Gateway
- Electronic Health Records (EHR)
- AI Disease Prediction
- Mobile Application
- Real-Time Notifications
- Voice-Based Symptom Analysis

---

# 🏆 Project Achievement
✅ Developed as a Full Stack Healthcare Management System

✅ Integrated AI-powered Symptom Checker

✅ Multi-language Healthcare Support

✅ Automated Prescription Generation

✅ Home Visit Doctor Appointment Booking

---

# 👨‍💻 Author
**Nutan Patil**

GitHub: https://github.com/nss1234abcd

---
