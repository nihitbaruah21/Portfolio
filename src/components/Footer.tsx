import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <p className="text-gray-400 mt-2 max-w-md">
              A Full-Stack developer passionate about creating beautiful and functional web experiences. Feel free to connect me at nihitbaruah@gmail.com
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/nihitbaruah21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nihit-baruah-b69400358/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nihitt_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.246 2.466.415a4.92 4.92 0 0 1 1.675 1.092 4.92 4.92 0 0 1 1.092 1.675c.169.463.359 1.26.415 2.466.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.246 2.003-.415 2.466a4.92 4.92 0 0 1-1.092 1.675 4.92 4.92 0 0 1-1.675 1.092c-.463.169-1.26.359-2.466.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.246-2.466-.415a4.92 4.92 0 0 1-1.675-1.092 4.92 4.92 0 0 1-1.092-1.675c-.169-.463-.359-1.26-.415-2.466C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.246-2.003.415-2.466a4.92 4.92 0 0 1 1.092-1.675 4.92 4.92 0 0 1 1.675-1.092c.463-.169 1.26-.359 2.466-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.012 7.052.07 5.775.128 4.673.332 3.75.635c-.923.304-1.707.7-2.487 1.48-.78.78-1.176 1.564-1.48 2.487-.303.923-.507 2.025-.565 3.302C.012 8.332 0 8.737 0 12s.012 3.668.07 4.948c.058 1.277.262 2.379.565 3.302.304.923.7 1.707 1.48 2.487.78.78 1.564 1.176 2.487 1.48.923.303 2.025.507 3.302.565 1.28.058 1.685.07 4.948.07s3.668-.012 4.948-.07c1.277-.058 2.379-.262 3.302-.565.923-.304 1.707-.7 2.487-1.48.78-.78 1.176-1.564 1.48-2.487.303-.923.507-2.025.565-3.302.058-1.28.07-1.685.07-4.948s-.012-3.668-.07-4.948c-.058-1.277-.262-2.379-.565-3.302-.304-.923-.7-1.707-1.48-2.487-.78-.78-1.564-1.176-2.487-1.48-.923-.303-2.025-.507-3.302-.565C15.668.012 15.263 0 12 0z"/>
                <path d="M12 5.838A6.162 6.162 0 1 0 18.162 12 6.169 6.169 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 16 12a4.006 4.006 0 0 1-4 4z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
            </a>
            </div>
            <p className="text-gray-400 flex items-center">
              © {currentYear} Nihit Baruah. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#education" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-white transition-colors duration-200"
            >
              Education
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;