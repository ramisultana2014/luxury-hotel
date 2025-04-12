import Wrapper from "../assets/wrapper/CarouselBigScreen";
import { useState } from "react";
import rooms from "../utils/rooms";
//used in RoomsSection
function CarouselBigScreen() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage: number = 3; // Show 3 images at a time
  // Function to go to the next slide
  const goToNext = (): void => {
    if (currentIndex < rooms.length - itemsPerPage) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  // Function to go to the previous slide
  const goToPrevious = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  return (
    <Wrapper>
      <div className="carousel">
        <button
          className="prev"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        <div className="container">
          <div
            className="slider"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {rooms.map((room) => (
              <div className="slide" key={room.name}>
                <img src={room.src} alt={room.name} />
                <p>{room.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="next"
          onClick={goToNext}
          disabled={currentIndex >= rooms.length - itemsPerPage}
        >
          ▶
        </button>
      </div>
    </Wrapper>
  );
}
export default CarouselBigScreen;
