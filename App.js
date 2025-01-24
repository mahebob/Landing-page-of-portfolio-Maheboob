import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Image from "./image/Mshaikh.jpg";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      name: 'Landing page of Business',
      path:'https://landingpageofservicebasedbusiness.netlify.app/',
      technologies:['React', 'Tailwind CSS', 'HTML5'], 
    },
    {
      name: 'Landing page of E-commerce',
      path: 'https://landingpageofe-commercewebsite.netlify.app/',
      technologies: ['React', 'Tailwind CSS', 'HTML5'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold ">M S</h1>
          <nav className="space-x-4">
            {['about', 'projects', 'contact'].map(section => (
              <button 
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize ${activeSection === section ? 'text-yellow-300' : 'hover:text-gray-200'}`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {activeSection === 'about' && (
          <section className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
              <div className=" w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${Image})`, 
                backgroundSize: 'cover',
                backgroundPosition: ' top center',
                transition: "background-image 1s ease-in-out",
              }}>
              
              </div>
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-800">MAHEBOOB SHAIKH</h2>
                <p className="text-gray-600">Full Stack Developer</p>
                <div className="flex space-x-2 mt-2">
              
                  <span>Maharashtra, India</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Passionate developer with expertise in web technologies, 
              creating innovative solutions that make a difference.
            </p>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-2">
               
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                     
                    </span>
                  
                  ))}
                </div>
                <button className="bg-blue-500 px-6 py-1 mt-4 text-white rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-colors">
                <a href={project.path}>View Project</a>
                </button>
              </div>
            ))}
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600" >Content me </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
              <a href="https://github.com/mahebob"> <FaGithub  className="w-8 h-8 hover:text-blue-600 cursor-pointer transition-colors" /></a>
            <a href="https://www.linkedin.com/in/maheboob-shaikh-5373b9330"><FaLinkedin  className="w-8  h-8 hover:text-blue-600 cursor-pointer transition-colors" /></a>
      <a  href="https://wa.me/917709852396"> <FaSquareWhatsapp className="w-8  h-8 hover:text-blue-600 cursor-pointer transition-colors" /></a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>Develop by Maheboob</p>
      </footer>
    </div>
  );
};

export default Portfolio;