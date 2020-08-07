import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link as scrollLink } from "react-scroll";
import { IconContext } from "react-icons";
import { FaCaretUp } from "react-icons/fa";

const SectionArrowContainer = styled(scrollLink)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 4vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
`;

const SectionArrowUp = ({ lastSectionId }) => {
  return (
    <SectionArrowContainer
      activeClass="active"
      to={lastSectionId}
      spy
      smooth
      offset={-60}
      duration={500}
    >
      <IconContext.Provider
        value={{
          color: "#000000",
          size: "5em",
        }}
      >
        <FaCaretUp />
      </IconContext.Provider>
    </SectionArrowContainer>
  );
};

SectionArrowUp.propTypes = {
  lastSectionId: PropTypes.string.isRequired,
};

export default SectionArrowUp;