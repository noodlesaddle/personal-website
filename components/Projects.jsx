import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptopImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto max-w-[1240px] px-2 py-16">
        <p className="py-4 text-xl uppercase tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Netflix clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Property App"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App /Coming soon.../"
            backgroundImg={cryptopImg}
            projectUrl="/crypto"
          />

          <ProjectItem
            title="Twitch clone /coming soon../"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
