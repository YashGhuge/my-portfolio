import React from "react";
import "./Styles/About.css";
import profile from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <img src={profile} alt="Profile" />
      <p>
        Hi, I'm <strong>Yash</strong>. I'm a passionate developer with
        experience in React, JavaScript, and other technologies.
      </p>
    </section>
  );
}

export default About;
