// Updated PHP Course Curriculum - Mobile Friendly and Enhanced
import React from "react";
import { motion } from "framer-motion";
import HandleWhatsAppClick from "../Whatsappconnect";
const phpCourseSections = [
  {
    title: "HTML & CSS Fundamentals",
    lessons: [
      "HTML5 Tags & Forms",
      "Tables, Semantic Elements",
      "CSS Basics: Box Model, Selectors",
      "Flexbox & Grid",
      "Responsive Design with Media Queries",
      "Intro to Bootstrap / Tailwind CSS",
    ],
  },
  {
    title: "JavaScript Essentials (Optional)",
    lessons: [
      "Variables, Data Types, Functions",
      "Event Handling",
      "DOM Manipulation",
      "AJAX Basics with Fetch API",
    ],
  },
  {
    title: "Core PHP Programming",
    lessons: [
      "PHP Syntax & Variables",
      "Control Structures (if, loops)",
      "Functions & Scope",
      "Form Handling with POST/GET",
      "Sessions & Cookies",
      "File Handling",
      "Sending Emails in PHP",
    ],
  },
  {
    title: "MySQL & PHP Integration",
    lessons: [
      "MySQL Basics & Table Creation",
      "CRUD Operations",
      "SQL Joins (INNER, LEFT, RIGHT)",
      "Prepared Statements (PDO/MySQLi)",
      "Aggregate Functions",
      "Database Normalization",
    ],
  },
  {
    title: "Object-Oriented PHP",
    lessons: [
      "Classes, Objects, Constructors",
      "Encapsulation & Inheritance",
      "Static Methods, Traits",
      "Interfaces & Abstract Classes",
      "Autoloading with PSR-4",
    ],
  },
  {
    title: "Advanced PHP + Tools",
    lessons: [
      "REST API Integration",
      "Working with JSON & cURL",
      "Email Verification System",
      "Error Handling (Try/Catch)",
      "Composer Usage",
    ],
  },
  {
    title: "MVC Architecture & Clean Code",
    lessons: [
      "Understanding MVC Pattern",
      "Simple MVC App",
      "Custom Router Setup",
      "Folder Structure Best Practices",
      "Using .env Variables",
    ],
  },
  {
    title: "Authentication & Security",
    lessons: [
      "Login/Register System",
      "Password Hashing",
      "Session Management",
      "CSRF & XSS Prevention",
      "HTTPS & SSL",
    ],
  },
  {
    title: "Deployment & Hosting",
    lessons: [
      "Free Hosting vs Paid Hosting",
      "Deploying via cPanel / FTP",
      "Linking Domain & SSL",
      "Online Database Connection",
      "Debugging Production Issues",
    ],
  },
  {
    title: "Capstone Project",
    lessons: [
      "E-commerce or Blog Platform",
      "Admin Panel with Auth",
      "Mobile-Responsive Layout",
      "Deploy Live with Domain",
      "Code on GitHub Portfolio",
    ],
  },
];

const LessonCard = ({ text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="bg-zinc-800 rounded-2xl p-6 w-64 shrink-0 shadow-lg"
  >
    <p className="text-base leading-snug">{text}</p>
  </motion.div>
);


const Section = ({ title, lessons }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="border border-zinc-700 rounded-2xl p-8 mb-16"
  >
    <motion.h3
      whileHover={{ scale: 1.03 }}
      className="text-2xl font-bold mb-6"
    >
      {title}
    </motion.h3>
    <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-600">
      {lessons.map((txt, i) => (
        <LessonCard key={i} text={txt} index={i} />
      ))}
    </div>
  </motion.section>
);
const PHPCourse = () => (
  <div className="relative overflow-hidden">
    <motion.div
      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-20 bg-[length:400%_400%] z-0"
    />

    <div className="relative z-10 min-h-screen bg-zinc-900 text-white font-sans px-6 md:px-16 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10"
      >
        Full Stack PHP Web Development
      </motion.h1>

      <p className="max-w-4xl mx-auto text-xl leading-relaxed mb-16 text-zinc-300">
        Learn to build dynamic, secure, and scalable web applications using modern PHP, MySQL, MVC architecture and real-world projects. Perfect for beginners and career changers.
      </p>

      {phpCourseSections.map((s, idx) => (
        <Section key={idx} title={s.title} lessons={s.lessons} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
        <ul className="list-disc list-inside space-y-4 text-xl text-zinc-300">
          <li>Design responsive layouts using HTML, CSS, and Bootstrap.</li>
          <li>Build secure login/register systems with sessions.</li>
          <li>Interact with databases using MySQL and PDO.</li>
          <li>Organize code with MVC structure for maintainability.</li>
          <li>Deploy full-stack PHP applications with live hosting.</li>
        </ul>
      </motion.div>

      {/* Enroll Now Button */}
      
        <div className="text-center mt-12">
  <motion.button
    onClick={HandleWhatsAppClick}
    className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-green-400 transition"
    whileHover={{ scale: 1.05 }}
  >
    📩 Enquiry Now & Get Syllabus
  </motion.button>

      </div>
    </div>
  </div>
);


export default PHPCourse;