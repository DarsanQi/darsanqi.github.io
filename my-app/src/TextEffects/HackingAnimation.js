import React, { useState, useEffect } from 'react';

const HackingAnimation = ({ text, className }) => {
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
        setTimeout(() => {
          setDisplayedText(text);
        }, 2000); // Adjust the delay duration (2000ms = 2 seconds) as needed
      } else {
        currentIndex++;
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className={className}>
      {displayedText}
    </div>
  );
};

export default HackingAnimation;
