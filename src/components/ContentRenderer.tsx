import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// Lazy load syntax highlighter to reduce initial bundle
const SyntaxHighlighter = lazy(() => 
  import('react-syntax-highlighter').then(module => ({
    default: module.Prism
  }))
);

interface ContentRendererProps {
  content: string;
  title: string;
  category: string;
  tags: string[];
  type: 'cheatsheet' | 'keybinds';
}

const ContentRenderer = ({ content, title, category, tags, type }: ContentRendererProps) => {
  const [copiedBlock, setCopiedBlock] = useState<string | null>(null);

  const copyToClipboard = async (text: string, blockId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBlock(blockId);
      setTimeout(() => setCopiedBlock(null), 2000);
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

  // Simple code block fallback without syntax highlighting
  const SimpleCodeBlock = ({ children, language }: { children: string; language: string }) => (
    <div className="relative my-6">
      <div className="absolute top-0 right-0 flex items-center space-x-2 px-3 py-1 text-xs text-gray-400 bg-gray-800 rounded-bl z-10">
        <span>{language}</span>
        <button
          onClick={() => copyToClipboard(children, `code-${Math.random()}`)}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
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
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <ReactMarkdown
            components={{
              // Optimized code block rendering
              code: ({ node, className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || '');
                const isInline = !match;
                const codeText = String(children).replace(/\n$/, '');
                const blockId = `code-${Math.random().toString(36).substr(2, 9)}`;
                
                return !isInline ? (
                  <Suspense fallback={<SimpleCodeBlock children={codeText} language={match[1]} />}>
                    <div className="relative my-6">
                      <div className="absolute top-0 right-0 flex items-center space-x-2 px-3 py-1 text-xs text-gray-400 bg-gray-800 rounded-bl z-10">
                        <span>{match[1]}</span>
                        <button
                          onClick={() => copyToClipboard(codeText, blockId)}
                          className="hover:text-white transition-colors"
                          title="Copy to clipboard"
                        >
                          {copiedBlock === blockId ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                      <Suspense fallback={<SimpleCodeBlock children={codeText} language={match[1]} />}>
                        <SyntaxHighlighter
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg !mt-0"
                          customStyle={{
                            margin: 0,
                            borderRadius: '0.5rem',
                            fontSize: '0.875rem',
                            lineHeight: '1.5',
                            background: '#1e1e1e',
                            color: '#d4d4d4',
                          }}
                        >
                          {codeText}
                        </SyntaxHighlighter>
                      </Suspense>
                    </div>
                  </Suspense>
                ) : (
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
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
              // Enhanced table styling for keybinds
              table: ({ children }) => (
                <div className="overflow-x-auto my-6 border border-gray-600 rounded-lg">
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
                <tr className="hover:bg-gray-800 transition-colors">
                  {children}
                </tr>
              ),
              th: ({ children }) => (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-b border-gray-700">
                  {children}
                </td>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentRenderer; 