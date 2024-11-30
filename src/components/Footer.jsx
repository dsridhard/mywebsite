import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 px-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      <p>
        Built with ❤️ using{" "}
        <a
          href="https://vitejs.dev/"
          className="text-blue-400 hover:underline"
        >
          Vite
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="text-blue-400 hover:underline"
        >
          Tailwind CSS
        </a>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
