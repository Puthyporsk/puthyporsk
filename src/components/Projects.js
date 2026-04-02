import React from 'react';
import sfu from '../images/sfu.png';
import cla from '../images/cla.png';
import sar from '../images/sarsam.png';
import architect from '../images/architect.png';
import ss from '../images/ss.jpg';
import ai from '../images/ai.png';

const projects = [
  {
    image: sfu,
    title: 'ZCOR: Full-Stack Workforce Management SaaS Platform',
    intro: 'Capstone project at SFU. Built a full-stack SaaS workforce platform with React, Node.js, Express, and MongoDB — featuring time tracking, scheduling, leave management, payroll, and inventory.',
    link: 'https://www.zcor.org',
    linkText: 'Visit Website',
  },
  {
    image: sfu,
    title: 'Text-to-Image Generation Benchmark',
    intro: 'Designed a benchmark comparing Imagen 4 and GPT Image 1 across 40 structured prompts. Built a multi-signal evaluation pipeline with a quantized VLM judge, OCR, fuzzy matching, and a blind human preference UI.',
    link: 'https://text-to-image-generation-benchmark.streamlit.app',
    linkText: 'View Live Demo',
  },
  {
    image: sfu,
    title: 'Leveraging Reinforcement Learning in Multi-Channel Speech Enhancement',
    intro: 'Project for CMPT 729. Using Reinforcement Learning to enhance speech audios.',
    link: null,
  },
  {
    image: cla,
    title: 'Cherrywood Book Keeping Record',
    intro: 'Personal project for Cherrywood Learning Academy. Development of a website to track and manage books and items rentals.',
    link: 'https://github.com/Puthyporsk/book-rental-record-test',
  },
  {
    image: sar,
    title: 'SARSAM: SAR Water Segmentation, Improving Segmentation Accuracy on Noisy SAR Satellite Images',
    intro: 'Project for CMPT 743. Fine-tuned SAM2 model to improve segmentation accuracy on noisy SAR satellite images.',
    link: 'https://github.com/kyon317/SARSAM',
  },
  {
    image: architect,
    title: 'ArchiTech: Architectural Style Recognition and Feature Detection',
    intro: 'Project for CMPT 742. Implemented CNN-based object detection model to do features detection on architectural styles.',
    link: 'https://github.com/JillFerence/ArchiTech',
  },
  {
    image: ss,
    title: 'Speedgolf App',
    intro: 'Project from WSU CptS 489 taught by Professor Chris Hundhausen.',
    link: 'https://github.com/Puthyporsk/SpeedGolfWebsite',
  },
  {
    image: ai,
    title: 'AIEngine-SpokaneCity',
    intro: 'Project from WSU CptS 421 [CAPS] taught by Professor Ananth Jillepalli. Client Laz Martinez.',
    link: 'https://github.com/Puthyporsk/aiengine-spokanecity',
  },
];

function Projects() {
  return (
    <section className="s1" id="projects">
      <div className="main-container">
        <h3 style={{ textAlign: 'center' }}>Projects</h3>

        <div className="post-wrapper">
          {projects.map((project, i) => (
            <div className="post" key={i}>
              <img
                className="thumbnail"
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              <div className="post-preview">
                <h6 className="post-title">{project.title}</h6>
                <p className="post-intro">{project.intro}</p>
                {project.link && (
                  <a target="_blank" rel="noopener noreferrer" href={project.link}>
                    {project.linkText || 'View on GitHub'}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
