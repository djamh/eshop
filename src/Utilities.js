import { useState, useEffect } from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768);
      }
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Call handler right away so state gets updated with initial window size
      handleResize();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures effect is only run on mount and unmount
  
    return isMobile;
  }
  export default useIsMobile;
