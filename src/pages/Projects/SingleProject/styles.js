import styled from "styled-components";

export const Container = styled.div`
  max-width: 1148px;
  width: 100%;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

    @media screen and (max-width: 768px) {
      span {
        margin-right: 5px;
      }
    }
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    .project {
      background-color: #f5f5f5;
      padding: 10px;
      display: flex;
      flex-direction: column;
      min-height: 250px;

      img {
        width: 100%;
      }

      .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px;

        strong {
          text-transform: uppercase;
        }
      }

      button {
        width: 146.98px;
        border: none;
        padding: 10px 15px;
        align-self: center;
        background-color: #1487c9;
        color: #fff;
        border-radius: 20px;
        font: 16px "Encode Sans Expanded";
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .content-item {
    display: flex;
    justify-content: space-between;
    padding: 25px 0;

    .detail-item {
      background: #fff;
      padding: 25px;
      /* border-radius: 20px; */
      margin-right: 15px;

      max-height: 150px;

      h3 {
        text-transform: uppercase;
        line-height: 1.7;
      }

      .line {
        border: 1px solid #eee;
        margin: 15px 0;
      }
    }

    .gallery-item {
      background: #fff;
      flex: 1;
      padding: 25px;
      /* border-radius: 20px; */
      margin-right: 15px;

      h3 {
        text-transform: uppercase;
        line-height: 1.7;
      }

      .line {
        border: 1px solid #eee;
        margin: 15px 0;
      }

      .photos-gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding-top: 10px;
        grid-gap: 10px;

        img {
          width: 100%;
          border: 3px solid #ccc;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .line {
      display: none;
    }
    .content-item {
      flex-direction: column;
      width: 100%;
      width: 451px;
      margin: 0 auto;

      .detail-item {
        margin-bottom: 20px;
        border-radius: 1px;
        width: 100%;
        max-width: 401px;

        h3 {
          font-size: 14px;
          text-align: center;
        }

        .desc {
          margin-top: 10px;
        }

        p {
          font-size: 12px;
          text-align: center;
        }
      }
      .gallery-item {
        margin-bottom: 20px;
        border-radius: 1px;
        width: 100%;
        max-width: 401px;

        h3 {
          font-size: 14px;
          text-align: center;
        }

        .desc {
          margin-top: 10px;
        }

        p {
          font-size: 12px;
          text-align: center;
        }

        .photos-gallery {
          grid-template-columns: 1fr;

          img {
            width: 100%;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const Main = styled.main`
  background: #333;
  .cover {
    img {
      width: 100%;
      max-height: 480px;
    }
  }
`;
