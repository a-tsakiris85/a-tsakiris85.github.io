import githubImg from "./images/github.png";
import templeImg from "./images/temple.png";
import slideImg from "./images/slides.png";
import docImg from "./images/document.png";
import critterImg from "./images/critter.png";
import youtube from "./images/youtube.png";
import reactImg from "./images/react.png";
import baseballImg from "./images/baseball.png";
export const temple = {
  title: "Flexible Entity Recognition",
  subtitle:
    "Using neural nets to recognize phone numbers, emails, and more in messy web data",
  description:
    "I completed this project as part of the REU for Pervasive Computing at Temple University. I designed and evaluated neural networks using Python's Keras library to measure their accuracy in detecting entities normally defined by various regular expressions. See extended abstract for more details.",
  dateString: "Summer 2018",
  links: [
    {
      link:
        "https://www.slideshare.net/slideshow/embed_code/key/4XUGyxZM852MnK",
      linkIcon: docImg
    },
    {
      link:
        "https://www.slideshare.net/slideshow/embed_code/key/JKlgjtybajyome",
      linkIcon: slideImg
    }
  ],
  image: templeImg
};

export const critter = {
  title: "Critter World",
  subtitle: "CS 2112 Project - Online life and evolution simulation",
  description:
    "Written in Java, Critter World is a simulation of the lives of critters: entities that contain a ruleset written in an original critter language. Project includes a parser/interpreter for this language, a GUI, and an online-mode in which multiple users can interact with the same critter world. See below links for complete write-up.",
  dateString: "Fall 2017",
  links: [
    {
      link: "https://github.com/a-tsakiris85/critter-world",
      linkIcon: githubImg
    }
  ],
  image: critterImg
};
export const website = {
  title: "This Website",
  subtitle: "A side project during my summer internship",
  description:
    "I created this website using React knowledge that I picked up over the years. I made a point to create the website almost entirely from scratch, forgoing tools like bootstrap and pre-made components. Creating this website was a way for me to develop freely and creatively outside of my more structured internship",
  dateString: "Summer 2019",
  links: [
    {
      link: "https://github.com/a-tsakiris85/personalwebsite",
      linkIcon: githubImg
    }
  ],
  image: reactImg
};
export const baseball = {
  title: "Arcade Baseball",
  subtitle: "CS 3420 Project (Embedded Systems)",
  description:
    "My first real time working with hardware. Written in C, this game actually turned out quite fun to play. It was inspired by a game my dad made with me when I was little--one of my first exposures to engineering and computer science.",
  dateString: "Spring 2019",
  links: [
    {
      link: "https://github.com/a-tsakiris85/arcade-baseball",
      linkIcon: githubImg
    },
    {
      link: "https://www.youtube.com/watch?v=Mk6mpdr_HK4&feature=youtu.be",
      linkIcon: youtube
    }
  ],
  image: baseballImg
};
