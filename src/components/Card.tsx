import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Cheatsheet } from '../data/cheatsheets';

interface CardProps {
  cheatsheet: Cheatsheet;
}

const Card = ({ cheatsheet }: CardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Programming':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Backend':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Database':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Design':
        return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      case 'Tools':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'cheatsheet':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'keybinds':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/cheatsheets/${cheatsheet.slug}`}>
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full hover:border-gray-600 transition-all duration-200 group">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${
              cheatsheet.type === 'cheatsheet' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                : 'bg-gradient-to-r from-purple-500 to-pink-600'
            }`}>
              <span className="text-white font-bold text-lg">
                {cheatsheet.title.charAt(0)}
              </span>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(cheatsheet.type)}`}>
                {cheatsheet.type === 'cheatsheet' ? '📚' : '⌨️'} {cheatsheet.type}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(cheatsheet.category)}`}>
                {cheatsheet.category}
              </span>
            </div>
          </div>

          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
            {cheatsheet.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {cheatsheet.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {cheatsheet.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
            {cheatsheet.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                +{cheatsheet.tags.length - 3}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View {cheatsheet.type === 'cheatsheet' ? 'Cheatsheet' : 'Keybinds'}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card; 