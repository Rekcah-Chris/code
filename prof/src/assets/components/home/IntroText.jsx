import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CTAButton from "./CTAButton";

const IntroContainer = styled.div`
  text-align: center;
  padding: 1rem;
  transition: filter 0.3s ease;

  ${({ isBlurred }) =>
    isBlurred &&
    `
    filter: blur(3px);
  `}

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
`;

const ProfileImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 1rem;
  text-align: center;
  margin-left: 0.5rem;

  span {
    background: linear-gradient(to right, #22c55e, #3b82f6, #fbbf24);
    background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SkillText = styled(motion.span)`
  display: inline-block;
  background: #451a03;
  transition: color 0.3s ease-in-out;
`;

const SkillTextWrapper = styled.p`
  font-size: 1.5rem;
  font-weight: medium;
  color: #451a03;
  text-align: center;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #020617;
  margin: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const skills = ["Developer", "Support", "Tech"];

function IntroText({ isBlurred }) {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <IntroContainer isBlurred={isBlurred}>
        <ProfileImage src="../pr.jpg" alt="Profile" />
        <Heading>
          I’m <span>Cape-Code</span>,
          <SkillTextWrapper>
            <AnimatePresence mode="wait">
              <SkillText
                key={skills[currentSkillIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {skills[currentSkillIndex]}
              </SkillText>
            </AnimatePresence>
          </SkillTextWrapper>
        </Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          consectetur! Nostrum eum dolore provident asperiores totam,
          reprehenderit repellat commodi sunt maxime illum placeat recusandae?
          Soluta dolorum dicta amet placeat, dolor eius mollitia laudantium
          voluptas tempora minima enim doloribus nobis recusandae sequi vero
          itaque ex repudiandae molestias beatae, nesciunt ducimus fugit?
        </Description>
        <CTAButton />
      </IntroContainer>
    </>
  );
}

export default IntroText;
