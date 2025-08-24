import React from "react";
import { motion } from "framer-motion";
import { Card, Button, Tag } from "antd";
import "antd/dist/reset.css"; // Use "antd/dist/antd.css" if AntD v4
import HandleWhatsAppClick from "../Whatsappconnect";
const sharedFoundation = [
  {
    title: "C / C++ Shared Basics",
    icon: "🔤",
    label: "Shared",
    content: [
      "Introduction to C Syntax (basis for C++)",
      "Variables, Data Types, and Constants",
      "Operators & Expressions",
      "Input/Output (printf, scanf) & Basic I/O streams"
    ]
  },
  {
    title: "C / C++ Control Structures",
    icon: "🔄",
    label: "Shared",
    content: [
      "If-Else & Nested Conditions",
      "Loops (for, while, do-while)",
      "Switch Case",
      "Break & Continue"
    ]
  },
  {
    title: "C / C++ Functions",
    icon: "🧩",
    label: "Shared",
    content: [
      "User-defined Functions",
      "Parameter Passing (by value / pointers)",
      "Return Types & Scope",
      "Recursion"
    ]
  }
];

// --- C-specific ---
const cOnly = [
  {
    title: "Pointers & Memory in C",
    icon: "📌",
    label: "C",
    content: [
      "Pointer Basics & Arithmetic",
      "Arrays & Pointer Relationships",
      "Pointers to Functions",
      "Dynamic Memory (malloc, calloc, free)"
    ]
  },
  {
    title: "Structures, Unions & Enums",
    icon: "🏗️",
    label: "C",
    content: [
      "Struct Declarations & Usage",
      "Nested Structs",
      "Unions vs Structs",
      "Enums & Typedef"
    ]
  },
  {
    title: "File Handling in C",
    icon: "💾",
    label: "C",
    content: [
      "FILE Pointers",
      "Reading/Writing Text & Binary",
      "Formatted vs Unformatted I/O",
      "Error Handling"
    ]
  }
];

// --- C++-specific ---
const cppOnly = [
  {
    title: "C++ Essentials",
    icon: "📚",
    label: "C++",
    content: [
      "Input/Output with cin & cout",
      "Type Safety & auto",
      "Function Overloading",
      "References vs Pointers"
    ]
  },
  {
    title: "Object-Oriented Programming",
    icon: "🧱",
    label: "C++",
    content: [
      "Classes & Objects",
      "Constructors & Destructors",
      "Inheritance & Polymorphism",
      "Encapsulation & Abstraction"
    ]
  },
  {
    title: "Advanced C++ Concepts",
    icon: "⚡",
    label: "C++",
    content: [
      "Templates & Generic Programming",
      "STL: Vector, Map, Set, Algorithms",
      "Exception Handling",
      "File Streams & RAII"
    ]
  }
];

const contactCard = [
  {
    title: "Contact & Enrollment",
    icon: "📞",
    label: "Info",
    content: [
      "📧 samjose.tutor@gmail.com",
      "📱 +91-8248162712",
      "🌐 www.sartech.com"
    ]
  }
];

const cCppTopics = [...sharedFoundation, ...cOnly, ...cppOnly, ...contactCard];

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

const TrackTag = ({ label }) => {
  const colorMap = {
    Shared: "geekblue",
    C: "green",
    "C++": "purple",
    Info: "gold"
  };
  return <Tag color={colorMap[label] || "blue"}>{label}</Tag>;
};

const CCppTraining = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-6 sm:p-14 font-sans overflow-hidden">
      {/* Background animations */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -80, 60, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.h1
        className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        C & C++ Training Program
      </motion.h1>

      {/* Why Learn */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 bg-white/90 rounded-3xl p-8 shadow-xl backdrop-blur-md text-gray-900"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Why Learn C & C++? 💡
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          C and C++ form the backbone of modern computing. Mastering these languages builds the low-level understanding needed for <strong>systems programming, embedded development, game engines, high-performance applications, and competitive programming</strong>.
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-3">
          🚀 What You'll Gain:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-md">
          <li>Solid grasp of memory & performance</li>
          <li>Ability to read/write low-level and hardware-near code</li>
          <li>Confidence using pointers, references, and data structures</li>
          <li>Pathway to Embedded, IoT, OS, Compilers, and Game Dev</li>
        </ul>
      </motion.div>

      {/* Curriculum */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {cCppTopics.map((section, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              title={
                <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                  {section.icon} {section.title} <TrackTag label={section.label} />
                </h2>
              }
              bordered={false}
              className="rounded-3xl bg-white/80 shadow-xl backdrop-blur-lg hover:shadow-2xl transition duration-300"
              bodyStyle={{ borderRadius: "1rem", padding: "1.5rem" }}
            >
              <motion.div className="text-gray-800 text-[1.05rem] leading-relaxed space-y-3">
                <ul className="list-none space-y-2">
                  {section.content.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-blue-500 text-lg">✅</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

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

export default CCppTraining;
