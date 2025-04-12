import styled, { css, keyframes } from "styled-components";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  align-items: center;
  /* flex-direction: column; */
  /* align-items: center; */
`;
const animate = keyframes`
      0% {
        background-color: #F5F5F5; 
    }
    100% {
        
        background-color:#fee2e2;
    }

`;
const Skel = styled.div<{ type?: string }>`
  animation: ${animate} 1s linear infinite alternate;
  margin-bottom: 1rem;
  ${(props) =>
    props.type === "normal" &&
    css`
      width: 35rem;
      aspect-ratio: 3/2;
    `}
  ${(props) =>
    props.type === "med" &&
    css`
      height: 30rem;
      width: 20rem;
    `}
  ${(props) =>
    props.type === "small" &&
    css`
      height: 10rem;
      width: 10rem;
    `}
    @media screen and (min-width: 500px) {
    ${(props) =>
      props.type === "normal" &&
      css`
        width: 50rem;
        aspect-ratio: 3/2;
      `}
  }
`;
function Skeleton() {
  return (
    <>
      <Container>
        <Skel type="normal" />
        <Skel type="med" />
        <Skel type="med" />
        <Skel type="med" />
      </Container>
    </>
  );
}
export default Skeleton;
