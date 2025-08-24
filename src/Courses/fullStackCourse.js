import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import "antd/dist/reset.css";
import HandleWhatsAppClick from "../Whatsappconnect";

const fullStackTopics = [
  {
    title: "Frontend Basics",
    icon: "🎨",
    content: [
      "HTML5, CSS3, and Responsive Design",
      "JavaScript (ES6+), DOM Manipulation",
      "Flexbox, Grid & Animations",
      "Bootstrap & Tailwind CSS"
    ]
  },
  {
    title: "Advanced JavaScript",
    icon: "⚡",
    content: [
      "Async/Await & Promises",
      "Event Loop & Closures",
      "Modules & Bundling",
      "REST API Integration (Fetch/Axios)"
    ]
  },
  {
    title: "React Development",
    icon: "⚛️",
    content: [
      "React Components & Props",
      "React Router & SPA",
      "Hooks (useState, useEffect, useContext)",
      "State Management with Redux Toolkit"
    ]
  },
  {
    title: "Backend with Java",
    icon: "☕",
    content: [
      "Java OOP Basics",
      "Spring Boot REST APIs",
      "Spring Data JPA & Hibernate",
      "JWT Authentication & Security"
    ]
  },
  {
    title: "Database & Firebase",
    icon: "💾",
    content: [
      "MySQL Database CRUD",
      "Database Relationships",
      "Firebase Authentication",
      "Firebase Firestore & Hosting"
    ]
  },
  {
    title: "DevOps & Deployment",
    icon: "🚀",
    content: [
      "Git & GitHub (Version Control)",
      "Vercel/Netlify Deployment",
      "Spring Boot on AWS/Render",
      "CI/CD Pipelines"
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

const FullStackCourse = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-6 sm:p-14 font-sans overflow-hidden">
      {/* Background Animation Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
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
        Full Stack Developer Program
      </motion.h1>

      {/* Why Full Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-20 bg-white/90 rounded-3xl p-8 shadow-xl backdrop-blur-md text-gray-900"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Why Become a Full Stack Developer? 🌟
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Full Stack Development is one of the most in-demand skills in the IT industry. With expertise in{" "}
          <strong>frontend (HTML, CSS, React JS)</strong> and{" "}
          <strong>backend (Java, Spring Boot, MySQL, Firebase)</strong>, you can build
          scalable, secure, and modern web applications end-to-end.
        </p>
        <h3 className="text-2xl font-semibold text-green-600 mb-3">
          🚀 Career Opportunities:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-md">
          <li>Full Stack Developer (MERN/Java)</li>
          <li>Backend Developer (Spring Boot)</li>
          <li>Frontend Engineer (React/Next.js)</li>
          <li>Cloud & DevOps Engineer</li>
          <li>Freelancer / Startup Founder</li>
        </ul>
      </motion.div>

      {/* Course Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {fullStackTopics.map((section, index) => (
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
              <motion.div className="text-gray-800 text-[1.05rem] leading-relaxed space-y-3">
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

export default FullStackCourse;
