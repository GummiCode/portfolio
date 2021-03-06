import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import { Link as scrollLink } from "react-scroll";
import { FaCaretDown } from "react-icons/fa";
import breakpoints from "../../styles/breakpoints";

const SectionArrowContainer = styled(scrollLink)`
  margin: 0 auto;
  width: 4vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;

  ${up("md")} {
    display: none;
  }
`;

const SectionArrowDown = ({ nextSectionId, color }) => {
  return (
    <ThemeProvider theme={breakpoints}>
      <SectionArrowContainer
        activeClass="active"
        to={nextSectionId}
        spy
        smooth
        offset={-60}
        duration={500}
      >
        <FaCaretDown fill={color} size="4em" />
      </SectionArrowContainer>
    </ThemeProvider>
  );
};

SectionArrowDown.propTypes = {
  nextSectionId: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SectionArrowDown;
