import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, FolderIcon, MailIcon } from 'lucide-react';
import { HomeSection } from './components/HomeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
export function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['Home', 'Projects', 'Contact'];
  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };
  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };
  const goToSection = (index: number) => {
    setCurrentSection(index);
  };
  return <div className="w-full h-screen overflow-hidden bg-gray-50">
      {/* Navigation dots */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 flex flex-col gap-4 z-40">
        {sections.map((section, index) => <button key={index} onClick={() => goToSection(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === index ? 'bg-blue-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to ${section} section`} />)}
      </div>
      {/* Navigation icons - Adjusted for mobile */}
      <div className="fixed top-0 left-0 right-0 flex justify-center pt-4 z-50">
        <div className="flex items-center gap-8 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
          <button onClick={() => goToSection(0)} className={`p-2 rounded-full transition-all ${currentSection === 0 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`} aria-label="Home section">
            <HomeIcon size={20} />
          </button>
          <button onClick={() => goToSection(1)} className={`p-2 rounded-full transition-all ${currentSection === 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`} aria-label="Projects section">
            <FolderIcon size={20} />
          </button>
          <button onClick={() => goToSection(2)} className={`p-2 rounded-full transition-all ${currentSection === 2 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`} aria-label="Contact section">
            <MailIcon size={20} />
          </button>
        </div>
      </div>
      {/* Previous/Next buttons */}
      <button onClick={prevSection} className={`fixed left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md z-40 transition-opacity ${currentSection === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-gray-100'}`} disabled={currentSection === 0} aria-label="Previous section">
        <ChevronLeftIcon size={24} />
      </button>
      <button onClick={nextSection} className={`fixed right-16 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md z-40 transition-opacity ${currentSection === sections.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-gray-100'}`} disabled={currentSection === sections.length - 1} aria-label="Next section">
        <ChevronRightIcon size={24} />
      </button>
      {/* Sliding sections container */}
      <div className="flex h-full transition-transform duration-700 ease-in-out" style={{
      transform: `translateX(-${currentSection * 100}%)`
    }}>
        <HomeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>;
}