import Wrapper from "../assets/wrapper/CarouselSmScreen";
import { useRef, useState } from "react";
import rooms from "../utils/rooms";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
//used in RoomsSection
export default function CarouselSmScreen() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current?.scrollLeft;
      //scrollLeft in px how much we scroll to left inside that ref(carousel-container),
      // If scrollLeft = 0, equal to the first image is in view.
      // If scrollLeft = 600, equal to the second image is in view.
      // If scrollLeft = 1200, equal to the third image is in view
      // scroll-snap-type: x mandatory; very important to force scroll  moving to next image not hung in the middle
      const width = carouselRef.current?.clientWidth;
      // width is refers to the visible width of the carousel container
      //console.log(carouselRef, scrollLeft, width);
      // div.carousel-container 0 600
      // div.carousel-container 600 600
      // div.carousel-container 1200 600
      // div.carousel-container 1800 600
      setCurrentIndex(Math.round(scrollLeft / width));
      // we determine which image is currently visible.
      //0 mean first children/ carouselRef.current?.children[0]
      //1 mean second children /carouselRef.current?.children[1]
    }
  };

  const handlePrev = () => {
    //console.log(currentIndex);
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      carouselRef.current?.children[prevIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleNext = () => {
    //console.log(currentIndex);
    if (currentIndex < rooms.length - 1) {
      const nextIndex = currentIndex + 1;

      setCurrentIndex(nextIndex);
      carouselRef.current?.children[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <Wrapper>
      <div
        className="carousel-container"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {rooms.map((room, index) => (
          <div className="room" key={index}>
            <img src={room.src} alt={`Room ${index + 1}`} />
            <article>
              <p className="roomName">{room.name}</p>
              <p>
                Max {room.max} <IoPersonOutline />
              </p>
              <p>{room.area} m&sup2;</p>
              <p>{room.bed}</p>
              <Link to={`/roomDetails/${room.name}`}>BOOK </Link>
            </article>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === rooms.length - 1}
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
}
