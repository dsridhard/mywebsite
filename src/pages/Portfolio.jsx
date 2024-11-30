import Navbar from "../components/Navbar";

const projects = [
  { title: "Project 1", description: "This is a brief description of Project 1" },
  { title: "Project 2", description: "This is a brief description of Project 2" },
  { title: "Project 3", description: "This is a brief description of Project 3" },
  { title: "Project 4", description: "This is a brief description of Project 4" },
  { title: "Project 5", description: "This is a brief description of Project 5" },
  { title: "Project 6", description: "This is a brief description of Project 6" },
];

const Portfolio = () => (
  <div className="bg-gray-300">  
   
    <div className="container  mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
