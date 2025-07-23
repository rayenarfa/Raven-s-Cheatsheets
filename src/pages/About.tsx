import { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Dev Tools
          </h1>
          <p className="text-xl text-gray-400">
            Your ultimate collection of developer resources
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Dev Tools is designed to be the go-to resource for developers and creators who need quick access to essential information. 
            Whether you're looking for programming language syntax, framework documentation, or keyboard shortcuts for your favorite tools, 
            we've got you covered.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our goal is to boost your productivity by providing well-organized, searchable cheatsheets and keyboard shortcuts 
            that you can reference quickly without interrupting your workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">📚 Cheatsheets</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Programming languages (JavaScript, React, HTML, CSS)</li>
              <li>• Backend frameworks (Node.js, Express, Next.js)</li>
              <li>• Database technologies (MySQL, MongoDB, Firebase)</li>
              <li>• Development tools (Git, NPM)</li>
              <li>• And much more...</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">⌨️ Keyboard Shortcuts</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Code editors (VS Code)</li>
              <li>• Design tools (Figma, Photoshop, Illustrator)</li>
              <li>• Video editing (Premiere Pro)</li>
              <li>• Game development (Unity)</li>
              <li>• Productivity boosters</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">🔍 Smart Search</h4>
              <p className="text-gray-300 text-sm">
                Find exactly what you need with our powerful search functionality that searches through titles, descriptions, and tags.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">🏷️ Category Filtering</h4>
              <p className="text-gray-300 text-sm">
                Filter resources by category to quickly find relevant cheatsheets and shortcuts for your current task.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">📱 Responsive Design</h4>
              <p className="text-gray-300 text-sm">
                Access your resources on any device with our mobile-friendly, responsive design that works perfectly on desktop, tablet, and mobile.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-2">⚡ Fast Loading</h4>
              <p className="text-gray-300 text-sm">
                Built with modern web technologies for lightning-fast loading times and smooth user experience.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-400 font-bold">R</span>
              </div>
              <p className="text-gray-300 text-sm">React 19</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-400 font-bold">T</span>
              </div>
              <p className="text-gray-300 text-sm">TypeScript</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-green-400 font-bold">V</span>
              </div>
              <p className="text-gray-300 text-sm">Vite</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-orange-400 font-bold">T</span>
              </div>
              <p className="text-gray-300 text-sm">Tailwind CSS</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gray-800/50 border border-gray-700 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Contributing</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Dev Tools is an open-source project, and we welcome contributions from the community! 
            Whether you want to add new cheatsheets, improve existing content, or enhance the website's functionality, 
            your contributions are valuable.
          </p>
          <p className="text-gray-300 leading-relaxed">
            To contribute, simply fork the repository, make your changes, and submit a pull request. 
            We're always looking to expand our collection with more useful resources for developers and creators.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 