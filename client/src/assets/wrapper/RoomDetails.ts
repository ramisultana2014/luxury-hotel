import styled from "styled-components";
const Wrapper = styled.section`
  display: flex;

  background: gainsboro;
  flex-wrap: wrap;
  a {
    position: absolute;
    right: 7%;
    text-decoration: none;
  }
  .roomImagesContainer {
    display: flex;

    position: relative;

    gap: 5px;
    .btn {
      border: none;
      position: absolute;

      right: 0;
      border-radius: 50%;
      top: 50%;
      display: flex;

      align-items: center;
      background-color: var(--color-brand-main-3);
      justify-content: center;
      transition: all 1s;
      color: var(--color-grey-50);
    }
    .btn svg {
      width: 3rem;
      height: 3rem;
    }
    .btn:hover {
      background: transparent;
    }
  }
  img {
    border-radius: 8px;
    width: 35rem;
    aspect-ratio: 3/2;
  }
  .roomDetails {
    flex-grow: 1;

    font-size: 1.4rem;
    padding: 10px;
    line-height: 2;

    block-size: fit-content;

    p:first-child {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 8px;
      color: var(--color-red-800);
    }
    p {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    p:nth-child(2) {
      display: inline;

      font-size: 1.4rem;
    }
    p:nth-child(3) {
      gap: 5px;
    }
    p:nth-child(4) {
      letter-spacing: 2px;
    }
    button {
      border: none;
      background: none;
      font-size: 1.4rem;
      color: var(--color-red-800);
    }
  }
  .calendar {
    padding: 10px;
  }
  /* https://daypicker.dev/docs/styling#default-style */
  /* then look at css variables */
  .rdp-root {
    --rdp-accent-color: var(--color-red-800);
    --rdp-accent-background-color: #f0f0f0;

    /* Add more CSS variables here. */
    --rdp-day-height: 30px;
    --rdp-day-width: 30px;
    --rdp-day_button-height: 30px;
    --rdp-day_button-width: 30px;
  }
  .booked-range {
    background-color: rgba(255, 99, 71, 0.3); /* tomato tint */
    border-radius: 4px;
  }

  .calculations {
    margin-top: 1rem;
    justify-content: center;
    display: grid;
    width: 22rem;
    gap: 1rem;
    box-shadow: var(--shadow-lg);
    background: #c6c6c6;
    padding: 1rem;
    background: #deeff5;
    border: 2px solid var(--color-red-800);
    border-radius: 8px;
  }
  .row {
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  select {
    width: 3rem;
    background: #deeff5;
    border: none;
    outline: none;
    transform: translateX(14px);
  }
  label {
    font-size: 1.4rem;
  }
  form {
    margin-top: 1rem;
    display: grid;
    row-gap: 10px;
  }

  input[type="email"] {
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    background: #deeff5;
    outline: none;
    border: none;
    border-radius: 8px;
  }
  input[type="email"]:valid {
    outline: 2px solid var(--color-red-800);
  }
  input::placeholder {
    font-size: 1.4rem;
    color: var(--color-grey-700);
  }
  .submit {
    visibility: hidden;
    background: #deeff5;
    border: none;
    border-radius: 8px;
  }
  .submit:hover {
    outline: 2px solid var(--color-red-800);
  }

  @media screen and (min-width: 500px) {
    padding: 3rem;
    .roomImagesContainer {
      img {
        width: 45rem;
      }
    }
    .roomDetails {
      max-width: 31rem;
      height: auto;
    }
  }
`;

export default Wrapper;
