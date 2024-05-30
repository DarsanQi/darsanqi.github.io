import React, { useState, useEffect } from 'react';

const HackingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
          if (i < currentIndex) {
            newText += text[i];
          } else {
            newText += characters[Math.floor(Math.random() * characters.length)];
          }
        }
        return newText;
      });

      if (currentIndex >= text.length) {
        clearInterval(interval);
        setDisplayedText(text);
      } else {
        currentIndex++;
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '2em', whiteSpace: 'pre' }}>
      {displayedText}
    </div>
  );
};

export default HackingAnimation;
