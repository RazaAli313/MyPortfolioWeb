/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tic Tac Toe Game using JavaScript and Tailwind 🎉",
    description:
      "Developed this fully user interactive and customized game using ,HTML,JS and Tailwind CSS",
    url: "https://github.com/RazaAli313/Tic_Tac_Toe_Game_Js",
  },
  {
    title: "Flipkart Clone Project",
    description:
      "One of the project i have developed during my front-end beginning journey",
    url: "https://github.com/RazaAli313/Flipkart_Clone_Project",
  },
  {
    title: "Amnesty International Clone Project",
    description:
      "Created this Clone Project using HTML,CSS and JS, a beginner Front-end Project",
    url: "https://github.com/RazaAli313/Amnesty_International_Clone_Project",
  },
  {
    title: "Facebook Login Page",
    description:
      "I have built a Facebook Login Page using Js and Tailwind",
    url: "https://github.com/RazaAli313/Fb_Login_Page_Clone_Project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
