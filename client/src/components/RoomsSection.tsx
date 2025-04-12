import Wrapper from "../assets/wrapper/RoomsSection";
//import CarouselBigScreen from "./CarouselBigScreen";
import CarouselSmScreen from "./CarouselSmScreen";
const ameneties: string[] = [
  "A/C",
  "Free WiFi",
  "Daily housekeeping",
  "Hair dryer",
  "Complimentary water in room",
  "Minibar",
  "Partial sea view",
  "Slippers",
  "Complimentary toiletries",
];
function RoomsSection() {
  ///RoomsSection used in LandingPage
  return (
    <Wrapper id="roomSection">
      <h2>Rooms accommodation</h2>
      <p>
        The Lancaster Plaza Beirut offers its precious guests a diverse choice
        of exceptionally designed rooms, each of which has a unique spirit. The
        rooms in our hotel boast a modern and stylish interior and a captivating
        glass façade; they include premium high-tech amenities and have
        aesthetically designed marble bathroom with both a walk-in shower and
        bathtub. Free airport transportation is available on complimentary basis
        in lancaster plaza beirut.
      </p>
      {/* <CarouselBigScreen /> */}
      <div className="rooms">
        <div className="ameneties">
          {ameneties.map((ami) => (
            <p key={ami}>{ami}</p>
          ))}
        </div>

        <CarouselSmScreen />
      </div>
    </Wrapper>
  );
}

export default RoomsSection;
