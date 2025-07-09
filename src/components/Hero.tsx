import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle, Github as GitHub, Instagram, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
              WELCOME TO MY PORTFOLIO
            </p>
            <h1 
              ref={textRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Nihit Baruah</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">Web Developer</span>
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg">
            Full-stack web developer & 23-year-old CSE student passionate about solving real-world problems. Skilled in React, Next.js, Node.js, Docker, CI/CD, and AWS. Detail-driven, cloud-savvy, and a team player who loves building clean, scalable solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Get in touch
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-md transition-colors duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                View projects
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/nihitbaruah21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nihit-baruah-b69400358/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/nihitt_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-200"
              >
               <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative mx-auto w-80 h-80 rounded-full bg-blue-600 dark:bg-blue-500 overflow-hidden shadow-xl opacity-0 animate-fade-in animation-delay-300">
              <img 
                src="/IMG_4328.JPG" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={32} />
      </button>
    </section>
  );
};

export default Hero;