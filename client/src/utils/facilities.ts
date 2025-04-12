import spa from "../assets/images/spa.jpg";
import res from "../assets/images/res.jpg";
import poll from "../assets/images/poll.jpg";
import wed from "../assets/images/weddings.jpg";

export type Facilities = {
  src: string;
  head1: string;
  head2: string;
  par2: string;
};
const facilities: Facilities[] = [
  {
    src: spa,
    head1: "Gym & Spa",
    head2: "Gym & Spa",
    par2: "La Foglia Health Club & Spa",
  },
  {
    src: poll,
    head1: "Swimming",
    head2: "Swimming",
    par2: "Amazing View",
  },
  {
    src: res,
    head1: "Restaurants",
    head2: "Restaurants",
    par2: "Delecious Food",
  },
  {
    src: wed,
    head1: "Weddings",
    head2: "Weddings",
    par2: "Ball Rooms",
  },
];
export default facilities;
