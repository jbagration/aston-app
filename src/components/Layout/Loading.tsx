import { useState, useEffect } from 'react';

const Loading = () => {
  const [loadingText, setLoadingText] = useState('Loading.');

  useEffect(() => {
    const updateLoadingText = () => {
      setLoadingText((prevText) => {
        if (prevText === 'Loading...') {
          return 'Loading.';
        } else {
          return prevText + '.';
        }
      });

      setTimeout(updateLoadingText, 500);
    };

    const timeoutId = setTimeout(updateLoadingText, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return <div className='info'>{loadingText}</div>;
};

export default Loading;
