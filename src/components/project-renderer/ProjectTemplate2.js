import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaGlobe, FaGithub } from "react-icons/fa";
import FullWidthContainer from "../FullWidthContainer";
import HalfWidthContainer from "../HalfWidthContainer";
import SectionArrow from "../SectionArrow";

const ProjectContainer = styled(FullWidthContainer)`
  background-color: ${(props) => props.backgroundColor};
`;

const RightProjectContainer = styled(HalfWidthContainer)`
  position: relative;
  width: calc(50% - 40px);
  padding: 0 40px 0 0;
`;

const TitleText = styled.h1`
  font-size: 4em;
  color: ${(props) => props.featureTextColor};
  margin: 40px 0 0 0;
`;

const SummaryText = styled.h2`
  font-size: 3em;
  color: ${(props) => props.featureTextColor};
  margin: 20px 0 0 0;
`;

const SectionText = styled.ul`
  font-size: 2em;
`;

const Item = styled.li`
  margin: 0 0 4vh 0;
`;

const LeftProjectContainer = styled.div`
  width: 45%;
  height: 100%;
  background-attachment: fixed;
  background-color: rgba(10, 10, 10, 0.3);
  background-image: url(${(props) => props.image});
  background-position: top 60px left 0px;
  background-size: contain;
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
`;

const LinkBanner = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 0 10vh 0;
  height: 10vh;
  width: 30vw;
  border-radius: 5vh;
  background-color: rgba(255, 237, 237, 0.9);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const LinkBannerText = styled.span`
  font-size: 3em;
  font-weight: bold;
  font-style: italic;
`;

const LinkBannerLink = styled.a`
  height: 8vh;
  width: 8vh;
  border-radius: 45%;
`;

const StyledFaGithub = styled(FaGithub)`
  ${LinkBanner}:hover & {
    fill: #c9512f;
    transition: 0.5s;
  }
`;

const StyledFaGlobe = styled(FaGlobe)`
  ${LinkBanner}:hover & {
    fill: #f6a65d;
    transition: 0.5s;
  }
`;

const ProjectTemplate2 = ({ projectData, projectId, nextSection }) => {
  const {
    title,
    summary,
    aspects,
    gitHub,
    url,
    image,
    featureTextColor,
    backgroundColor,
  } = projectData;

  const mapAspects = () => {
    return aspects.map((aspect) => {
      return <Item key={aspect}>{aspect}</Item>;
    });
  };

  return (
    <ProjectContainer
      data-testid={projectId}
      id={projectId}
      backgroundColor={backgroundColor}
    >
      <LeftProjectContainer image={image} />

      <RightProjectContainer>
        <TitleText featureTextColor={featureTextColor}>{title}</TitleText>
        <SummaryText featureTextColor={featureTextColor}>{summary}</SummaryText>
        <SectionText>{mapAspects(aspects)}</SectionText>

        <LinkBanner>
          <LinkBannerText>VIEW PROJECT:</LinkBannerText>
          <LinkBannerLink
            href={gitHub}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconContext.Provider
              value={{
                color: "#000000",
                size: "100%",
              }}
            >
              <StyledFaGithub />
            </IconContext.Provider>
          </LinkBannerLink>
          <LinkBannerLink href={url} target="_blank" rel="noopener noreferrer">
            <IconContext.Provider
              value={{
                color: "#000000",
                size: "100%",
              }}
            >
              <StyledFaGlobe />
            </IconContext.Provider>
          </LinkBannerLink>
        </LinkBanner>
      </RightProjectContainer>

      <SectionArrow nextSectionId={nextSection} />
    </ProjectContainer>
  );
};

ProjectTemplate2.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    aspects: PropTypes.array.isRequired,
    gitHub: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    featureTextColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
  projectId: PropTypes.string.isRequired,
  nextSection: PropTypes.string.isRequired,
};

export default ProjectTemplate2;