import charming from "../assets/images/charmingroom.jpg";
import noble from "../assets/images/noblesuite.jpg";
import plaza from "../assets/images/plazasuite.jpg";
import glory from "../assets/images/glorysuite.jpg";
import Executivesuite from "../assets/images/Executivesuite.jpg";
import elegantroom from "../assets/images/elegantroom.jpg";
import pleasantroom from "../assets/images/pleasantroom.jpg";

export type Rooms = {
  name: string;
  src: string;
  area: number;
  max: number;
  bed: string;
};

const rooms: Rooms[] = [
  {
    name: "Noble Suite",
    src: noble,
    area: 170,
    max: 5,
    bed: "1 king size bed - twin beds",
  },
  {
    name: "Plaza Suite",
    src: plaza,
    area: 60,
    max: 3,
    bed: "1 king size bed",
  },
  {
    name: "Glory Suite",
    src: glory,
    area: 70,
    max: 5,
    bed: "1 king size bed - twin beds",
  },
  {
    name: "Executive Suite",
    src: Executivesuite,
    area: 66,
    max: 3,
    bed: "1 king size bed",
  },
  {
    name: "Charming Room",
    src: charming,
    area: 35,
    max: 3,
    bed: "1 king size bed",
  },

  {
    name: "Elegant Room",
    src: elegantroom,
    area: 33,
    max: 3,
    bed: "twin beds",
  },
  {
    name: "Pleasant Room",
    src: pleasantroom,
    area: 30,
    max: 2,
    bed: "1 king size bed",
  },
];
export default rooms;
