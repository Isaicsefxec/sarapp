import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import HandleWhatsAppClick from "../Whatsappconnect";
const Section = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <motion.h2
        className="text-xl md:text-2xl font-bold text-white mb-4"
        whileHover={{ scale: 1.03, color: "#7c3aed" }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="p-4 bg-white rounded-none shadow-lg text-gray-800 leading-relaxed border border-blue-100 hover:shadow-xl transition-transform duration-300"
        whileHover={{ scale: 1.03 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const DigitalMarketing = () => {
  const [nextBatchDate, setNextBatchDate] = useState("");

  useEffect(() => {
    const getNextMonday = () => {
      const today = new Date();
      const nextMonday = new Date();
      nextMonday.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7 || 7));
      return nextMonday.toDateString();
    };
    setNextBatchDate(getNextMonday());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-5 font-sans">
      <motion.div
        className="bg-white text-center text-gray-900 rounded-lg p-8 shadow-xl mb-12 border border-purple-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-black mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          🚀 <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">Digital Marketing Training & Placement Program</span>
        </motion.h1>
        <motion.h3
          className="text-xl font-semibold text-purple-700"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Join Now
        </motion.h3>
      </motion.div>

      <Section title="📘 About Course">
        <p>
          <span className="font-bold text-purple-700">Digital Marketing</span> offers one of the most beginner-friendly gateways into tech. Whether you're from a non-IT background, unsure about coding, or prefer step-by-step guidance — this course is built with you in mind. No prior experience needed.
        </p>
      </Section>

      <Section title="🎯 Benefits of Digital Marketing">
        <ul className="list-disc pl-5">
          <li>High demand for <span className="text-yellow-300 font-semibold animate-pulse">certified professionals</span></li>
          <li>Affordable learning path</li>
          <li><span className="text-green-300 font-semibold">Lucrative career</span> with higher salaries</li>
        </ul>
      </Section>

      <Section title="❓ Why Study Digital Marketing?">
        <ul className="list-disc pl-5">
          <li><span className="font-bold">87%</span> of executives prioritize digital-first strategies</li>
          <li><span className="font-bold">58%</span> of CMOs face digital skill gaps</li>
          <li>Marketing departments growing at 15% yearly</li>
        </ul>
      </Section>

      <Section title="📚 Course Content">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 list-none">
          <li className="bg-blue-100 p-3 rounded-md flex items-center gap-2 shadow hover:scale-105 transition"><FaCheckCircle className="text-green-500" /> SEO Techniques</li>
          <li className="bg-blue-100 p-3 rounded-md flex items-center gap-2 shadow hover:scale-105 transition"><FaCheckCircle className="text-green-500" /> Email & Social Media Ads</li>
          <li className="bg-blue-100 p-3 rounded-md flex items-center gap-2 shadow hover:scale-105 transition"><FaCheckCircle className="text-green-500" /> Google My Business</li>
          <li className="bg-blue-100 p-3 rounded-md flex items-center gap-2 shadow hover:scale-105 transition"><FaCheckCircle className="text-green-500" /> PPC & Blogging</li>
        </ul>
      </Section>

      <Section title="⏳ Course Duration & Timings">
        <p>Online only | <span className="font-bold">2 Months</span> | 4 Days/Week | <span className="text-yellow-300 font-semibold">5 hrs per session</span></p>
      </Section>

      <Section title="🗓 Batch Availability">
        <ul className="list-disc pl-5">
          <li>Open for all degrees & age groups</li>
          <li>✅ New batches starting soon</li>
          <li className="text-green-300 font-bold">Next Batch: {nextBatchDate}</li>
        </ul>
      </Section>

      <Section title="👥 This Course is Ideal For">
        <ul className="list-disc pl-5">
          <li>Career changers looking for a non-coding tech role</li>
          <li>Students and freshers from any educational background</li>
          <li>Entrepreneurs who want to grow online visibility</li>
          <li>Working professionals who want to upskill</li>
          <li>Freelancers and creatives who want digital expertise</li>
        </ul>
      </Section>

      <Section title="👨‍🏫 About Trainer">
        <p><strong>Sam Jose</strong>, a digital marketing expert with 7+ years’ experience. He’s helped 100s of professionals upskill through practical, result-oriented strategies.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Advanced SEO & SEM Strategies</li>
          <li>Social Media Mastery</li>
          <li>High-converting Email Campaigns</li>
          <li>Live Campaign Management</li>
          <li>Analytics & Growth Hacking</li>
        </ul>
      </Section>
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
  );
};

export default DigitalMarketing;
