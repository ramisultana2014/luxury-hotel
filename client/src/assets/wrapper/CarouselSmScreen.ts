import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 60rem;
  border-radius: 8px;

  .carousel-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    width: 100%;
    border-radius: 8px;
  }

  .room {
    flex: 0 0 100%;
    scroll-snap-align: start;
    text-align: center;
    border: 2px solid wheat;
    position: relative;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }
  article {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--color-grey-50);
    gap: 5px;
    p {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    a {
      background-color: var(--color-red-800);
      border-radius: 50px;
      border: 1px solid var(--color-grey-0);
      box-shadow: 0 0 0 1px white;
      padding: 4px 16px;
      color: var(--color-grey-0);
      text-decoration: none;
      position: absolute;
      top: 10%;
      right: 10%;
    }
    a:hover {
      background-color: var(--color-brand-main-3);
    }
    .roomName {
      position: absolute;
      font-weight: 500;
      bottom: 12%;
      left: 0;
      background-color: var(--color-red-800);
    }
  }
  button {
    font-size: 1.4rem;
    margin-top: 10px;
    padding: 4px 8px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    transition: 0.3s;
  }

  button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  @media screen and (max-width: 700px) {
    width: 35rem;
    article {
      font-size: 1.3rem;
      .roomName {
        bottom: 17%;
        left: 0;
      }
    }
  }
`;

export default Wrapper;
