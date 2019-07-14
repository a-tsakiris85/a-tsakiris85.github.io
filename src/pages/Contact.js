import React from "react";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import insta from "../images/instagram.png";
import "./Contact.css";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="Page">
        <h1 className="PageTitle">MEDIA</h1>
        <div className="ContactContent">
          <div className="ContactContainer">
            <a
              href="https://www.linkedin.com/in/andrew-tsakiris-543917152/"
              target="_blank"
            >
              <img className="ContactPicture" src={linkedin} />
            </a>
          </div>
          <div className="ContactContainer">
            <a href="https://github.com/a-tsakiris85" target="_blank">
              <img className="ContactPicture" src={github} />
            </a>
          </div>
          <div className="ContactContainer">
            <a
              href="https://www.facebook.com/andrew.tsakiris.5"
              target="_blank"
            >
              <img className="ContactPicture" src={facebook} />
            </a>
          </div>
          <div className="ContactContainer">
            <a href="https://www.instagram.com/atsak4/" target="_blank">
              <img className="ContactPicture" src={insta} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

/*
Contacts: Instead of contacts could be links?
-linkedin
-github
-instagram
-facebook.

Just 4 images all centered and inline. All are links.
*/
