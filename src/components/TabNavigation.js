import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdLocalPhone,
} from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./Contactus";

// Popup Component
const Popup = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-xl relative"
    >
      <IoCloseSharp
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-red-500 transition"
      />
      {children}
    </motion.div>
  </div>
);

// Dropdown Component
const CourseDropdown = ({ courseList, onSelect }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 right-0 top-24 mx-auto max-w-6xl z-40 bg-white rounded-2xl shadow-2xl px-6 py-6 border border-gray-200 max-h-[70vh] overflow-y-auto"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 1 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.06 },
          },
        }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {courseList.map((course, idx) => (
         <motion.div
  key={idx}
  variants={{
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }}
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.2 },
  }}
  onClick={() => {
    setClickedIndex(idx);
    setTimeout(() => {
      onSelect(course.route);
    }, 200);
  }}
  className="bg-gradient-to-tr from-indigo-500 to-violet-600 text-white rounded-xl shadow-md px-4 py-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 min-h-[90px]"
>
  <motion.p
    initial={{ opacity: 1 }}
    animate={clickedIndex === idx ? { opacity: 0 } : { opacity: 1 }}
    className="text-sm font-semibold leading-snug break-words mb-1"
  >
    {course.label}
  </motion.p>

  {course.trending && (
    <span className="text-[10px] mt-1 bg-yellow-300 text-yellow-900 font-semibold px-2 py-[2px] rounded-full shadow-sm">
      🔥 Recommended
    </span>
  )}
</motion.div>

        ))}
      </motion.div>
    </motion.div>
  );
};

// Main Component
const TabNavigation = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const [showAutoPopup, setShowAutoPopup] = useState(false);
  const [showClickPopup, setShowClickPopup] = useState(false);
  const form = useRef();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowAutoPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bola37k",
        "template_nj7chwl",
        form.current,
        "PpxbC7N3MNQYk25Qx"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error.text);
        }
      );
  };

  const courseList = [
    { label: "FLUTTER", route: "/FLUTTER", trending: true },
    { label: "SOFTWARE TESTING", route: "/SOFTWARE_TESTING", trending: true },
    { label: "DIGITAL MARKETING", route: "/DIGITAL_MARKETING", trending: true },
    { label: "REACT", route: "/REACT" },
    { label: "PYTHON", route: "/PythonTraining" },
    { label: "C and C++", route: "/CCppTraining" },
    { label: "JAVA & SPRING BOOT", route: "/JavaCourse" },
    { label: "REACT NATIVE", route: "/REACT_NATIVE" },
    { label: "ANDROID", route: "/AndroidProgram" },
    { label: "DATA ANALYTICS", route: "/DataAnalyst" },
    { label: "iOS", route: "/iOSProgram" },
    { label: "PHP", route: "/PHP" },
    { label: "Full Stack", route: "/FullStackCourse", trending: true },
  ];

  return (
    <div className="bg-[#f0f2f5] p-4 rounded-md overflow-x-hidden">
      {/* Auto Popup */}
      <AnimatePresence>
        {showAutoPopup && (
          <Popup onClose={() => setShowAutoPopup(false)}>
            <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
              SAR Placement Technologies
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Register for a Free Online Demo Class on Flutter
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setShowAutoPopup(false);
                  setShowClickPopup(true);
                }}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-2 px-5 rounded-lg font-medium shadow-md"
              >
                Register For Free Demo
              </button>
            </div>
          </Popup>
        )}
      </AnimatePresence>

      {/* Manual Contact Popup */}
      <AnimatePresence>
        {showClickPopup && (
          <Popup onClose={() => setShowClickPopup(false)}>
            <h2 className="text-xl font-bold text-gray-800 mb-4">CONTACT US</h2>
            <ContactForm formRef={form} sendEmail={sendEmail} />
            <div className="mt-4 p-4 bg-black text-white rounded-lg text-sm">
              <h3 className="border-b pb-1">Have Queries? Ask Our Experts</h3>
              <div className="flex items-center gap-2 mt-2">
                <MdLocalPhone className="text-xl" />
                <div>
                  <p>+91 824 816 2712</p>
                  <p>Available 24x7 for your queries</p>
                </div>
              </div>
            </div>
          </Popup>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <div
        className="bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-lg py-4 px-6 shadow-lg"
        ref={dropdownRef}
      >
        <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
          <span onClick={() => navigate("/")} className="cursor-pointer hover:underline">
            Home
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              setShowOptions((prev) => !prev);
            }}
            className="cursor-pointer flex items-center gap-1 hover:underline"
          >
            Courses {showOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
          <span onClick={() => setShowClickPopup(true)} className="cursor-pointer hover:underline">
            Contact Us
          </span>
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {showOptions && (
            <CourseDropdown
              courseList={courseList}
              onSelect={(route) => {
                navigate(route);
                setShowOptions(false);
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TabNavigation;
