import React from 'react';

const About = () => {
  return (
    <section id="despre" className="about">
      <div className="container">
        <h2 className="section-title">Despre ZEMI69.RO</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Cine suntem?</h3>
            <p>
              ZEMI69.RO este o comunitate pasionată de Counter-Strike: Global Offensive, 
              formată din jucători români care împart dragostea pentru acest joc fantastic.
              Am fost înființați cu scopul de a crea un spațiu prietenos unde oricine poate 
              să se distreze și să-și îmbunătățească abilitățile.
            </p>
            
            <h3>Misiunea noastră</h3>
            <p>
              Creăm o experiență de joc memorabilă pentru toți membrii noștri prin:
            </p>
            <ul>
              <li>Servere dedicate cu performance excelent</li>
              <li>Evenimente și turnee regulate</li>
              <li>Comunitate prietenoasă și respectuoasă</li>
              <li>Suport pentru jucători noi</li>
              <li>Atmosferă competitivă dar fair-play</li>
            </ul>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>Servere Premium</h4>
              <p>Servere dedicate cu 128 tick rate și ping redus</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>Turnee</h4>
              <p>Competiții săptămânale cu premii atractive</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>Comunitate</h4>
              <p>Peste 500 de membri activi din toată România</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h4>Gaming</h4>
              <p>Mix de jocuri casual și competitive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;