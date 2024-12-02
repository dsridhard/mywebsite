import React, { useState } from "react";
import { LuSend } from "react-icons/lu";
import Alert from "../components/Alert"; // Import the Alert component

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false); // State to control the visibility of the alert

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageData = [
      {
        type: "paragraph",
        children: [
          {
            text: formData.message,
            type: "text",
          },
        ],
      },
    ];

    const requestData = {
      data: {
        name: formData.name,
        email: formData.email,
        message: messageData,
      },
    };

    try {
      const response = await fetch("http://localhost:1337/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer d6f168390f32b2d48b112273d34dad08383a961fa04b8647336c26840573fa60513264d6091bbb33e6d61a93a9cc09c794278d8e1c63973832ed581ac3b41ebb1605f204a93bb0cd344c90487e218588d451e2d4baf67b44888e0c1d26b09a333762e6b312eb7b9df3502c6960e67bee9d9f5dce3fb52fd7c5c9538a486522a1",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setAlertVisible(true); // Show success alert
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex justify-end"
      style={{ backgroundImage: "url('./src/assets/images/contactUs.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-50 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg mx-auto max-w-[95%] sm:max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Me
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-2 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span>{isSubmitting ? "Sending..." : "Send"}</span>
              {!isSubmitting && <LuSend className="text-white text-xl" />}
            </button>
          </form>
        </div>
      </div>

      {/* Show the success alert if the form is successfully submitted */}
      {alertVisible && (
        <Alert
          message="Message sent successfully!"
          onClose={() => setAlertVisible(false)} // Close the alert manually
        />
      )}
    </div>
  );
};

export default Contact;
