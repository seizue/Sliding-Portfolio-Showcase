import React from 'react';
import { DownloadIcon } from 'lucide-react';
export function HomeSection() {
  return <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Frontend Developer & UI Designer
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">3+ Years</h3>
            <p className="text-gray-600">Professional Experience</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">15+ Projects</h3>
            <p className="text-gray-600">Successfully Delivered</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">React Expert</h3>
            <p className="text-gray-600">Modern Web Development</p>
          </div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I craft beautiful, responsive, and user-friendly interfaces with
          modern web technologies. Slide to see my work or get in touch!
        </p>
        <a href="/John-Doe-Resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl mx-auto font-medium">
          <DownloadIcon size={20} />
          Download Resume
        </a>
      </div>
    </section>;
}