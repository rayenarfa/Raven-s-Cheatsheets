import { lazy, Suspense } from 'react';
import remarkGfm from 'remark-gfm';

// Lazy load ReactMarkdown only when needed
const ReactMarkdown = lazy(() => import('react-markdown'));

interface LightweightMarkdownProps {
  content: string;
  title: string;
  category: string;
  tags: string[];
  type: 'cheatsheet' | 'keybinds';
}

const LightweightMarkdown = ({ content, title, category, tags, type }: LightweightMarkdownProps) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

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

  // Simple code block without syntax highlighting
  const SimpleCodeBlock = ({ children, language }: { children: string; language: string }) => (
    <div className="relative my-6">
      <div className="absolute top-0 right-0 flex items-center space-x-2 px-3 py-1 text-xs text-gray-400 bg-gray-800 rounded-bl z-10">
        <span>{language}</span>
        <button
          onClick={() => copyToClipboard(children)}
          className="hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
      <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm text-gray-200">
        <code>{children}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
              <p className="text-gray-400 text-lg">
                {type === 'cheatsheet' ? 'Comprehensive guide and reference' : 'Essential keyboard shortcuts'}
              </p>
            </div>
            <div className="text-right">
              <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getCategoryColor(category)}`}>
                {category}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <Suspense fallback={
            <div className="text-gray-300 whitespace-pre-wrap">{content}</div>
          }>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Enhanced code block rendering with keyboard shortcut styling
                code: ({ node, className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || '');
                  const isInline = !match;
                  const codeText = String(children).replace(/\n$/, '');
                  
                  if (!isInline) {
                    return <SimpleCodeBlock children={codeText} language={match[1]} />;
                  }
                  
                  // Special styling for keyboard shortcuts in tables
                  const isKeyboardShortcut = /^[A-Za-z0-9\s\+\-\*\/\(\)\[\]\{\}\.\,\;\:\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\|\:\;\'\"\<\>\?\/\\]+$/.test(codeText);
                  
                  return (
                    <code 
                      className={`px-2 py-1 rounded text-sm font-mono ${
                        isKeyboardShortcut 
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-gray-800 text-gray-200'
                      }`} 
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                // Custom styling for headings
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-white mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-white mb-3 mt-6">
                    {children}
                  </h3>
                ),
                // Custom styling for paragraphs
                p: ({ children }) => (
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                // Custom styling for lists
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-300">
                    {children}
                  </li>
                ),
                // Custom styling for blockquotes
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-4">
                    {children}
                  </blockquote>
                ),
                // Custom styling for links
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-blue-400 hover:text-blue-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                // Enhanced table styling for keybinds with better structure
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8 border-gray-600 rounded-lg shadow-lg">
                    <table className="min-w-full divide-y divide-gray-600">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-gray-800">
                    {children}
                  </thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="bg-gray-900 divide-y divide-gray-700">
                    {children}
                  </tbody>
                ),
                tr: ({ children }) => (
                  <tr className="hover:bg-gray-800/50 transition-colors duration-150">
                    {children}
                  </tr>
                ),
                th: ({ children }) => (
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider border-b border-gray-600 bg-gray-800/80">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-6 py-4 text-sm text-gray-300 border-b border-gray-700">
                    {children}
                  </td>
                ),

              }}
            >
              {content}
            </ReactMarkdown>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default LightweightMarkdown; 