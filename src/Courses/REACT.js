import React from "react";
import { motion } from "framer-motion";
import HandleWhatsAppClick from "../Whatsappconnect";

// Course Sections
const reactCourseSections = [
  {
    title: "HTML, CSS & JavaScript Foundation",
    lessons: [
      "HTML structure, forms, buttons, images, links",
      "CSS styling, padding, margin, flex, grid",
      "JavaScript data types, variables, loops",
      "Functions, objects, arrays, scope",
      "DOM manipulation, events, built-in functions",
    ],
  },
  {
    title: "React JS Fundamentals",
    lessons: [
      "Project setup & folder structure",
      "Functional components & props",
      "JSX and conditional rendering",
      "Reusable components",
      "State management with useState",
    ],
  },
  {
    title: "Hooks & Forms",
    lessons: [
      "useEffect for lifecycle",
      "Text inputs & controlled components",
      "Form validation using Formik",
      "useRef basics",
    ],
  },
  {
    title: "React Router & Navigation",
    lessons: [
      "React Router DOM setup",
      "Single page navigation",
      "Bottom navigation structure",
      "Text touch navigation",
    ],
  },
  {
    title: "APIs & Axios",
    lessons: [
      "API introduction & JSON structure",
      "GET requests with useEffect",
      "Form submission with POST (Axios)",
      "Newspaper web app task",
      "Weather app using Tomorrow.io API",
    ],
  },
  {
    title: "Redux & State Management",
    lessons: [
      "Introduction to Redux",
      "useReducer hook",
      "Redux Toolkit setup",
      "Redux Saga (advanced async flows)",
    ],
  },
  {
    title: "Firebase Integration",
    lessons: [
      "Firebase project & setup",
      "Storing form data in Firestore",
      "Firebase Storage for files/images",
      "Authentication & OTP verification",
    ],
  },
  {
    title: "MySQL + Node.js Backend",
    lessons: [
      "Connecting React with Node.js",
      "Express server setup",
      "Body-parser & validation",
      "MySQL CURD operations",
    ],
  },
  {
    title: "Version Controller & Clean Architercture",
    lessons: [
      "React Model ,View,Controller",
      "Centralized Error Handling",
      "Handling .env ",
      "Git and Github Version Control"
    ],
  },
  {
    title: "Deployment & Resume",
    lessons: [
      "React app hosting (Netlify, Vercel)",
      "Resume preparation & reviews",
      "Mock interviews & job application support",
    ],
  },
];

// Lesson Card (FREE Removed)
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

// Section
const Section = ({ title, lessons }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="border border-zinc-700 rounded-2xl p-8 mb-16"
  >
    <motion.h3 whileHover={{ scale: 1.03 }} className="text-2xl font-bold mb-6">
      {title}
    </motion.h3>
    <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-600">
      {lessons.map((txt, i) => (
        <LessonCard key={i} text={txt} index={i} />
      ))}
    </div>
  </motion.section>
);

// Main Component
const ReactCourse = () => (
  <div className="relative overflow-hidden">
    <motion.div
      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-20 bg-[length:400%_400%] z-0"
    />

    <div className="relative z-10 min-h-screen bg-zinc-900 text-white font-sans px-6 md:px-16 py-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10"
      >
        React JS Developer Course
      </motion.h1>

      {/* Intro */}
      <p className="max-w-4xl mx-auto text-xl leading-relaxed mb-16 text-zinc-300">
        Learn modern web development with our{" "}
        <strong>React JS Developer Course</strong> — a full roadmap covering
        React fundamentals, APIs, Redux, Firebase, Node.js, and MySQL. This
        course is designed with real-world projects, mock interviews, and
        deployment experience to make you job-ready.
      </p>

      {/* Sections */}
      {reactCourseSections.map((s, idx) => (
        <Section key={idx} title={s.title} lessons={s.lessons} />
      ))}

      {/* What You'll Learn */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>
        <ul className="list-disc list-inside space-y-4 text-xl text-zinc-300">
          <li>Build reusable React components and manage state.</li>
          <li>Integrate APIs and handle side effects with hooks.</li>
          <li>Use Redux Toolkit & Firebase for full-stack apps.</li>
          <li>Store and retrieve data from MySQL using Node.js.</li>
          <li>Deploy and host your projects professionally.</li>
        </ul>
      </motion.div>

      {/* Enroll Now Button */}
      <div className="text-center mt-12">
        <motion.button
          onClick={HandleWhatsAppClick}
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-green-400 transition"
          whileHover={{ scale: 1.05 }}
        >
          📲 Get download and Enroll 
        </motion.button>
      </div>
    </div>
  </div>
);

export default ReactCourse;
