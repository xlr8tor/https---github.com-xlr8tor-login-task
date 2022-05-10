import styled from "styled-components";

export const Wrapper = styled.div`
  body {
    min-height: 100%;
    color: #333;
    padding: 20px 24px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    font: inherit;
  }

  .not-found {
    font-size: clamp(14px, 5vw, 20px);
    margin-bottom: 10px;
  }

  .wrapper {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
  }

  .wrapper_content-text.heading {
    font-size: 43px;
  }

  .wrapper_content-text.para {
    font-size: 18px;
    margin-block: 20px 30px;
  }

  .btn {
    font-size: 14px;
    border: none;
    text-transform: uppercase;
    padding: 24px 43px;
    cursor: pointer;
  }

  .btn-secondary {
    background-color: #333;
    color: #fff;
  }

  @media (min-width: 768px) {
    body {
      padding: 40px 77px;
    }

    .wrapper {
      flex-flow: row;
      align-items: center;
      gap: 30px;
      margin-top: 80px;
      text-align: left;
    }

    .wrapper_content {
      align-self: center;
    }

    .wrapper_content-text.heading {
      font-size: clamp(30px, 5vw, 64px);
    }

    .wrapper_content-text.para {
      font-size: 21px;
      margin-block: 25px 40px;
      width: 381px;
    }
  }

  @media (min-width: 1024px) {
    body {
      padding: 40px 77px;
    }

    .wrapper {
      flex-flow: row;
      align-items: center;
      gap: 30px;
      margin-top: 80px;
      text-align: left;
    }

    .wrapper_content {
      align-self: center;
    }

    .wrapper_content-text.heading {
      font-size: clamp(30px, 5vw, 64px);
    }

    .wrapper_content-text.para {
      font-size: 24px;
      margin-block: 36px 66px;
      width: 381px;
    }
  }
`;
