import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import "antd/dist/reset.css";
import HandleWhatsAppClick from "../Whatsappconnect";
const analyticsTopics = [
  {
    title: "Intro & Analytics Lifecycle",
    icon: "📌",
    content: [
      "Role of data analytics in decision-making",
      "Lifecycle: collection → cleaning → analysis → visualization → reporting"
    ]
  },
  {
    title: "Excel for Analytics",
    icon: "📊",
    content: [
      "IF, VLOOKUP/XLOOKUP, INDEX-MATCH, pivot tables",
      "Power Query & cleaning",
      "Dashboards, slicers, visual storytelling",
      "Descriptive stats, regression"
    ]
  },
  {
    title: "SQL & Databases",
    icon: "🗄️",
    content: [
      "Tables, relationships, normalization",
      "SELECT, JOINs, GROUP BY, HAVING, subqueries",
      "CTEs, window functions, procedures"
    ]
  },
  {
    title: "Python for Data Analysis",
    icon: "🐍",
    content: [
      "Data types, loops, functions",
      "Pandas, NumPy, Matplotlib, Seaborn",
      "EDA, outlier detection, summarization"
    ]
  },
  {
    title: "BI Tools: Tableau & Power BI",
    icon: "📈",
    content: [
      "Tableau dashboards & charts",
      "Power BI DAX, modeling, report building"
    ]
  },
  {
    title: "Statistics & Probability",
    icon: "📐",
    content: [
      "Mean, median, variance",
      "Distributions, intervals, A/B testing",
      "Regression models"
    ]
  },
  {
    title: "Capstone Project",
    icon: "🎓",
    content: [
      "Collect, clean, analyze real data",
      "Build models, dashboards",
      "Present business insights"
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

const DataAnalytics = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-6 sm:p-14 font-sans overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -80, 60, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.h1
  className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-yellow-500 bg-clip-text text-transparent mb-14"
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Data Analytics Training Program 2025
</motion.h1>


      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {analyticsTopics.map((section, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card
              title={
                <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                  <span className="text-2xl">{section.icon}</span>
                  {section.title}
                </div>
              }
              bordered={false}
              className="rounded-2xl shadow-lg bg-white/90 backdrop-blur-md"
              bodyStyle={{ padding: "1.25rem" }}
            >
              <ul className="pl-1 space-y-3 text-gray-700">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 text-base">✔️</span>
                    <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {section.title === "Contact & Enrollment" && (
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
};

export default DataAnalytics;
