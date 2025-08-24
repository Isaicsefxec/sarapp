import React from "react";

const Header = () => (
  <header
    style={{
      padding: "30px 20px",
      textAlign: "center",
      background: "linear-gradient(to right, #0f172a, #1e293b)",
      color: "#f8fafc",
      borderRadius: "26px",
      margin: "0 auto 24px",
      boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
      maxWidth: "1100px",
    }}
  >
    <h1
      style={{
        fontSize: "3rem",
        marginBottom: "12px",
        fontWeight: "800",
        color: "#ffffff",
      }}
    >
      SAR Placement Technologies
    </h1>

    <p
      style={{
        fontSize: "1.1rem",
        fontWeight: "600",
        margin: "10px 0",
      }}
    >
      <a
        href="https://maps.app.goo.gl/ojVUzbDPEiBxjoWb6"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#60a5fa", textDecoration: "underline" }}
      >
        📍 Rose Nagar, 2nd Street, Kovilambakkam, Chennai, Tamil Nadu
      </a>
    </p>

    <p
      style={{
        fontSize: "1rem",
        fontStyle: "italic",
        color: "#cbd5e1",
        marginBottom: "16px",
        lineHeight: 1.6,
      }}
    >
      Based in Tamil Nadu — Connecting Globally Through Remote Online Training. <br />
      Classes Available in Both Tamil and English.
    </p>

    <div style={{ fontSize: "1.05rem", fontWeight: "600" }}>
      <a
        href="mailto:samjose.tutor@gmail.com"
        style={{ color: "#facc15", textDecoration: "none", marginRight: "20px" }}
      >
        📧 samjose.tutor@gmail.com
      </a>
      <a
        href="tel:+918248162712"
        style={{ color: "#34d399", textDecoration: "none" }}
      >
        📞 +91-8248162712
      </a>
    </div>
  </header>
);

export default Header;
