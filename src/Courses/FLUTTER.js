import React from "react";
import { motion } from "framer-motion";
import HandleWhatsAppClick from "../Whatsappconnect";

// Course content
const courseSections = [
  {
    title: "Dart programming language",
    lessons: [
      "Dart basics: Variables, data types, functions",
      "Control flow (if‑else, loops, switch‑case)",
      "Null safety",
      "Collections (List, Set, Map)",
      "Functions",
      "Advanced Dart features",
      "Asynchronous programming",
      "Future and async/await",
      "Streams",
      "Mixins",
      "Dart packages and libraries",
      "Error handling and debugging",
    ],
  },
  {
    title: "Flutter introduction",
    lessons: [
      "Introduction about iOS & Android",
      "Advantages of using Flutter",
      "Flutter setup",
      "Downloading and installing Flutter SDK",
      "Setting up emulators with AVD",
      "Sample program and code execution",
    ],
  },
  {
    title: "Flutter – Getting Started",
    lessons: [
      "Understanding the Flutter architecture",
      "Steps to build a Flutter app",
      "Templates and scaffolding",
      "Material Design basics",
      "Widgets, assets, images, box constraints",
      "Creating & running a simple app using Flutter",
    ],
  },
  {
    title: "Flutter Widgets",
    lessons: [
      "Stateful & Stateless widgets",
      "AppBar widgets (leading, onTap, actions)",
      "ElevatedButton & using setState()",
      "Text / Center / Column widgets",
      "Adding images to pubspec.yaml",
      "Network vs asset images",
      "TextField & TextEditingController",
      "Container & Padding widgets",
    ],
  },
  {
    title: "Layout in Flutter",
    lessons: [
      "Row & Column",
      "Stack & Positioned",
      "Expanded & SizedBox",
      "ListTile (title, subtitle, leading)",
      "GridView",
      "InkWell & event listener",
      "Floating Action Button",
      "Navigator, routes & drawer",
      "SafeArea, TextStyle, Color, BoxDecoration",
    ],
  },
  {
    title: "Pub Packages",
    lessons: [
      "Using pub.dev to find Dart packages",
      "Install packages via pubspec.yaml",
      "Custom alert & button packages",
      "HTTP & Dio packages",
    ],
  },
  {
    title: "Working with APIs & Network Calls",
    lessons: [
      "HTTP methods intro",
      "FutureBuilder & StreamBuilder",
      "async / await",
      "Consuming REST APIs",
      "GET & POST (Postman demo)",
      "Making HTTP requests with http & dio",
      "Parsing JSON data",
      "JSON validation with jsonlint",
      "Updating UI with FutureBuilder",
    ],
  },
  {
    title: "Data Storage",
    lessons: ["SQLite (CRUD)", "SharedPreferences for key‑value storage"],
  },
  {
    title: "Firebase",
    lessons: [
      "Firebase project creation & console overview",
      "Firestore database",
      "Firebase push notifications",
    ],
  },
];

// Reusable Lesson Card
const LessonCard = ({ text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="bg-zinc-800 rounded-2xl p-6 w-64 shrink-0 shadow-lg"
  >
    <p className="text-base leading-snug mb-3">{text}</p>
  </motion.div>
);

// Reusable Section block
const Section = ({ title, lessons }) => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="border border-zinc-700 rounded-2xl p-8 mb-16"
  >
    <motion.h3
      whileHover={{ scale: 1.03 }}
      className="text-2xl font-bold mb-6"
    >
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
const FlutterCourse = () => (
  <div className="relative overflow-hidden">
    {/* Background Animation */}
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
        Flutter Mobile Application Development
      </motion.h1>

      {/* Intro */}
      <p className="max-w-4xl mx-auto text-xl leading-relaxed mb-16 text-zinc-300">
        SAR Placement provides an advanced, world‑class{" "}
        <strong>Flutter Developer Course</strong> that is aligned with industry
        demands. Our vision is to make India a global hub of high‑quality mobile
        developers, and Google supports this endeavor to train over a million
        Flutter developers. The course is taught by industry experts actively
        developing complex mobile applications.
        <br />
        <br />
        Our trainers collaborate closely with the management team to create
        comprehensive and updated course content and projects. Through
        interactive classes and hands‑on projects, this course ensures that
        students emerge as expert developers.
      </p>

      {/* Sections */}
      {courseSections.map((s, idx) => (
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
          <li>Create widgets, customize lists, grids & more.</li>
          <li>Build apps that use audio, video & SQLite.</li>
          <li>Publish apps on Google Play & App Store.</li>
          <li>Set up Android Studio & Xcode for Flutter.</li>
          <li>Master Dart, state management & API integration.</li>
          <li>Confidently deploy & scale cross‑platform apps.</li>
        </ul>
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 space-y-10 max-w-4xl mx-auto text-xl leading-relaxed text-zinc-300"
      >
        <div>
          <h2 className="text-3xl font-bold mb-3">What is Flutter?</h2>
          <p>
            Flutter is an open‑source UI toolkit created by Google. It enables
            developers to craft natively compiled applications for mobile, web
            and desktop from a single codebase while delivering smooth,
            high‑performance UIs.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-3">What is Dart?</h2>
          <p>
            Dart is the modern, client‑optimized language behind Flutter. With
            strong typing, async/await and a rich standard library, it makes
            building fast, reliable apps a breeze.
          </p>
        </div>
      </motion.div>

      {/* Enroll Button */}
      <div className="text-center mt-12">
        <div className="text-center mt-12">
  <motion.button
    onClick={HandleWhatsAppClick}
    className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 hover:bg-green-400 transition"
    whileHover={{ scale: 1.05 }}
  >
    📩 Enquiry Now & Get Syllabus
  </motion.button>
</div>

      </div>
    </div>
  </div>
);

export default FlutterCourse;
