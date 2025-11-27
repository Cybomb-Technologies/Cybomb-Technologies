import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './agile-process1.module.css';

const AgileProcess1 = ({ 
  title = "Our Agile Development Process",
  TabsData,
  defaultActiveTab = "planning",
  accentColor = "#1c85cb",
  cardView = true
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const tabsContainerRef = useRef(null);
  const tabItemsRef = useRef([]);

  // Find the initial index of the default active tab
  useEffect(() => {
    const initialIndex = TabsData.findIndex(tab => tab.id === defaultActiveTab);
    setCurrentIndex(initialIndex >= 0 ? initialIndex : 0);
  }, [defaultActiveTab, TabsData]);

  // Check if we need to show arrows (on mobile/tablet)
  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth <= 768) {
        setShowArrows(true);
      } else {
        setShowArrows(false);
      }
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % TabsData.length;
    setCurrentIndex(nextIndex);
    setActiveTab(TabsData[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + TabsData.length) % TabsData.length;
    setCurrentIndex(prevIndex);
    setActiveTab(TabsData[prevIndex].id);
  };

  const handleTabClick = (tabId, index) => {
    setActiveTab(tabId);
    setCurrentIndex(index);
  };

  return (
    <section className={styles.agileProcessSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        
        {/* Tabs Navigation with Arrows */}
        <div className={styles.tabsNavigation}>
          {showArrows && (
            <button 
              className={styles.arrowButton} 
              onClick={handlePrev}
              aria-label="Previous tab"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          <div className={styles.tabsContainer} ref={tabsContainerRef}>
            <ul className={`nav nav-tabs ${styles.navTabs}`} role="tablist">
              {TabsData.map((tab, index) => (
                <li 
                  key={index} 
                  className={`nav-item ${styles.navItem} ${showArrows && index !== currentIndex ? styles.hiddenTab : ''}`} 
                  role="presentation"
                  ref={el => tabItemsRef.current[index] = el}
                >
                  <button
                    className={`nav-link ${activeTab === tab.id ? styles.navLinkActive : ''} ${styles.navLink}`}
                    onClick={() => handleTabClick(tab.id, index)}
                    style={{
                      borderBottom: activeTab === tab.id ? `3px solid ${accentColor}` : 'none'
                    }}
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {showArrows && (
            <button 
              className={styles.arrowButton} 
              onClick={handleNext}
              aria-label="Next tab"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          <div className="tab-pane fade show active">
            <h3 style={{ color: accentColor }}>{TabsData.find(tab => tab.id === activeTab).title}</h3>
            <p className="fw-bold">{TabsData.find(tab => tab.id === activeTab).description}</p>
            
            {/* Cards for tab content if cardView is true and cards exist */}
            {cardView && TabsData.find(tab => tab.id === activeTab).cards && TabsData.find(tab => tab.id === activeTab).cards.length > 0 && (
              <div className="row mt-4">
                {TabsData.find(tab => tab.id === activeTab).cards.map((card, index) => (
                  <div key={index} className="col-md-6 col-lg-3 mb-4">
                    <div className={`card h-100 ${styles.card}`}>
                      <div className="card-body">
                        <h5 className={`card-title ${styles.cardTitle}`}>{card.title}</h5>
                        <p className={`card-text ${styles.cardText}`}>{card.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Props definition for the component
AgileProcess1.propTypes = {
  title: PropTypes.string,
  TabsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired,
  defaultActiveTab: PropTypes.string,
  accentColor: PropTypes.string,
  cardView: PropTypes.bool
};

export default AgileProcess1;