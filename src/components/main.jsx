import React, { Component } from 'react';
import Card from './test/card'
import profile from "../images/prof_pic.jpg";
import data from '../data'

class Main extends Component {
  state = {  }
  render() {
    const cards = data.map(item => {
      return (
        <Card
          item = {item}
        />
        )
      })
    return (
      <div>
        <div class="container">
    <div class="banner">
      <div class="background-img vertical-center">
        <h3 class="primary mb-3">Hi, my name is</h3>
        <h1 class="light-gray">Shinji Momoi. <span class="gray"> <br />I build things for web.</span></h1>
        <h3 class="gray font-light mt-5">Front-end developer in Tokyo.</h3>
      </div>
    </div>


    <h2 id="about" class="section mb-5 light-gray"><span class="primary font-light">01</span> About me</h2>

    <div class="card align-center mt-5">
      <div class="description">
        <p class="gray mt-5">Hello! My name is Shinji and I enjoy designing things that live on the internet. As a designer since 2012, I have worked as Art director for an advertising company in Brazil. Since then, I started to become more and more interested in web development, but it was not until recently that I decided to learn it.</p>
          <p class="gray mt-5">I enjoy walking around and take photos on my free time, which you can check on my <a href="https://instagram.com/paintitblack8" class="primary">instagram</a>. </p>
        <p class="gray mt-5">What I know: <span class="primary font-bold">Ruby on Rails / JavaScript / Html / Css / Photoshop / Illustrator</span> </p>
      </div>
      <img class="avatar" src={profile} alt="Me" />
    </div>


    <h2 id="projects" class="light-gray section"><span class="section primary font-light">02</span> Projects</h2>

      <section>{cards}</section>

      <div id="connect" class="text-center">
        <h2 class="section light-gray"><span class="primary font-light">03</span> Connect with me</h2>
        <p class="gray mt-5">Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        <div class="text-center flex-btn">
          <a class="email-link btn btn-ghost mt-5 me-5" href="mailto:shinjimomoi@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
          <div class="flex icons mt-3">
            <a href="https://www.linkedin.com/in/shinjimomoi/"><i class="fab fa-linkedin gray m-3"></i></a>
            <a href="https://github.com/shinjimomoi"><i class="fab fa-github gray m-3"></i></a>
            <a href="https://instagram.com/paintitblack8"><i class="fa-solid fa-user"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-icons fixed mobile-container">
      <a href="https://www.linkedin.com/in/shinjimomoi/"><i class="fab fa-linkedin gray m-3"></i></a>
      <a href="https://github.com/shinjimomoi"><i class="fab fa-github gray m-3"></i></a>
      <a href="https://instagram.com/paintitblack8"><i class="fas fa-map-marker"></i></a>
      <div class="vl"></div>
    </div>
  </div>
    );
  }
}

export default Main;
