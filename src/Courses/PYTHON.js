 
import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import "antd/dist/reset.css";
import HandleWhatsAppClick from "../Whatsappconnect";
const pythonTopics = [
  {
    title: "Python Basics",
    icon: "🐍",
    content: [
      "Variables, Operators, and Data Types",
      "If-Else, Elif, Nested Conditions",
      "Loops (for, while)",
      "Functions & Scope (Global/Local)"
    ]
  },
  {
    title: "Data Structures",
    icon: "📦",
    content: [
      "Lists, Tuples, Dictionaries",
      "JSON Parsing and Map Usage",
      "Sets and Comprehensions"
    ]
  },
  {
    title: "Advanced Python",
    icon: "⚙️",
    content: [
      "Async Functions",
      "Private & Public Variables",
      "Error & File Handling",
      "Built-in Functions"
    ]
  },
  {
    title: "OOP in Python",
    icon: "🏗️",
    content: [
      "Classes and Objects",
      "Inheritance & Polymorphism",
      "Encapsulation",
      "Abstract Classes"
    ]
  },
  {
    title: "Python + MySQL",
    icon: "💾",
    content: [
      "Connecting to MySQL",
      "CRUD Operations",
      "Using MySQL Connector"
    ]
  },
  {
    title: "Data Analysis",
    icon: "📊",
    content: [
      "Pandas Basics",
      "NumPy Arrays",
      "Matplotlib & Python Graphs"
    ]
  },
  {
    title: "Contact & Enrollment",
    icon: "📞",
    content: [
      "📧 samjose.tutor@gmail.com",
      "📱 +91-8248162712",
      "🌐 www.sartech.com"
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const PythonTraining = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-6 sm:p-14 font-sans overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -80, 60, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h1
        className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-yellow-500 bg-clip-text text-transparent mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Python Training & Placement Program
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {pythonTopics.map((section, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              title={
                <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2">
                  {section.icon} {section.title}
                </h2>
              }
              bordered={false}
              className="rounded-3xl bg-white/80 shadow-xl backdrop-blur-lg hover:shadow-2xl transition duration-300"
              bodyStyle={{ borderRadius: "1rem", padding: "1.5rem" }}
            >
              <motion.div
                className="text-gray-800 text-[1.05rem] leading-relaxed space-y-3"
              >
                {Array.isArray(section.content) ? (
                  <ul className="list-none space-y-2">
                    {section.content.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-green-500 text-lg">✅</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {section.content}
                  </motion.p>
                )}

                {section.title === "Contact & Enrollment" && (
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="pt-4"
                  >
                  <Button
  type="primary"
  size="large"
  onClick={HandleWhatsAppClick}
  className="bg-gradient-to-r from-green-500 to-green-700 rounded-xl border-0 shadow-md"
>
  📩 Enquiry Now & Get Syllabus
</Button>

                  </motion.div>
                )}
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PythonTraining;
