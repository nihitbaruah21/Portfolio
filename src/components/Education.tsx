import React from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string;
  icon: 'education' | 'work';
}

const Education: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: '3rd Year B-Tech in Computer Science',
      organization: 'Central Institute Of Technology Kokrajhar',
      date: '2022 - 2026',
      location: 'Kokrajhar, BTR Assam',
      description: 'I’m a 3rd-year CSE student with a never-give-up mindset, eager to solve problems and build innovative solutions.',
      icon: 'education',
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      organization: 'Amtron',
      date: 'Winter 2024',
      location: 'Guwahati, Assam',
      description: 'Developed and maintained websites. Collaborated with designers to implement responsive designs. Improved website performance.',
      icon: 'work',
    },
    {
      id: 3,
      title: 'Content Writing Intern',
      organization: 'TheOpinionated Indian',
      date: 'Summer 2024 - Present',
      location: 'Remote',
      description: "I'm writing and editing engaging, SEO-optimized content that aligns with brand voice and connects effectively with the target audience.",
      icon: 'work',
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Education & Experience" 
          subtitle="My professional journey" 
        />
        
        <div className="relative mt-12">
          {/* Timeline center line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10">
                  {item.icon === 'education' ? (
                    <Award size={16} className="text-white" />
                  ) : (
                    <Briefcase size={16} className="text-white" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-0 md:pr-12' : 'md:pl-12 md:pr-0'
                } pl-12`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl">
                    <div className={`inline-block px-3 py-1 text-xs font-semibold rounded mb-3 ${
                      item.icon === 'education' 
                        ? 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300'
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
                    }`}>
                      {item.icon === 'education' ? 'Education' : 'Experience'}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">
                      {item.organization}
                    </h4>
                    <div className="flex flex-wrap gap-4 mt-3">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin size={16} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;