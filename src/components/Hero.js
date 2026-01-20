import React from 'react';

const Hero = ({ onlineUsers }) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Bun venit în comunitatea
              <span className="highlight"> ZEMI69.RO</span>
            </h1>
            <p className="hero-subtitle">
              Cea mai tare comunitate de CS:GO din România! 
              Joacă alături de prieteni, participă la turnee și distrează-te!
            </p>
            
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">{onlineUsers}</div>
                <div className="stat-label">Membri online</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Total membri</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Evenimente</div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn btn-primary">Alătură-te acum!</button>
              <button className="btn btn-secondary">Server Info</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;