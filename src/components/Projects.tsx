import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Login Page',
      description: 'A Basic User friendly login & registration page for CIT Kokrajhar.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://nihitbaruah21.github.io/citklogin/',
      githubUrl: 'https://github.com/nihitbaruah21/citklogin.git',
      category: 'Web App',
    },
    {
      id: 2,
      title: 'Gym-Management',
      description: 'Developing a web application that helps to manage the Institute gym using HTML, CSS, REACT.JS.',
      image: 'https://cdn.prod.website-files.com/607a8e5cd0dacf7963f4f13b/60a2599b7d0b8220321981b5_graham-mansfield-y7ywDXWJ-JU-unsplash.jpeg',
      tags: ['HTML','React', 'TypeScript', 'Firebase', 'Chart.js'],
      liveUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/nihitbaruah21/Gymnasium-CITK-GYM.git',
      category: 'Web App',
    },
    {
      id: 3,
      title: 'AI-Powered Emotion Tracker',
      description: 'Developing an AI-driven emotion tracker that crafts personalized stories and fosters community positivity through rewards.',
      image: 'https://www-cdn.morphcast.com/wp-content/uploads/2024/01/Donna-scansionata.webp',
      tags: ['JavaScript', 'API Integration', 'CSS3', 'Responsive'],
      liveUrl: 'https://example.com/project3',
      githubUrl: 'https://github.com/yourusername/project3',
      category: 'Web App',
    },
  ];

  const categories = ['All', 'Web App', 'UI/UX', 'Full Stack'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Projects" 
          subtitle="Check out some of my recent work" 
        />
        
        <div className="flex flex-wrap justify-center mt-8 mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl dark:border dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/nihitbaruah21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md transition-colors duration-300"
          >
            <Github size={20} className="mr-2" />
            <span>View More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;