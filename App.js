
import { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import kola from './image/Mshaikh.jpg';
import Kola1 from './image/Screenshot (12).png';
import kola2 from './image/Screenshot (13).png';
import { useForm, ValidationError } from '@formspree/react';



const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Tailwind css', level: 85 },
    { name: 'Bootstrap', level: 75 },
    { name: 'JavaScript', level: 70 },
    { name: 'CSS3', level: 95 },
    { name: 'HTML5', level: 99 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Landing page of Business',
      tech: ['React', 'Tailwind CSS', 'HTML5'],
      image:Kola1,
       path:'https://landingpageofservicebasedbusiness.netlify.app/',
    },
    {
      id: 2,
      title: 'landing page of Protfolio',
      tech: ['React', 'Tailwind CSS', 'HTML5'],
      image:kola2,
      path:'',
    },
   
  ];


  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(progress * 100);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        setIsVisible(prev => ({
          ...prev,
          [section.id]: rect.top < window.innerHeight * 0.75
        }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const [state, handleSubmit] = useForm("xrbbykja");
  if (state.succeeded) {
    return <p>Thanks!
    The form was submitted successfully.
    Go back</p>;
}
if (state.submitting) {
  return <p>Can't send an empty form!
    Go back
  </p>;
}



  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

    
   

      {/* Hero Section */}
      <section 
        id="home"
        className={`min-h-screen flex items-center grid-cols-1 md:grid-cols-2 gap-2 px-8 md:px-16 transform transition-all duration-1000 ${
          isVisible.home ? 'translate-x-0 opacity-100' : ''
        }`}
      >
        <div className=" max-w-40  md:max-w-4xl ">
          <h1 className=" text-4xl md:text-7xl font-bold mb-28 md:mb-10 ">
            Hello I'm <span className="text-white text-5xl md:text-7xl ">Maheboob</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 mb-28 md:mb-10   ">
            Full Stack Developer specializing in modern web applications
          </p>
        
          <div className="flex md:space-x-4">
              
        
            
            <div className="flex space-x-11 m-2">
        
           <a href="https://github.com/mahebob"> <FaGithub  className="w-8 h-8 hover:text-blue-500 cursor-pointer transition-colors" /></a>
           <a href="https://www.linkedin.com/in/maheboob-shaikh-5373b9330"><FaLinkedin  className="w-8 h-8 hover:text-blue-500 cursor-pointer transition-colors" /></a>
     <a  href="https://wa.me/917709852396"> <FaSquareWhatsapp className="w-8 h-8 hover:text-blue-500 cursor-pointer transition-colors" /></a>
         </div>
        </div>
         
        </div>
         <div className=''>
          <img src={kola}  className='rounded-xl ms-0 mt-12 md:mb-10  md:ms-36   w-28 md:w-44  '></img>
        </div>
     
      </section>

      {/* Skills Section */}
      <section 
        id="skills"
        className={`min-h-screen flex items-center px-8 md:px-16 transform transition-all duration-1000 ${
          isVisible.skills ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="space-y-8">
            {skills.map(skill => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-lg">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-green-500 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-1000"
                    style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects"
        className={`min-h-screen px-8 md:px-16 py-24  transform transition-all duration-1000 ${
          isVisible.projects ? 'translate-x-0 opacity-100' : ''
        }`}
      >
        <h2 className="text-4xl font-bold  mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-8 ">
          {projects.map(project => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-lg  overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 bg-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap  mb-4 ">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-slate-700  text-green-500 px-4 py-1 gap-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
               <button className="bg-blue-500 px-6 py-1   rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-colors">
                <a href={project.path}>View Project</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        className={`min-h-screen flex items-center justify-center px-8 md:px-16 transform transition-all duration-1000 ${
          isVisible.contact ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="max-w-xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
         
          <form onSubmit={handleSubmit} className="space-y-6">
        
          <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      /> 
      <label htmlFor="email">
        Email 
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label htmlFor="email">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className="w-full bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition-colors" disabled={state.submitting}>
        Submit
      </button>
    </form>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;