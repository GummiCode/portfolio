import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { up } from "styled-breakpoints";
import breakpoints from "../styles/breakpoints";

const HeaderImageContainer = styled.div`
  height: 50vh;
  width: 100vw;
  margin: 10vh 0 0 0;
  background-image: url("./images/profile-picture.jpg");
  background-position: -15vw 10vh;
  background-attachment: fixed;
  background-size: auto 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  ${up("sm")} {
    background-position: -147px 3vh;
    background-size: auto 90%;
  }
`;

const HeaderText = styled.div`
  height: 25vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  background: rgba(10, 10, 10, 0.3);
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);

  ${up("sm")} {
    height: 30vh;
    clip-path: polygon(0 45%, 100% 0, 100% 100%, 0 100%);
    }

  h1 {
    font-size: 1.7em;
    color: #ffffff;
    margin: 0 5vw;

    ${up("sm")} {
      font-size: 2.2em;
    }
  }

  h2 {
    font-size: 1.7em;
    color: #ffd400;
    margin: 0 5vw 4vh 0;

    ${up("sm")} {
      font-size: 2.2em;
      margin: 0 5vw 3vh 0;
    }
  }
`;

const Header = () => {
  return (
    <ThemeProvider theme={breakpoints}>
      <HeaderImageContainer data-testid="header" id="header">
        <HeaderText>
          <h1> DAVID ARROWSMITH</h1>
          <h2>JUNIOR DEVELOPER</h2>
        </HeaderText>
      </HeaderImageContainer>
    </ThemeProvider>
  );
};

export default Header;
