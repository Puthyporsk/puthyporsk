import React from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import './App.css';

class App extends React.Component{

  constructor() {
    super();

    this.state={
      name: '',
      subject: '',
      email: '',
      message: ''
    };

  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    axios({
      method: "POST", 
      url:"http://localhost:3000/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', subject: '', email: '', message: ''})
  }

  render (){
    return (
      <React.Fragment>
        <section className="s1">
          <div className="main-container">
            <div className="greeting-wrapper">
              <h1>Puthypor Sengkeo</h1>
              <h1>សឹងកែវ ពុទ្ធិពរ</h1>
            </div>


            <div className="intro-wrapper">
              <div className="left-column">
                <img id="profile_pic" src="pfp.jpg" />
              </div>
      
              <div className="right-column" style={{textAlign: 'center'}}>
                  <div id="preview">
                    <div id="corner-tl" className="corner"></div>
                    <div id="corner-tr" className="corner"></div>
                    <h3>Me</h3>
                    <p>Tenacity trumps everything.</p>
                    <p>Cascadia Community College, Bothell 18'</p>
                    <p>Washington State University, Pullman 21'</p>
                    <div id="corner-br" className="corner"></div>
                    <div id="corner-bl" className="corner"></div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className="s2">
          <div className="main-container">

            <div className="about-wrapper">
              <div className="about-me">
                <h4>More about me</h4>
                <p>I graduated highschool, flew ~7639 miles away from home, started college at 16.</p>
                <p>Graduated from college at 18.</p>
                <p>Graduated from university at 21.</p>
                <p>Currently a Software Engineer at HiLine Eng., in Richland, WA.</p>
                <p>My parents and sister are in Cambodia, and I can't wait to be reunited with them in the near future.</p>

                <div style={{display: 'flex'}}>
                <p>Want to see my professional side? Here:&nbsp; 
                <a target="_blank" href="Puthypor.Sengkeo.Resume.pdf" className="resume">Résumé</a></p>
                </div>
              </div>

              
              <div>
                <h1>Social Links</h1>
                <a href="https://www.linkedin.com/in/puthyporsengkeo/" className="fa fa-linkedin"></a>
                <a href="https://github.com/Puthyporsk" className="fa fa-github"></a>
                <a href="mailto:sengkeoputhypor@gmail.com" className="fa fa-at"></a>
              </div>
            </div>

          </div>
        </section>

        <section className="s1">
          <div className="main-container">
            <h3 style={{textAlign: 'center'}}>Projects</h3>

            <div className="post-wrapper">
              <div>
                <div className="post">
                  <img className="thumbnail" src="ss.jpg" />
                  <div className="post-preview">
                    <h6 className="post-title">Speedgolf App</h6>
                    <p className="post-intro">Project from WSU CptS 489 taught by Professor Chris Hundhausen.</p>
                  <a href="https://ssplay.bfapp.org/">https://ssplay.bfapp.org/</a>
                  </div>
                </div>
              </div>

              <div>
                <div className="post">
                  <img className="thumbnail" src="ai.png" />
                  <div className="post-preview">
                    <h6 className="post-title">AIEngine-SpokaneCity</h6>
                    <p className="post-intro">Project from WSU CptS 421 [CAPS] taught by Professor Ananth Jillepalli. Client Laz Martinez.</p>
                  <a href="https://github.com/Puthyporsk/aiengine-spokanecity">https://github.com/Puthyporsk/aiengine-spokanecity</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="s2">
          <Container fluid={true}>
            <Row noGutters className="hobby">
              <div style={{display: 'flex'}}>
                <img className="hobby-picture" src="gaming.png"></img>
                <h3>Gaming
                <h5>I enjoy gaming during my down time.<br></br>
                It helps me relax and connect me with my friends.<br></br>
                </h5>
                </h3>
              </div>

              <div style={{display: 'flex'}}>
                <img className="hobby-picture" src="frisbee.png"></img>
                <h3>Frisbee
                <h5>
                I used to play Frisbee in highschool.<br></br>
                Not a professional, but I can surely do a perfect curve hammer.
                </h5>
                </h3>
              </div>

              <div style={{display: 'flex'}}>
                <img className="hobby-picture" src="logo192.png"></img>
                <h3>Web Development
                <h5>
                I like to play around with web design during my productive down time.<br></br>
                Currently, I aspire to be the best Software Engineer.
                </h5>
                </h3>
              </div>
            </Row>
          </Container>
        </section> 

      </React.Fragment>
    );
  }
}
export default App;
