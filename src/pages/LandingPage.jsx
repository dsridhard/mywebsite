import React from 'react'
import { FaFileDownload } from "react-icons/fa";
const LandingPage = () => {
  return (
    <div>
       <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white min-h-screen flex flex-col justify-center items-center px-4">
      <img
        src="/assets/logo.png"
        alt="Logo"
        className="w-24 h-24 sm:w-32 sm:h-32 mb-6 rounded-full border-4 border-white"
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        Welcome to <span className="text-yellow-300">My Portfolio</span>
      </h1>

      <div className="flex space-x-4">
        <a
          href="portfolio"
          className="bg-green-700 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-1"
          >
        My Work
        </a>
        <a
          href="/resume.pdf"
          download
          className="bg-green-700 text-white p-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-1"
        >
          Download Resume <FaFileDownload className="text-white mx-1 text-xl"/>
        </a>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
