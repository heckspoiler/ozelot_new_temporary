import React, { createContext, useContext, useState, useEffect } from 'react';

const mobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Set initial state here

  useEffect(() => {
    // Check immediately on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run once on mount
    checkMobile();

    // Then add listener for future changes
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <mobileContext.Provider value={isMobile}>{children}</mobileContext.Provider>
  );
};

export const useMobile = () => useContext(mobileContext);
