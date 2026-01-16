import React from 'react';
import FeatureSection from './components/FeatureSection';
import FireBackground from './components/FireBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
      
      {/* Fire Effect Layer - Background */}
      <FireBackground />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 relative z-10">
        <FeatureSection />
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 text-sm relative z-10">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;