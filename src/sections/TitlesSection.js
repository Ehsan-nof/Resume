import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitlesSection.css";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

class TitlesSection extends Component {

  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1>
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={false}
          smooth={false}
          offset={0}
          duration={500}
          delay={0}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element id="AboutSection" name="about" className="element" />
      </div>
    );
  }
}

export default TitlesSection;
