import { useState } from 'react';
import { soundManager } from '../../../utils/soundManager';

export const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(soundManager.isSoundMuted());

  const handleToggle = () => {
    soundManager.toggleMute();
    setIsMuted(soundManager.isSoundMuted());
  };

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={handleToggle}
        className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors
          focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </div>
  );
}; 