import SocialsButton from "./Socials/SocialsButton";

import { FaGithub, FaLinkedin, FaSquareUpwork } from "react-icons/fa6";

function Hero() {
  return (
    <>
      <div className="main-paddings" id="home">
        <div className="text-card">
          <h6 className="drop-shadow-h mt-1">
            Hi there!
          </h6>
          <h1 className="drop-shadow-h">
            I am <span className="highlight-text">Alejandro Suazo</span>
          </h1>
          <h4 className="drop-shadow-h">
            <span className="highlight-text">Full-Stack</span> Developer
          </h4>
          <p className="mt-5 drop-shadow-p">
            Passionate about creating modern and intuitive applications,
            specialized in delivering clean and efficient code, and
            always open to new opportunities.
          </p>

          <div className="
            flex
            gap-5
            sm:gap-7
            md:gap-10
            justify-center
            items-center
            mx-auto"
          >
            <SocialsButton href="https://github.com/AlejandroS2022" Icon={FaGithub} />
            <SocialsButton href="https://www.linkedin.com/in/alejandro-suazo-46a47a180/" Icon={FaLinkedin} />
            <SocialsButton href="https://www.upwork.com/freelancers/~01882b201250bdc6f6" Icon={FaSquareUpwork} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
