import React, { useState } from 'react';

function Balloon({ onPop }) {
  const [isPopped, setIsPopped] = useState(false);

  const handleClick = () => {
    if (!isPopped) {
      setIsPopped(true);
      onPop();
      setTimeout(() => setIsPopped(false), 1000);
    }
  };

  return (
    <div 
      className={`balloon ${isPopped ? 'popped' : ''}`}
      onClick={handleClick}
    >
      🎈
    </div>
  );
}

export default Balloon;
