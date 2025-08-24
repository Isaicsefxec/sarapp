const HandleWhatsAppClick = () => {
  const message = "Hi, I want to enquire about the course. Please ping me when you're free.";
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "918248162712";
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
};

export default HandleWhatsAppClick;
