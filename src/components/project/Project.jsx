import React from "react";
import "./project.css";
// import IMG1 from "../../assests/project1.png";
// import NoteIMG from "../../assests/NoteApp.png";
import Hostel from "../../assests/hostel.png";
import folio from "../../assests/Portfolio.png";
// import IMG2 from "../../assests/project2.png";
const Portfolio = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Hostel} alt="" />
          </div>
          <h3>HOSTELENGINE.COM - Hostel Booking Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sazzisgithub/Hostel_Booking_Website.git" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://sazzisgithub.github.io/Hostel_Booking_Website/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={folio} alt="" />
          </div>
          <h3>MyPortfolio - PersonalPortfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sazzisgithub/PersonalPortfolio-main.git" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://sajal-personal-portfolio.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NoteIMG} alt="" />
          </div>
          <h3>NoteApp - Note Taking Web-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ManishK4514/NoteApp" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http://noteapp4514.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}

        
      </div>
    </section>
  );
};

export default Portfolio;
