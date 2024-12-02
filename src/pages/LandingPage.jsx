import React from "react";

const IntroSection = () => {
  return (
    <section id="home" className="bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* START THE CONTENT FOR THE INTRO */}
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="block">Hey!, I'm SRIDHAR</span>
              <span className="block text-lg md:text-xl font-normal leading-relaxed">
                this is a multi-purpose responsive layout created with TailwindCSS.
                (here you can place your description text)
              </span>
            </h1>
            <button
              type="button"
              className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-600"
            >
              Get in Touch
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>
          </div>

          {/* START THE CONTENT FOR THE VIDEO */}
          <div className="intros text-right">
            <div className="video-box relative">
              <img
                src="./src/assets/images/intro.jpg"
                alt="video illustration"
                className="rounded-lg max-w-full"
              />
              <a
                href="#"
                className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black hover:bg-opacity-70"
              >
                <span className="text-blue-500 text-4xl">
                  <i className="fas fa-play-circle"></i>
                </span>
                <span className="absolute inset-0 border-4 border-blue-500 rounded-full animate-pulse"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WAVE SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mt-8 block w-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="10"
          d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default IntroSection;
