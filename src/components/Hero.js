import React from 'react';
import pfp from '../images/pfp.png';

function Hero() {
  return (
    <section className="s1" id="hero">
      <div className="main-container">
        <div className="greeting-wrapper">
          <h1>Puthypor Sengkeo</h1>
          <h1>សឹងកែវ ពុទ្ធិពរ</h1>
          <p className="professional-title">Software Engineer | ML Researcher</p>
        </div>

        <div className="intro-wrapper">
          <div className="left-column">
            <img id="profile_pic" src={pfp} alt="Puthypor Sengkeo" />
          </div>

          <div className="right-column" style={{ textAlign: 'center' }}>
            <div id="preview">
              <div id="corner-tl" className="corner"></div>
              <div id="corner-tr" className="corner"></div>
              <h3>Me</h3>
              <p>Tenacity trumps everything.</p>
              <p>Cascadia Community College, Bothell 18'</p>
              <p>Washington State University, Pullman 21'</p>
              <p>Simon Fraser University, Burnaby 26'</p>
              <div id="corner-br" className="corner"></div>
              <div id="corner-bl" className="corner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
