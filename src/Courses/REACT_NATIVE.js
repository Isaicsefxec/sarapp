import React from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import "antd/dist/reset.css";
import HandleWhatsAppClick from "../Whatsappconnect";
const reactNativeTopics = [
  {
    title: "React Native Fundamentals",
    icon: "📱",
    content: [
      "Setting up Expo & React Native CLI",
      "JSX, components, props, state",
      "Core components: View, Text, Button, ScrollView"
    ]
  },
  {
    title: "Styling in React Native",
    icon: "🎨",
    content: [
      "Flexbox layout system",
      "StyleSheet and inline styles",
      "Responsive designs and Dimensions API"
    ]
  },
  {
    title: "Navigation & Screens",
    icon: "🧭",
    content: [
      "React Navigation setup",
      "Stack, Tab, Drawer navigators",
      "Screen parameters & nested navigation"
    ]
  },
  {
    title: "Forms & Inputs",
    icon: "✍️",
    content: [
      "TextInput, KeyboardAvoidingView",
      "Controlled inputs & validation",
      "Formik & Yup for form handling"
    ]
  },
  {
    title: "APIs & Axios",
    icon: "🌐",
    content: [
      "Fetching data from REST APIs",
      "GET/POST using Axios",
      "Error handling & loading states"
    ]
  },
  {
    title: "State Management",
    icon: "🔁",
    content: [
      "Context API & useReducer",
      "Redux Toolkit & async flows",
      "Zustand for lightweight global state"
    ]
  },
  {
    title: "React Native Firebase",
    icon: "🔥",
    content: [
      "Firebase setup & Authentication",
      "Firestore integration",
      "Push Notifications with FCM"
    ]
  },
  {
    title: "Native Modules & Device APIs",
    icon: "📦",
    content: [
      "Permissions, Camera, Image Picker",
      "AsyncStorage for persistence",
      "Using expo modules vs bare workflow"
    ]
  },
  {
    title: "Testing & Debugging",
    icon: "🧪",
    content: [
      "Using React Native Debugger",
      "Jest for unit testing",
      "Expo Go vs Android/iOS simulators"
    ]
  },
  {
    title: "Deployment & Publishing",
    icon: "🚀",
    content: [
      "Building APKs & App Bundles",
      "Expo EAS build for iOS & Android",
      "Google Play & App Store submission"
    ]
  },
  {
    title: "React Native Job Roles",
    icon: "💼",
    content: [
      "React Native App Developer",
      "Mobile Frontend Engineer",
      "Cross-platform App Developer",
      "Expo + Firebase Engineer"
    ]
  },
  {
    title: "Why React Native is Booming",
    icon: "📈",
    content: [
      "Build iOS & Android apps with 1 codebase",
      "Backed by Meta & huge community",
      "Fast refresh, open-source ecosystem",
      "Used by Tesla, Instagram, Uber"
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

const ReactNativeCourse = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen p-6 sm:p-14 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ x: [0, -80, 60, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Title */}
      <motion.h1
        className="text-center text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-14"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        React Native Developer Program
      </motion.h1>

      {/* Card Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {reactNativeTopics.map((section, idx) => (
          <motion.div
            key={idx}
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

export default ReactNativeCourse;
