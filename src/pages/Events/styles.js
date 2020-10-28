import styled from "styled-components";

export const Container = styled.div`
  max-width: 1148px;
  width: 100%;
  margin: 0 auto;
  background: #fff;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
      margin: 0 10px;
    }

    .back {
      display: flex;
      align-items: center;
      width: 75px;
      background-color: #1487c9;
      padding: 10px 15px;
      text-align: center;
      justify-content: space-between;
      color: #fff;
      border-radius: 20px;

      a {
        text-decoration: none;
        color: #fff;
      }
    }

    span {
      height: 70px;
      display: flex;
      align-items: center;

      border-bottom: 1px solid #1487c9;
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    padding: 15px;

    .project {
      background-color: #f5f5f5;
      padding: 10px;
      display: flex;
      flex-direction: column;
      min-height: 250px;
      text-align: center;
      align-content: center;
      border-radius: 10%;

      img {
        display: flex;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        text-align: center;
        align-self: center;
        border: 10px solid #fff;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
      }

      .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;

        strong {
          text-transform: uppercase;
          line-height: 30px;
        }

        .event-date {
          font-size: 12px;
        }
      }

      a.button {
        width: 146.98px;
        border: none;
        padding: 10px 15px;
        align-self: center;
        background-color: #1487c9;
        color: #fff;
        border-radius: 20px;
        font: 16px "Encode Sans Expanded";
        cursor: pointer;
        text-align: center;
        text-decoration: none;

        &:focus {
          outline: none;
        }
      }
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Main = styled.main`
  background: #333;
  padding: 40px 0;
`;
