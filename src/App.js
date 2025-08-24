import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TabNavigation from "./components/TabNavigation";
import Home from "./components/Home";
import About from "./components/About";
import DIGITAL_MARKETING from "./Courses/DIGITAL_MARKETING";
import FLUTTER from "./Courses/FLUTTER";
import REACT from "./Courses/REACT";
import REACT_NATIVE from "./Courses/REACT_NATIVE";
import SOFTWARE_TESTING from "./Courses/SOFTWARE_TESTING";
import AndroidProgram from './Courses/ANDROID'
import DataAnalyst from "./Courses/DATA_ANALYTICS";
import IOSProgram from './Courses/IOS'
import PhpCourse from "./Courses/PHP";
import PythonTraining from "./Courses/PythonTraining";
import CCppTraining from "./Courses/C_C++";
import { WhatsAppOutlined } from "@ant-design/icons";
import JavaCourse from './Courses/Java';
import FullStackCourse from './Courses/fullStackCourse'
import ContactForm from "./components/Contactus";
const App = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918248162712", "_blank");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <Router>
        <TabNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contactus" element={<ContactForm />} />
          <Route path="/DIGITAL_MARKETING" element={<DIGITAL_MARKETING />} />
          <Route path="/FLUTTER" element={<FLUTTER />} />
          <Route path="/REACT" element={<REACT />} />
          <Route path="/REACT_NATIVE" element={<REACT_NATIVE />} />
          <Route path="/SOFTWARE_TESTING" element={<SOFTWARE_TESTING />} />
          <Route path="/AndroidProgram" element={<AndroidProgram />} />
          <Route path="/DataAnalyst" element={<DataAnalyst />} />
          <Route path="/iOSProgram" element={<IOSProgram/>} />
          <Route path="/PHP" element={<PhpCourse />} />
          <Route path="/PythonTraining" element={<PythonTraining />} />
          <Route path="/CCppTraining" element={<CCppTraining />} />
           <Route path="/JavaCourse" element={<JavaCourse />} />
             <Route path="/FullStackCourse" element={<FullStackCourse />} />
        </Routes>
      </Router>
      <Footer />

      {/* WhatsApp Floating Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25d366",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          animation: "bounce 2s infinite",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onClick={handleWhatsAppClick}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
      >
        <WhatsAppOutlined style={{ fontSize: "24px" }} />
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
