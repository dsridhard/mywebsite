import { LuSend } from "react-icons/lu";
const Contact = () => (
  <>
    <div
      className="relative min-h-screen bg-cover bg-center flex justify-end"
      style={{ backgroundImage: "url('./src/assets/images/contactUs.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-50 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg mx-auto max-w-[95%] sm:max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Me
          </h2>
          <form className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
  type="submit"
  className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-2"
>
  <span>Send</span>
  <LuSend className="text-white text-xl" />
</button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
