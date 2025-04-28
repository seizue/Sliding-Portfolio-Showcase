import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! (This is a demo)');
  };
  return <section className="w-screen h-screen flex-shrink-0 bg-gradient-to-br from-purple-50 to-pink-100 overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MailIcon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800">hello@johndoe.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <PhoneIcon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPinIcon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-800">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <GithubIcon size={20} className="text-gray-700" />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <LinkedinIcon size={20} className="text-gray-700" />
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <TwitterIcon size={20} className="text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-blue-100 p-6 rounded-lg">
              <p className="text-blue-800 font-medium">
                Looking for a developer to bring your ideas to life? Let's talk
                about your project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}