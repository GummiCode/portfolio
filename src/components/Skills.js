import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { FaCode as SkillsIcon } from "react-icons/fa";
import breakpoints from "../styles/breakpoints";
import SectionArrowDown from "./section-arrows/SectionArrowDown";
import techList from "../assets/techList";

const SkillsContainer = styled.div`
  position: relative;
  height: 83vh;
  width: 100vw;
  padding: 4.5vh 0;
  background-color: #ff5b1b;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 10vh;
  font-size: 4.8em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledSkillsIcon = styled(SkillsIcon)`
  height: 10vh;
  min-height: 0.8em;
  max-height: 3em;
  width: auto;
`;

const TechBlockContainer = styled.div`
  width: 100%;
  height: 60vh;
  margin: 4vh 0 0 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  div {
    height: auto;
    max-height: 60vh;
    width: 80%;
    background: transparent;
    border-radius: 4px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
  }
`;

const TechBlock = styled.span`
  height: fit-content;
  width: fit-content;
  padding: 5px;
  margin: 5px;
  font-size: 1.2em;
  background: #e6e6e6;
  border-radius: 4px;
  box-shadow: 3px 3px 3px 3px rgba(80, 40, 60, 0.2);

  ${up("sm")} {
    font-size: 1.4em;
  }

  ${up("smmd")} {
    font-size: 1.6em;
  }

  ${up("md")} {
    font-size: 1.6em;
  }
`;

const Skills = ({ nextSection }) => {
  const displayTechnologies = (technologies) => {
    return technologies.map((tech) => {
      return <TechBlock key={`${tech}Exp`}>{tech}</TechBlock>;
    });
  };

  return (
    <ThemeProvider theme={breakpoints}>
      <SkillsContainer data-testid="skills" id="skills">
        <TitleContainer>
          <StyledSkillsIcon />
        </TitleContainer>
        <TechBlockContainer>
          <div>{displayTechnologies(techList)}</div>
        </TechBlockContainer>
        <SectionArrowDown nextSectionId={nextSection} />
      </SkillsContainer>
    </ThemeProvider>
  );
};

Skills.propTypes = {
  nextSection: PropTypes.string.isRequired,
};

export default Skills;
