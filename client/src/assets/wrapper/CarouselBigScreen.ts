import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;

  .carousel {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 300rem;
  }

  .container {
    overflow: hidden;
    width: 100rem;
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
    gap: 2rem;
  }

  .slide {
    min-width: calc(33.33% - 1.33rem);
    text-align: center;
    background: #fff;
    height: 30rem;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
    transition: all 0.5s;
  }
  img:hover {
    scale: 1.1;
  }

  button {
    padding: 1rem;
    background: #333;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 50%;
  }

  button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  p {
    color: red;
    font-size: 2rem;
    font-weight: 300;
  }
  @media screen and (min-width: 1500px) {
    .container {
      width: 150rem;
    }
    .slide {
      height: 40rem;
    }
  }
  @media screen and (max-width: 800px) {
    .container {
      width: 50rem;
    }
    .carousel {
      max-width: 100rem;
    }
    .slide {
      height: 14rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      width: 30rem;
    }
    .carousel {
      max-width: 70rem;
    }
    .slide {
      height: 10rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
export default Wrapper;
