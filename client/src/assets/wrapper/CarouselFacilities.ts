import styled from "styled-components";
const Wrapper = styled.div`
  width: 95vw;
  display: flex;
  gap: 0.2rem;
  .itemContainer {
    position: relative;
    height: 35rem;
    overflow: hidden;
    cursor: pointer;
  }

  .trans {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #0f466b;
    opacity: 0.8;
    z-index: 1000;
    transition: width 1s ease-out;
  }

  figcaption {
    text-align: center;
    transform: translateY(18rem);
    color: #fff;
  }

  .image {
    height: 100%;
    width: 30rem;
    transition: all 1s ease-out;
  }
  .itemContainer:hover .image {
    animation: identifier 2s;
  }

  @keyframes identifier {
    0% {
      width: 30rem;
      /* scale: 1; */
    }
    100% {
      width: 50rem;
      /* scale: 1.1; */
    }
  }
  .itemContainer:hover .trans {
    opacity: 0;
  }
  @media screen and (max-width: 500px) {
    //flex-direction: column;
    .itemContainer {
      height: 25rem;
    }
    .trans {
      font-size: 1.2rem;
    }
  }
`;

export default Wrapper;
