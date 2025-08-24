import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import HandleWhatsAppClick from "../Whatsappconnect";
const sections = [
  {
    title: "Course Overview",
    icon: "📚",
    content:
      "Master Java Selenium WebDriver, Cucumber BDD, and industry-grade frameworks in one intensive program designed for real-world success.",
  },
  {
    title: "Who Can Learn",
    icon: "👨‍🎓",
    content: [
      "Beginners to intermediate testers",
      "Software developers",
      "QA engineers",
      "Students and career switchers",
      "Non IT to IT",
      "Less Coding IT  Profile"
    ],
  },
  {
    title: "What You Will Learn",
    icon: "🧠",
    content: [
      "Selenium Cucumber BDD Framework",
      "Gherkin and BDD concepts",
      "Dependency Injection, Hooks",
      "Data-Driven Testing",
      "HTML, Extent, PDF Reports",
      "Page Object Model (POM)",
      "CI tools: Maven, GitHub, Jenkins",
      "Parallel Testing with TestNG",
      "JUnit and TestNG",
    ],
  },
  {
    title: "Career & Salary Growth",
    icon: "💼",
    content: [
      "QA Trainee (0–1 yrs): ₹2.5–5 LPA",
      "Test Engineer (1–3 yrs): ₹4–7 LPA",
      "Senior QA (3–5 yrs): ₹6–12 LPA",
      "QA Lead (5–8 yrs): ₹10–18 LPA",
      "Test Architect (8+ yrs): ₹18–30+ LPA",
    ],
  },
  {
    title: "Contact & Enrollment",
    icon: "📞",
    content: [
      "📧 samjose.tutor@gmail.com",
      "📱 +91-8248162712",
      "🌐 www.sartech.com",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const SoftwareTesting = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-black text-white min-h-screen p-6 sm:p-14 font-sans overflow-hidden">

      {/* Animated blobs background */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -80, 60, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Hero Title */}
      <motion.h1
        className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Java Selenium Automation Training
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              title={
                <h2 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
                  {section.icon} {section.title}
                </h2>
              }
              bordered={false}
              className="rounded-3xl bg-white/80 shadow-xl backdrop-blur-lg hover:shadow-2xl transition duration-300"
              bodyStyle={{ borderRadius: "1rem", padding: "1.5rem" }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
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

export default SoftwareTesting;
