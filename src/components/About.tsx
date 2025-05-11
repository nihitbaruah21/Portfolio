import React from 'react';
import { Briefcase, GraduationCap, Heart, MapPin } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Nihit Baruah</span>, a passionate Web developer with a keen eye for creating beautiful and functional web experiences. With over 2 years of experience in the industry, I specialize in building responsive and intuitive user interfaces.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My journey in web development began during my college years, where I discovered the joy of creating things that live on the internet. Since then, I’ve been on a continuous learning path, sharpening my skills to stay ahead in the ever-evolving world of web technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            When I’m not deep in code, you’ll likely find me traveling to new places or experimenting with new recipes in the kitchen. I truly believe that diverse experiences outside of tech fuel creativity and help me solve problems with a fresh perspective.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">1 Years</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">3rd Year B-Tech in Computer Science</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Guwahati, Assam</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Interests</h4>
                  <p className="text-gray-600 dark:text-gray-400">Hiking, Reading, Cooking</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img 
                src="https://images.nature.com/lw1200/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg" 
                alt="About Me" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-100 dark:bg-amber-900 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;