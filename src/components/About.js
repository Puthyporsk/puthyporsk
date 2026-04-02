import React from 'react';
import resume from '../images/resume.pdf';

function About() {
  return (
    <section className="s2" id="about">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>
            <p>I graduated highschool, flew ~7639 miles away from home, started college at 16.</p>
            <p>Obtained my Associates at 18.</p>
            <p>Obtained my Bachelors at 21.</p>
            <p>Worked as a Software Engineer at HiLine Eng., in Richland, WA.</p>
            <p>I will be obtaining my Masters at 26.</p>

            <div style={{ display: 'flex' }}>
              <p>
                Want to see my professional side? Here:&nbsp;
                <a target="_blank" rel="noopener noreferrer" href={resume} className="resume">
                  Résumé
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4>Social Links</h4>
            <div className="social-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/puthyporsengkeo/"
                className="fa-brands fa-linkedin"
                aria-label="LinkedIn"
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Puthyporsk"
                className="fa-brands fa-github"
                aria-label="GitHub"
              ></a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:sengkeoputhypor@gmail.com"
                className="fa-solid fa-at"
                aria-label="Email"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
