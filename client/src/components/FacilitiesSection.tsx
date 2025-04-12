import Wrapper from "../assets/wrapper/Facilities";
import CarouselFacilities from "./CarouselFacilities";
import facilities from "../utils/facilities";
function FacilitiesSection() {
  // in LandingPage

  return (
    <Wrapper id="facilities">
      <h1> HOTEL FACILITIES</h1>
      <CarouselFacilities facilities={facilities} />
    </Wrapper>
  );
}

export default FacilitiesSection;
