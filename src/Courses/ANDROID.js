 
import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import "antd/dist/reset.css";
import HandleWhatsAppClick from "../Whatsappconnect";
const androidTopics = [
  {
    title: "Android Basics & Setup",
    icon: "📱",
    content: [
      "Android Studio & Emulator setup",
      "Project structure & Gradle basics",
      "Logcat, debugging tools, AVDs"
    ]
  },
  {
    title: "Kotlin Fundamentals",
    icon: "🔤",
    content: [
      "Variables, functions, null safety",
      "Classes, inheritance, interfaces",
      "Higher-order functions, lambdas"
    ]
  },
  {
    title: "UI Design with XML & Jetpack Compose",
    icon: "🎨",
    content: [
      "Layouts, Views, ConstraintLayout",
      "Themes, styles, and dark mode",
      "Jetpack Compose: Composables, States, Navigation"
    ]
  },
  {
    title: "Activity & Fragment Lifecycle",
    icon: "🔁",
    content: [
      "Activity stack, Intents, Fragment usage",
      "Lifecycle-aware components",
      "ViewModel & LiveData"
    ]
  },
  {
    title: "Data Storage & Room DB",
    icon: "💾",
    content: [
      "SharedPreferences, File storage",
      "SQLite basics",
      "Room DB with DAO, Entity, Repository"
    ]
  },
  {
    title: "Networking & APIs",
    icon: "🌐",
    content: [
      "Retrofit2, OkHttp, Gson",
      "Making RESTful API calls",
      "Error handling & async operations"
    ]
  },
  {
    title: "Firebase Integration",
    icon: "🔥",
    content: [
      "Firebase Authentication",
      "Realtime Database / Firestore",
      "Push Notifications with FCM"
    ]
  },
  {
    title: "Jetpack Libraries & Tools",
    icon: "📦",
    content: [
      "Navigation Component",
      "WorkManager, DataStore",
      "Coroutines, Flow, Paging"
    ]
  },
  {
    title: "Publishing to Play Store",
    icon: "🚀",
    content: [
      "App signing & bundling (AAB)",
      "Creating store listing & metadata",
      "Alpha/Beta testing via Play Console"
    ]
  },
  {
    title: "Android Job Roles",
    icon: "💼",
    content: [
      "Android App Developer",
      "Kotlin/Jetpack Compose Specialist",
      "Mobile UI/UX Engineer",
      "Firebase/Realtime Dev Expert"
    ]
  },
  {
    title: "Why Android is Still Hot",
    icon: "🔥",
    content: [
      "85% global mobile OS share",
      "Flexible development (phones, TV, Wear, Auto)",
      "Massive job market (startups to MNCs)",
      "Fast release cycles & tool maturity"
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
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const AndroidProgram = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-6 sm:p-14 overflow-hidden">
      {/* Background Blobs */}
      <motion.div className="absolute top-0 left-0 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 120, -60, 0], y: [0, -120, 120, 0] }} transition={{ duration: 25, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -100, 80, 0], y: [0, 80, -80, 0] }} transition={{ duration: 25, repeat: Infinity }} />

      <motion.h1 className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-yellow-500 bg-clip-text text-transparent mb-14"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Android Development Program 2025
      </motion.h1>

      <motion.div variants={container} initial="hidden" animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {androidTopics.map((section, idx) => (
          <motion.div key={idx} variants={cardVariant}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}>
            <Card title={
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="text-2xl">{section.icon}</span>
                {section.title}
              </div>}
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

export default AndroidProgram;
