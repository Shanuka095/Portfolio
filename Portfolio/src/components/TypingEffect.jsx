import React, { useState, useEffect } from 'react';

const TypingEffect = ({ phrases, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500, className = '' }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentFullPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentFullPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex + 1 === currentFullPhrase.length) {
          setIsDeleting(true);
          timeout = setTimeout(() => {}, pauseTime); // Pause at end of typing
        } else {
          timeout = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        // Deleting
        setCurrentText(currentFullPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
          timeout = setTimeout(() => {}, typingSpeed); // Short pause before typing next phrase
        } else {
          timeout = setTimeout(handleTyping, deletingSpeed);
        }
      }
    };

    timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [charIndex, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);


  return (
    <span className={`typing-container ${className}`} style={{ '--steps': currentText.length }}>
      <span className="typing-animation">{currentText}</span>
    </span>
  );
};

export default TypingEffect;