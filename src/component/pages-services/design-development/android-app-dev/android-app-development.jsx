import React from 'react';
import './android-app-dev.css';
import AndoridAppDevContent from './android-app-dev-content';
import AndroidAppDevBanner from './android-app-dev-banner';

function AndoridAppDevelopment() {
  return (
    <div className="android-app-dev-section">
      <AndroidAppDevBanner/>
      <AndoridAppDevContent />
    </div>
  );
}

export default AndoridAppDevelopment;
