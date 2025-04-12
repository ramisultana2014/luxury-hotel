import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  // the trick for header transparacy was made in LandingPage.tsx with Wrapper
  //header style in LandingPage.ts
  // const scrollToSection = (id) => {
  //   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  // };
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Stop 100px before the section
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  //   getBoundingClientRect().top → Gets the section's position relative to the viewport.
  // window.scrollY → Gets current scroll position.
  // Subtracting 100px → Moves the scroll target slightly above the section.
  // window.scrollTo → Smoothly scrolls to the adjusted position.
  return (
    <header>
      <nav className="btns">
        <button onClick={() => scrollToSection("homeSection")}>home</button>
        <button onClick={() => scrollToSection("roomSection")}>rooms</button>
        <button onClick={() => scrollToSection("facilities")}>
          facilities
        </button>
        <button onClick={() => scrollToSection("info")}>location</button>
      </nav>
      {/* <button onClick={() => scrollToSection("roomSection")} className="book">
        BOOK NOW
      </button> */}
      <Link to="/">
        <img src={logo} alt="lancatster" />
      </Link>
    </header>
  );
}

export default Header;
