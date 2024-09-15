import React, { useRef, useEffect } from 'react';

const LottieButton = ({ src }) => {
  const lottiePlayerRef = useRef(null);

  // Function to handle the button click event and play the animation
  const handleLottieAnimation = () => {
    if (lottiePlayerRef.current) {
      lottiePlayerRef.current.stop(); // Stop the animation to reset
      lottiePlayerRef.current.play(); // Play the animation
    }
  };

  useEffect(() => {
    // Add 'complete' event listener to reset after the animation completes
    if (lottiePlayerRef.current) {
      lottiePlayerRef.current.addEventListener('complete', () => {
        if (lottiePlayerRef.current) {
          lottiePlayerRef.current.stop(); // Reset to the first frame after the animation completes
        }
      });
    }
    
    // Cleanup the event listener on component unmount
    return () => {
      if (lottiePlayerRef.current) {
        lottiePlayerRef.current.removeEventListener('complete', () => {
          lottiePlayerRef.current.stop();
        });
      }
    };
  }, []);

  return (
    <div className='lottie-button' onClick={handleLottieAnimation}>
      <div className="">
        <dotlottie-player
          ref={lottiePlayerRef} // Attach ref to the Lottie player
          src={src}
          background="transparent"
          speed="1"
          loop={false}
        ></dotlottie-player>
      </div>
    </div>
  );
};

export default LottieButton;
