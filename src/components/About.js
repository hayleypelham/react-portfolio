import React from "react"
import Fade from "react-awesome-reveal"
import avatar from "../images/avataaars.svg"

const About = () =>{
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade cascade>
              <h2>About</h2>
            </Fade>
            <p>
              Currently, I work as a <strong>front-end developer</strong> at a <a href="https://hairylemon.co.nz">digital agency</a>. 
              Before that, I was a full-stack developer and <strong>infrastructure and tools lead </strong>
              for an <a href="https://www.catalyst.net.nz/">open-source software solutions company</a>.
            </p>
            <p>
              I love <strong>collaborating with cool people</strong> and making{" "}
              a <strong>positive impact</strong>.
            </p>
            <p>
              I'm super passionate about personal and professional <strong>growth</strong>,
              creating <strong>beautiful websites</strong>, and making processes more
              efficient with <strong>automation</strong>. My values are important
              to me &mdash; my dream is to be able to combine each of these pursuits everyday in
              work that aligns with those <strong>values</strong>.
            </p>
          </div>
          <div className="image-wrapper">
            <img src={avatar}
              alt="Cartoon Hayley smiling and wearing a black t-shirt"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
