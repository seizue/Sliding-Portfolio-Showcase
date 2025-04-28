import React, { useState } from 'react';
import { ImageModal } from './ImageModal';
import { GithubIcon } from 'lucide-react';
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [{
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce solution with cart functionality and payment integration.',
    images: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
    tags: ['React', 'Node.js', 'Stripe'],
    github: 'https://github.com/johndoe/ecommerce-platform'
  }, {
    id: 2,
    title: 'Portfolio Website',
    description: 'A sliding portfolio website showcasing projects and contact information.',
    images: ['https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
    tags: ['React', 'Tailwind CSS'],
    github: 'https://github.com/johndoe/portfolio'
  }, {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and deadlines.',
    images: ['https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
    tags: ['React', 'Redux', 'Firebase'],
    github: 'https://github.com/johndoe/task-manager'
  }, {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with forecasts and location search.',
    images: ['https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'],
    tags: ['React', 'Weather API'],
    github: 'https://github.com/johndoe/weather-app'
  }];
  const handleImageClick = (projectId: number, imageIndex: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(imageIndex);
  };
  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };
  const handlePreviousImage = () => {
    if (selectedProject !== null) {
      const project = projects.find(p => p.id === selectedProject);
      if (project && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
  };
  const handleNextImage = () => {
    if (selectedProject !== null) {
      const project = projects.find(p => p.id === selectedProject);
      if (project && currentImageIndex < project.images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };
  return <section className="w-screen h-screen flex-shrink-0 bg-gradient-to-br from-indigo-50 to-purple-100 overflow-y-auto">
      <div className="max-w-[90rem] mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(project => <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden group">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover cursor-pointer transition-transform group-hover:scale-105" onClick={() => handleImageClick(project.id, 0)} />
                {project.images.length > 1 && <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-sm">
                    +{project.images.length - 1} more
                  </div>}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-gray-900 transition-colors" aria-label={`View ${project.title} on GitHub`}>
                    <GithubIcon size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {selectedProject !== null && <ImageModal images={projects.find(p => p.id === selectedProject)?.images || []} currentIndex={currentImageIndex} onClose={handleCloseModal} onPrevious={handlePreviousImage} onNext={handleNextImage} projectTitle={projects.find(p => p.id === selectedProject)?.title || ''} />}
    </section>;
}