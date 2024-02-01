import React from "react";
import "./project.css";
import Hostel from "../../assests/hostel.png";
import folio from "../../assests/Portfolio.png";
import to_do_l from "../../assests/to_do.png";
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
              href="https://personal-portfolio-main-sigma.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={to_do_l} alt="" />
          </div>
          <h3>TO DO LIST</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sazzisgithub/to_do_list" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://to-do-list-green-seven.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> 

        
      </div>
    </section>
  );
};

export default Portfolio;
