import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DiReact, DiCss3, DiJavascript1,DiPython, DiAtom,DiRasberryPi } from 'react-icons/di';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Emotion based music player using raspberry pie and Mobilenetv3',
      description: ' the project involves training the mobilenetV3 model on a dataset of images labeled with different emotions. The model is then used to classify the emotion of the user and play music accordingly. The model is deployed on a raspberry pi and the music is played using a speaker connected to the raspberry pi.',
      technologies: [<DiPython key="react" />, <DiAtom key="atom" />, <DiRasberryPi key="pi" />]
    },
    {
      title: 'Crypto Coins Search APP using ReactJS',
      description: 'A ReactJS project involves building a search interface that allows users to search for information about different cryptocurrencies.The project also involves fetching data from a crypto API, displaying the data in a user-friendly way, and providing search functionality to allow users to find specific cryptocurrencies. ',
      technologies: [<DiReact key="python" />, <DiCss3 key="c" />, <DiJavascript1 key="js" />],
      link: 'https://github.com/Kartikeyan8/crypto_coin_search'
    },
    {
      title: 'Friends TV show Sentiment analysis',
      description: 'The project involved analyzing transcripts of over 240 episodes of the tv show and performing sentiment analysis of the same.',
      technologies: [<DiPython key="python" />, <DiAtom key="css" />],
      link: 'https://github.com/Kartikeyan8/Friends-Data-Analysis'
    }
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 1500,
    easing: 'easeOutElastic',
    pauseOnHover: true
    ,
    responsive: [

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,

        } 
      }
    ]
      
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="technologies-container">
              {project.technologies.map((icon, iconIndex) => (
                <div key={iconIndex} className="technology-icon">
                  {icon}
                </div>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
