import styled from "styled-components";

const Wrapper = styled.footer`
  margin-top: 5rem;
  padding: 2rem;
  height: 50rem;
  text-align: center;
  display: grid;

  /* justify-items: center; */
  .map {
    height: 60vh;
  }
  span {
    font-size: 1.4rem;
  }
  .info {
    /* background-color: var(--color-brand-main-3);
    color: var(--color-grey-50); */
    margin-bottom: 2rem;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    a {
      text-decoration: none;
      color: inherit;
      transition: all 1s;
    }
    a:hover {
      color: var(--color-red-800);
      font-weight: 600;
    }
  }
  h2 {
    background-color: var(--color-brand-main-3);
    color: var(--color-grey-50);
    padding: 8px 20px;
    height: 8rem;
  }
  @media screen and (max-width: 800px) {
    margin-top: 2rem;
  }
`;

export default Wrapper;
