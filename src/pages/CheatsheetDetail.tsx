import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCheatsheetBySlug } from '../data/cheatsheets';
import { loadMarkdownContent } from '../utils/markdownLoader';
import LightweightMarkdown from '../components/LightweightMarkdown';

const CheatsheetDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cheatsheet = slug ? getCheatsheetBySlug(slug) : null;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadContent = async () => {
      if (!cheatsheet) {
        setError('Cheatsheet not found');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const markdownContent = await loadMarkdownContent(cheatsheet.file);
        setContent(markdownContent);
        setError(null);
      } catch (err) {
        console.error('Error loading cheatsheet:', err);
        setError(err instanceof Error ? err.message : 'Failed to load cheatsheet content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [cheatsheet]);

  if (!cheatsheet) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Cheatsheet Not Found</h1>
          <p className="text-gray-400 mb-6">The cheatsheet you're looking for doesn't exist.</p>
          <Link
            to="/cheatsheets"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Cheatsheets
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading {cheatsheet.title}...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <Link
            to={cheatsheet.type === 'cheatsheet' ? '/cheatsheets' : '/keybinds'}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to {cheatsheet.type === 'cheatsheet' ? 'Cheatsheets' : 'Keybinds'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to={cheatsheet.type === 'cheatsheet' ? '/cheatsheets' : '/keybinds'}
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {cheatsheet.type === 'cheatsheet' ? 'Cheatsheets' : 'Keybinds'}
        </Link>
      </div>

      {/* Content */}
      <LightweightMarkdown
        content={content}
        title={cheatsheet.title}
        category={cheatsheet.category}
        tags={cheatsheet.tags}
        type={cheatsheet.type}
      />
    </div>
  );
};

export default CheatsheetDetail; 