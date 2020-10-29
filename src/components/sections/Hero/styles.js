import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(110deg, #127ab6 50%, #014a73 50%);
  /* background: linear-gradient(#014a73, #127ab6); */
  padding: 40px;

  .map {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      z-index: 1;
      cursor: pointer;
      width: 80%;

      & > path {
        :hover {
          fill: #014a73;
        }

        z-index: 1;
      }
    }

    text {
      z-index: 19;

      :hover {
        fill: #fff;
        color: #fff;
      }
    }
  }

  .info-hero {
    h1 {
      color: #fff;
      font-size: 48px;
      font-family: "Encode Sans Expanded", sans-serif;
      text-align: center;
    }

    p {
      margin-top: 24px;
      color: #fff;
      font-size: 24px;
      text-align: center;
    }
  }
`;
