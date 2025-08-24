 
import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import "antd/dist/reset.css";
import HandleWhatsAppClick from "../Whatsappconnect";
const iosTopics = [
  {
    title: "iOS Basics & Tools",
    icon: "📱",
    content: [
      "Introduction to iOS ecosystem",
      "Xcode setup, Interface Builder",
      "Simulators & Debugging tools"
    ]
  },
  {
    title: "Swift Programming",
    icon: "🐦",
    content: [
      "Syntax, Variables, Control Flow",
      "Functions, Closures, Optionals",
      "Structs vs Classes"
    ]
  },
  {
    title: "SwiftUI Fundamentals",
    icon: "🧩",
    content: [
      "Building UI with SwiftUI",
      "Views, Modifiers, Layouts",
      "Navigation, State & Bindings"
    ]
  },
  {
    title: "UIKit Mastery",
    icon: "🎨",
    content: [
      "ViewControllers, Storyboards",
      "UITableView, UICollectionView",
      "View lifecycle & delegate pattern"
    ]
  },
  {
    title: "Auto Layout & Constraints",
    icon: "📐",
    content: [
      "AutoLayout fundamentals",
      "Stack Views, Constraints in code",
      "Size classes & adaptive layouts"
    ]
  },
  {
    title: "Data Persistence",
    icon: "💾",
    content: [
      "UserDefaults, Codable",
      "CoreData: Entity, Context, Fetching",
      "Local databases & file storage"
    ]
  },
  {
    title: "Networking & APIs",
    icon: "🌐",
    content: [
      "URLSession, REST APIs, JSON parsing",
      "Error handling & async/await",
      "Third-party tools (Alamofire, SwiftyJSON)"
    ]
  },
  {
    title: "Advanced Swift",
    icon: "⚙️",
    content: [
      "Protocols, Protocol Oriented Programming",
      "Generics & Extensions",
      "Concurrency, GCD, Combine"
    ]
  },
  {
    title: "iOS Architecture Patterns",
    icon: "🏗️",
    content: [
      "MVC vs MVVM vs VIPER",
      "Dependency Injection",
      "Test-driven development"
    ]
  },
  {
    title: "App Store & Deployment",
    icon: "🚀",
    content: [
      "Code signing & provisioning",
      "App Store Connect setup",
      "TestFlight, metadata, screenshots"
    ]
  },
  {
    title: "iOS Developer Job Roles",
    icon: "💼",
    content: [
      "iOS App Developer",
      "SwiftUI/Swift Backend Integration",
      "Mobile UX/UI Designer (iOS)",
      "ARKit/iOS Game Developer"
    ]
  },
  {
    title: "Why iOS is Still in Demand",
    icon: "🔥",
    content: [
      "High-paying mobile dev jobs",
      "Strong demand in startups & MNCs",
      "Apple ecosystem strength",
      "Swift & SwiftUI developer tools"
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

const IOSProgram = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-6 sm:p-14 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div className="absolute top-0 left-0 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 120, -60, 0], y: [0, -120, 120, 0] }} transition={{ duration: 25, repeat: Infinity }} />
      <motion.div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -100, 80, 0], y: [0, 80, -80, 0] }} transition={{ duration: 25, repeat: Infinity }} />

      <motion.h1 className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-300 bg-clip-text text-transparent mb-14"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        iOS Development Program 2025
      </motion.h1>

      <motion.div variants={container} initial="hidden" animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {iosTopics.map((section, idx) => (
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

export default IOSProgram;
