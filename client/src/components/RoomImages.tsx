import { useState } from "react";
import { GrFormNext } from "react-icons/gr";

function RoomImages({ images }: { images: string[] }) {
  const [cur, setCur] = useState<number>(0);
  function handleClick() {
    if (cur >= 0 && cur < 2) {
      setCur((c) => c + 1);
    } else {
      setCur(0);
    }
  }

  return (
    <div className="roomImagesContainer">
      <img src={`/roomsDetails/${images[cur]}`} />

      <button className="btn" onClick={handleClick}>
        <GrFormNext />
      </button>
    </div>
  );
}
export default RoomImages;
