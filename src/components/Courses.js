import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const styles = `
  .popup-enter {
    opacity: 0;
    transform: translateY(-20px);
  }
  .popup-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease, transform 300ms ease;
  }
  .popup-exit {
    opacity: 1;
    transform: translateY(0);
  }
  .popup-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms ease, transform 300ms ease;
  }
`;

const Popup = ({ show, title, message, onClose }) => (
  <CSSTransition in={show} timeout={300} classNames="popup" unmountOnExit>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  </CSSTransition>
);

const DualPopupComponent = () => {
  const [showAutoPopup, setShowAutoPopup] = useState(false);
  const [showClickPopup, setShowClickPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAutoPopup(true);
    }, 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center">
      {/* Inject animation styles */}
      <style>{styles}</style>

      <h1 className="text-4xl font-bold text-blue-700 mb-2">Main Page</h1>
      <p className="text-gray-500 mb-6">Two popups — one after 10s, one on click.</p>

      <button
        onClick={() => setShowClickPopup(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        Show Slide-Down Popup
      </button>

      <Popup
        show={showClickPopup}
        title="Manual Slide-Down Popup"
        message="This popup slides down when you click the button."
        onClose={() => setShowClickPopup(false)}
      />

      <Popup
        show={showAutoPopup}
        title="Automatic Popup"
        message="This appeared 10 seconds after loading."
        onClose={() => setShowAutoPopup(false)}
      />
    </div>
  );
};

export default DualPopupComponent;
