const About = () => (
  <>
    <div className="bg-white min-h-screen flex items-center justify-center"> {/* Use flex for centering */}
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          <span className="capitalize">So</span>, Who am I?
        </h2>
        <div className="flex items-center justify-center space-x-6 px-4">
          {/* Paragraph Section */}
          <p className="first-letter-style text-gray-600 text-lg leading-relaxed indent-4 mb-6 sm:text-left flex-1 max-w-xl">
            I am a passionate software developer with expertise in NodeJs,
            MySQL, React.js, Angular, and automated testing with Selenium. I
            specialize in building robust web applications, CI/CD pipelines with
            Jenkins, and have a proven track record working with IRCTC and CRIS
            to enhance railway applications. My skills enable me to solve
            complex technical challenges and create scalable, user-friendly
            solutions.
          </p>

          <style jsx>{`
            .first-letter-style::first-letter {
              font-size: 4rem; /* Adjust size of the first letter */
              color: black; /* Optional: Change the color of the first letter */
            }

            .first-letter-style {
              font-size: 1.425rem;
              line-height: 1; /* Set default font size for the rest of the paragraph */
            }
          `}</style>

          {/* Image Section */}
          <img
            src="https://picsum.photos/200"
            height={200}
            width={200}
            alt="My Photo"
            className="rounded-full border-4 border-gray-300 object-cover w-1/4 h-25"
          />
        </div>
      </div>
    </div>
  </>
);

export default About;
