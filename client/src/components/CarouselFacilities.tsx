import Wrapper from "../assets/wrapper/CarouselFacilities";
import { Facilities } from "../utils/facilities";

function CarouselFacilities({ facilities }: { facilities: Facilities[] }) {
  return (
    <Wrapper>
      {facilities.map((item) => {
        return (
          <figure key={item.head1} className="itemContainer">
            <div className="trans">
              <figcaption>{item.head1}</figcaption>
            </div>

            <img className="image" src={item.src} alt={item.head1} />
          </figure>
        );
      })}
    </Wrapper>
  );
}

export default CarouselFacilities;
