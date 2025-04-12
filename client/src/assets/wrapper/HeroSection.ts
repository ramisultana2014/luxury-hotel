import styled from "styled-components";
import heroImage from "../images/hero.jpg";
const Wrapper = styled.section`
  background: linear-gradient(rgba(8, 61, 97, 0.3), rgba(49, 146, 210, 0.3)),
    url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover; /* or contain, depending on your design */
  background-position: center;
  color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: 100vh;
  h1,
  h2 {
    letter-spacing: 0.5rem;
    font-size: 2rem;
    text-align: center;
  }
  svg {
    color: var(--color-red-800);
    //background: var(--color-red-800);
    height: 2rem;
    width: 2rem;
  }
  .stars {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media screen and (max-width: 500px) {
    h2,
    h1 {
      font-size: 1.4rem;
    }
  }
`;
export default Wrapper;
