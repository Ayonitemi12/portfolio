import { useState } from 'react';

export function DownloadCV() {
   const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a link to the PDF file
    const link = document.createElement('a');
    link.href = '/cv/Ayo.pdf'; // Path to your CV in public folder
    link.download = 'Ayo.pdf'; // Download with this filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset after a moment
    setTimeout(() => setIsDownloading(false), 1500);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="px-6 py-3 bg-linear-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
    >
      {isDownloading ? (
        <>
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Downloading...
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CV
        </>
      )}
    </button>
  );
}

export default DownloadCV
