import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJenkins,
} from "react-icons/fa";
import { SiMysql ,SiSelenium } from "react-icons/si";

const SkillsAndExperiencePage = () => {
  const skills = [
    {
      title: "React",
      icon: <FaReact className="text-4xl text-blue-500" />,
      level: 90,
    },
    {
      title: "Angular",
      icon: <FaAngular className="text-4xl text-red-600" />,
      level: 75,
    },
    {
      title: "Node",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      level: 85,
    },
    {
      title: "Python",
      icon: <FaPython className="text-4xl text-blue-600" />,
      level: 70,
    },
    {
      title: "MySQL",
      icon: <SiMysql className="text-4xl text-orange-500" />,
      level: 95,
    },
    {
      title: "Selenium",
      icon: <SiSelenium className="text-4xl text-yellow-400" />,
      level: 70,
    },
    {
      title: "Jenkins",
      icon: <FaJenkins className="text-4xl text-blue-700" />,
      level: 70,
    }
    
  ];

  const experiences = [
    {
      title: "Technical Support Staff",
      company: "Ace Man Power / IRCTC",
      date: "May 2024 - Present",
      description:
        "Automating Task and Testing using Python, Selenium, and Jenkins Pipelines.",
    },
    {
      title: "Associate Engineer",
      company: "Sysnet Global Technologies Pvt Ltd / CRIS / HPE",
      date: "June 2022 - April 2024",
      description:
        "Assisted in development of various Indian railway websites and server monitoring web app for HPE.",
    },
  ];

  // State to control animation trigger
  const [isAnimated, setIsAnimated] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setIsAnimated(true);
  }, [2]);

  // Function to get the progress bar color based on the skill level
  const getProgressBarColor = (level) => {
    if (level >= 90) return "bg-green-500"; // Green for 90% and above
    if (level >= 75) return "bg-yellow-500"; // Yellow for 75% to 89%
    if (level >= 50) return "bg-orange-500"; // Orange for 50% to 74%
    return "bg-red-500"; // Red for less than 50%
  };

  return (
    <div className="py-12 bg-white px-4">
      <div className="container mx-auto">
        {/* Main Section with Horizontal Layout */}
        <div className="flex justify-between items-start space-x-16">
          {/* Skills Section */}
          <section id="skills" className="flex-1 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              My Skills
            </h2>
            <p className="text-center mb-8">
              I specialize in the following technologies and tools:
            </p>

            <div className="flex flex-col items-center space-y-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 w-full max-w-md"
                >
                  {/* Skill Icon */}
                  <div>{skill.icon}</div>

                  {/* Progress Bar */}
                  <div className="w-full">
                    <div className="flex justify-between text-gray-600 mb-2">
                      <span>{skill.title}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-300 rounded-full">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-in-out ${
                          isAnimated ? "progress-bar-animation" : ""
                        }`}
                        style={{
                          width: isAnimated ? `${skill.level}%` : "0%", // Start with 0% and animate to skill level
                          backgroundColor: getProgressBarColor(skill.level), // Set dynamic color
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CSS for Animation */}
          <style jsx>{`
            .progress-bar-animation {
              animation: progressBar 1s ease-out forwards;
            }

            @keyframes progressBar {
              0% {
                width: 0%;
              }
              100% {
                width: var(--progress-width);
              }
            }
          `}</style>

          {/* Experience Section */}
          <section id="experience" className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              My Experience
            </h2>
            <p className="text-center mb-8">
              Here’s a timeline of my professional experience:
            </p>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center space-x-4"
                  >
                    <div className="relative z-10 bg-gray-100 p-4 rounded-lg shadow-md hover:drop-shadow-lg w-full max-w-xl">
                      <h3 className="text-xl text-sky-800 font-bold">{experience.title}</h3>
                      <p className="text-gray-600">{experience.company}</p>
                      <p className="text-gray-500">{experience.date}</p>
                      <p className="text-gray-900 mt-2">
                        {experience.description}
                      </p>
                    </div>

                    <div className="absolute w-5 h-5 rounded-full bg-blue-500 left-1/2 transform -translate-x-1/2 top-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperiencePage;
