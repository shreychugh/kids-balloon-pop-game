import React, { useState } from 'react';
import Balloon from './Balloon';
import ScoreBoard from './ScoreBoard';

function Game() {
  const [score, setScore] = useState(0);
  return (
    <div className="game">
      <ScoreBoard score={score} />
      <Balloon onPop={() => setScore(score + 1)} />
    </div>
  );
}

export default Game;
