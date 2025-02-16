import React, { useState } from 'react';
import Balloon from './Balloon';
import ScoreBoard from './ScoreBoard';

function Game() {
  const [score, setScore] = useState(0);

  return (
    <div className="game">
      <ScoreBoard score={score} />
      <div className="balloon-container">
        <Balloon onPop={() => setScore(score + 1)} />
      </div>
    </div>
  );
}

export default Game;
