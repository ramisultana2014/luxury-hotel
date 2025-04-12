import Wrapper from "../assets/wrapper/HeroSection";

import { FaStar } from "react-icons/fa";
///heroSection used in LandingPage
function HeroSection() {
  return (
    <Wrapper id="homeSection">
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <h1>LANCASTER PLAZA</h1>
      <h2>World of Hospitality Services </h2>
    </Wrapper>
  );
}

export default HeroSection;
