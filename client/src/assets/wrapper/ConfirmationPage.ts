import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 50rem;
  overflow-x: scroll;
  padding: 2rem;
  .table {
    width: 100rem;
    min-width: 70rem;
    margin: 2rem auto;
  }
  p {
    color: var(--color-red-800);
  }
  table {
    border-collapse: collapse;
  }
  th,
  td {
    text-transform: capitalize;
    padding: 10px;
    min-width: 17rem;
    text-align: center;
    border-bottom: 1px solid var(--color-grey-300);
  }
  button {
    border: none;
    background: none;
  }
  svg:hover {
    color: var(--color-red-800);
  }
`;

export default Wrapper;
