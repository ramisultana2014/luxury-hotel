import styled from "styled-components";
const Wrapper = styled.main<{ scrolled: string }>`
  //display: grid;
  header {
    height: 12rem;
    border-bottom: 0.5px solid var(--color-grey-50);
    padding: 0 5rem 1rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background-color: ${(props) =>
      props.scrolled === "true" ? "rgba(15, 70, 107, 0.95)" : "transparent"};
    transition: background-color 0.3s ease-in-out;
    z-index: 1000;
    color: var(--color-grey-50);
    img {
      height: 12rem;
      //visibility: visible;
    }

    .btns {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-self: left;
      /* visibility: hidden; */
      transform: translateY(1rem);
    }
    .btns button {
      background-color: transparent;
      padding: 2px 4px;
      border-radius: 8px;
      border: none;
      transition: all 1s;
    }
    .btns button:hover {
      color: red;
    }
    .book {
      background: none;
      border: none;
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 2px;
      color: red;
    }
  }
  @media screen and (max-width: 500px) {
    header {
      height: 8rem;
      padding: 0;
      .book {
        font-size: 1.3rem;
      }
      .btns {
        font-size: 1.2rem;
        gap: 2px;
      }

      img {
        //visibility: hidden;
        height: 7rem;
      }
    }
  }
`;

export default Wrapper;
