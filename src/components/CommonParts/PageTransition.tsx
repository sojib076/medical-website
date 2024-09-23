'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Use useRouter and usePathname

import { ReactNode } from 'react';

const PageTransition = ({ children }: { children: ReactNode }) => {



    
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionStage, setTransitionStage] = useState('page-enter');
  
  const pathname = usePathname(); // Hook to get the current route path

  useEffect(() => {
    // When the pathname changes, start the leave animation
    setTransitionStage('page-leave');
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      // After leaving, set enter animation
      setTransitionStage('page-enter');
      setIsTransitioning(false);
    }, 100); // Match this duration with the animation length

    return () => clearTimeout(timeout); // Cleanup timeout on unmount or route change
  }, [pathname]); // Listen to pathname changes

  return (
    <div className={`transition-wrapper ${isTransitioning ? `animate-${transitionStage}` : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
