import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import "antd/dist/reset.css";
import HandleWhatsAppClick from "../Whatsappconnect";
const javaTopics = [
  {
    title: "Java Basics",
    icon: "☕",
    content: [
      "Syntax, Variables, Data Types",
      "Control flow: if/else, loops",
      "OOP fundamentals: classes & objects",
      "Collections (List, Set, Map)"
    ]
  },
  {
    title: "Advanced Java",
    icon: "🚀",
    content: [
      "Java 8+ features: Streams, Lambdas, Modules",
      "Multithreading & Concurrency",
      "Exception Handling, I/O, Serialization",
      "JDBC & Database Integration"
    ]
  },
  {
    title: "Spring Boot",
    icon: "🔧",
    content: [
      "Spring Core: DI, Beans, ApplicationContext",
      "Spring Boot starters & auto-configuration",
      "Building REST APIs with Spring MVC",
      "Data access: JPA, Hibernate, Spring Data"
    ]
  },
  {
    title: "Job Roles in Java",
    icon: "💼",
    content: [
      "Java Developer / Backend Engineer",
      "Full Stack Developer (Java + JS)",
      "Microservices & Cloud Developer",
      "Software Architect"
    ]
  },
  {
    title: "Why MNCs Still Prefer Java",
    icon: "🏢",
    content: [
      "Platform independence & stability",
      "Rich ecosystem: Spring, libraries, frameworks",
      "Scalability & enterprise-grade performance",
      "Strong security features",
      "Vast talent pool and proven track record"
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

const containerAnim = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const cardAnim = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

function JavaCourse() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-6 sm:p-14 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 120, -60, 0], y: [0, -120, 120, 0] }} transition={{ duration: 25, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -100, 80, 0], y: [0, 80, -80, 0] }} transition={{ duration: 25, repeat: Infinity }} />

      {/* Title with gradient text */}
      <motion.h1 className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-yellow-500 bg-clip-text text-transparent mb-14"
        initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Java & Spring Boot Training Program
      </motion.h1>

      <motion.div variants={containerAnim} initial="hidden" animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {javaTopics.map((sec, i) => (
          <motion.div key={i} variants={cardAnim}
            whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200 }}>
            <Card title={
                <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                  <span className="text-2xl">{sec.icon}</span>{sec.title}
                </div>}
              bordered={false}
              className="rounded-2xl shadow-lg bg-white/90 backdrop-blur-md"
              bodyStyle={{ padding: "1.25rem" }}
            >
              <ul className="pl-1 space-y-3 text-gray-700">
                {sec.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 text-base">✔️</span>
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {sec.title === "Contact & Enrollment" && (
                <div className="pt-5">
                <Button
  type="primary"
  size="large"
  onClick={HandleWhatsAppClick}
  className="bg-gradient-to-r from-green-500 to-green-700 rounded-xl border-0 shadow-md"
>
  📩 Enquiry Now & Get Syllabus
</Button>

                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default JavaCourse;
