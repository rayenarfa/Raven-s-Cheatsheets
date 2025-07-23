export const loadMarkdownContent = async (filePath: string): Promise<string> => {
  try {
    const response = await fetch(`/${filePath}`);
    
    if (!response.ok) {
      throw new Error(`Failed to load content: ${response.statusText}`);
    }
    
    return await response.text();
  } catch (error) {
    console.error('Error loading markdown content:', error);
    throw new Error('Failed to load content. Please try again later.');
  }
}; 