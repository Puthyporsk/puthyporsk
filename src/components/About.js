import React from 'react';
import resume from '../images/resume.pdf';

function About() {
  return (
    <section className="s2" id="about">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h4>More about me</h4>
            <p>I'm a software engineer and grad student at SFU studying visual computing. Before going back to school, I spent about two and a half years at HiLine Engineering building full stack apps and shipping products from scratch. I got to work on a bit of everything, from frontend to backend to deployment.</p>
            <p>Now my focus has shifted toward machine learning and computer vision. I've been working on projects like benchmarking image generation models, improving satellite image segmentation, and using reinforcement learning to clean up messy audio. I like the kind of work that sits somewhere between research and actually building things.</p>
            <p>I also teach on the side. I'm a TA for Discrete Math at SFU and an instructor at a local learning academy. Turns out, explaining things to other people is one of the best ways to actually understand them yourself.</p>
            <p>Always happy to chat if something here caught your eye.</p>

            <div style={{ display: 'flex' }}>
              <p>
                Here is my Résumé:&nbsp;
                <a target="_blank" rel="noopener noreferrer" href={resume} className="resume">
                  Puthypor-Sengkeo-Resume.pdf
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
