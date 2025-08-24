import React from "react";

const Footer = () => (
  <footer
    style={{
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#001529",
      color: "#fff",
      fontSize: "0.95rem",
      marginTop: "20px",
    }}
  >
    <p>
      &copy; {new Date().getFullYear()} SAR Placement Technologies &nbsp;|&nbsp;
      Flutter Training and Placement Services Center
    </p>
  </footer>
);

export default Footer;
