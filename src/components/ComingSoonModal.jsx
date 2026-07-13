import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';
import './ComingSoonModal.css';

const ComingSoonModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Expose show function to window object so other components can trigger it
    window.showComingSoon = () => {
      setIsOpen(true);
    };

    // Also support custom event trigger
    const handleTrigger = () => {
      setIsOpen(true);
    };
    window.addEventListener('triggerComingSoon', handleTrigger);

    return () => {
      delete window.showComingSoon;
      window.removeEventListener('triggerComingSoon', handleTrigger);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="coming-soon-overlay" onClick={() => setIsOpen(false)}>
      <div 
        className="coming-soon-card glass-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="coming-soon-close" 
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div className="coming-soon-inner">
          <div className="coming-soon-monogram">
            <div className="monogram-glow"></div>
            <img src="/logo/BAQAA3.png" alt="BAQAA" className="coming-soon-logo" />
          </div>

          <div className="coming-soon-ornament">
            <Sparkles size={16} className="sparkle-gold animate-pulse" />
          </div>

          <h2 className="coming-soon-title">Coming Soon</h2>
          
          <div className="coming-soon-divider"></div>
          
          <p className="coming-soon-desc font-serif">
            We are currently weaving this digital experience. <br />
            A new chapter of timeless luxury and soulful design will be unveiled soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
