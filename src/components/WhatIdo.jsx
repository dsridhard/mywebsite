import React from "react";
import { FaCode, FaVial, FaQuidditch } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const WhatIDo = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Effective designs that capture attention and convey clarity.",
      icon: <FaQuidditch className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Web Development",
      description: "Building responsive websites with modern frameworks.",
      icon: <FaCode className="text-blue-500 text-4xl mb-4" />,
    },
    {
      title: "Testing & Automation",
      description: "Ensuring high-quality software with automated testing.",
      icon: <FaVial className="text-red-500 text-4xl mb-4" />,
    },
    {
      title: "Deployment & CI/CD",
      description: "Streamlining deployments with Docker, Kubernetes, and CI/CD.",
      icon: <GrDeploy className="text-green-500 text-4xl mb-4" />,
    },
  ];

  return (
    <div className="py-12 bg-white px-4">
      <style>{`
        /* Blinking effect with red color */
        @keyframes blink-red {
          0%, 100% {
            color: red;
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .blink {
          animation: blink-red 1s infinite;
        }
      `}</style>

      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-left mx-5 mb-8 leading-10">
          What I Do
        </h2>
        <p className="text-left text-gray-400 mx-5 text-bold mb-8 ">
          From understanding requirements to delivering the final product, I handle everything in between.
        </p>
        <div className="flex flex-col bg-sky-100 rounded-lg py-3 md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              {/* Service Block */}
              <div
                className="flex flex-col items-center text-center px-6 transition transform hover:scale-105"
              >
                {service.icon}
                <h3 className="text-xl text-sky-950 font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 max-w-xs indent-1">{service.description}</p>
              </div>

              {/* Arrow Icon */}
              {index < services.length - 1 && (
                <div className="hidden md:block text-gray-400">
                  <MdKeyboardDoubleArrowRight
                    className={`text-5xl mx-4 my-10 blink`}
                    style={{ animationDelay: `${index * 2.0}s` }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
