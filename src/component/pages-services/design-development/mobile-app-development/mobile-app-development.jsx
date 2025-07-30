import React from 'react';
import './mobile-app-dev.module.css';
import MobileAppDevContent from './mobile-app-dev-content';
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';

function MobileAppDevelopment() {
  return (
    <div className="mobile-app-dev-section">
      <MobileAppDevContent />
      <AgileProcess />
      <StillNotSure />
    </div>
  );
}

export default MobileAppDevelopment;
