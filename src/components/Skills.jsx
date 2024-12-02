import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJenkins,
} from "react-icons/fa";
import { SiMysql, SiSelenium } from "react-icons/si";

const SkillsAndExperiencePage = () => {
  const [experiences, setExperiences] = useState([]); // State to store experiences
  const [isAnimated, setIsAnimated] = useState(false); // For progress bar animation

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
    },
  ];

  // Fetch experience data from API
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/experiences", {
          method: "GET",
          headers: {
            Authorization: "Bearer d6f168390f32b2d48b112273d34dad08383a961fa04b8647336c26840573fa60513264d6091bbb33e6d61a93a9cc09c794278d8e1c63973832ed581ac3b41ebb1605f204a93bb0cd344c90487e218588d451e2d4baf67b44888e0c1d26b09a333762e6b312eb7b9df3502c6960e67bee9d9f5dce3fb52fd7c5c9538a486522a1", // Replace with your actual Bearer token
          },
        });
        const data = await response.json();
        setExperiences(data.data); // Store the experience data
        setIsAnimated(true); // Trigger the progress bar animation
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };

    fetchExperiences();
  }, []);

  // Function to format date (if needed)
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <><div className="py-12 bg-white px-4">
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

                  {/* Progress Bar using <progress> tag */}
                  <div className="w-full">
                    <div className="flex justify-between text-gray-600 mb-2">
                      <span>{skill.title}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <progress
                      value={skill.level}
                      max="100"
                      className="progress-bar w-full h-2 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>

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
                      <h3 className="text-xl text-sky-800 font-bold">
                        {experience.title}
                      </h3>
                      <p className="text-gray-600">{experience.company}</p>
                      <p className="text-gray-500">
                        {formatDate(experience.from)} - {formatDate(experience.to)}
                      </p>
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
    </div><style jsx>{`
      /* Style for the <progress> element */
      progress {
        appearance: none;
        width: 100%;
        height: 90px;
        border-radius: 5px;
        background-color: #f3f4f6; /* Light gray background */
        overflow: hidden;
      }

      /* Webkit browsers like Chrome */
      progress::-webkit-progress-bar {
        background-color: #f3f4f6; /* Light gray background */
      }

      /* Progress value color (blue) */
      progress::-webkit-progress-value {
        background-color: #3b82f6; /* Blue */
        transition: width 1s ease-in-out; /* Smooth animation */
      }

      /* Firefox browsers */
      progress::-moz-progress-bar {
        background-color: #3b82f6; /* Blue */
        transition: width 1s ease-in-out; /* Smooth animation */
      }

      /* Progress value when disabled (optional) */
      progress:disabled::-webkit-progress-value {
        background-color: #d1d5db; /* Disabled gray */
      }

      progress:disabled::-moz-progress-bar {
        background-color: #d1d5db; /* Disabled gray */
      }
    `}</style></>
  );
};

export default SkillsAndExperiencePage;
