import React from 'react';
import './game-dev.module.css';
import GameDevContent from './game-dev-content';
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';

function GameDevelopment() {
  return (
    <div className="mobile-app-dev-section">
      <GameDevContent/>
      <AgileProcess/>
      <StillNotSure/>
    </div>
  );
}

export default GameDevelopment;
