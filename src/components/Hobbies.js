import React from 'react';
import gaming from '../images/gaming.png';
import frisbee from '../images/frisbee.png';
import webdev from '../images/logo192.png';

const hobbies = [
  {
    image: gaming,
    name: 'Gaming',
    description:
      'I enjoy gaming during my down time. It helps me relax and connect me with my friends.',
  },
  {
    image: frisbee,
    name: 'Frisbee',
    description:
      "I used to play Frisbee in highschool. Not a professional, but I can surely do a perfect curve hammer.",
  },
  {
    image: webdev,
    name: 'Web Development',
    description:
      'I like to play around with web design during my productive down time. Currently, I aspire to be the best Software Engineer.',
  },
];

function Hobbies() {
  return (
    <section className="s2" id="hobbies">
      <div className="main-container">
        <h3 style={{ textAlign: 'center' }}>Hobbies</h3>
        <div className="hobby-wrapper">
          {hobbies.map((hobby, i) => (
            <div className="hobby-card" key={i}>
              <img
                className="hobby-picture"
                src={hobby.image}
                alt={hobby.name}
                loading="lazy"
              />
              <div className="hobby-text">
                <h4>{hobby.name}</h4>
                <p>{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
