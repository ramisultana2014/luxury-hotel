import styled from "styled-components";
const Wrapper = styled.section`
  margin-top: 5rem;
  height: auto;
  /* transform: translateY(100px) scale(0.6); */
  /* animation: identifier1 4s linear forwards;
  animation-timeline: view();
  animation-range: entry 0%;
  @keyframes identifier1 {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  } */

  h2 {
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1px;
    padding: 1rem;
  }
  p {
    font-weight: 200;
    padding: 1rem;
  }
  .rooms {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    /* flex-wrap: wrap; */
    align-items: center;
    gap: 3rem;
    background: rgba(15, 70, 107, 1);

    /* border: 2px solid black; */
  }

  .ameneties {
    color: var(--color-grey-50);
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    font-size: 1.4rem;

    p {
      text-align: center;
    }
  }
  @media screen and (max-width: 500px) {
    .ameneties {
      font-size: 1rem;
    }
  }
`;

export default Wrapper;
