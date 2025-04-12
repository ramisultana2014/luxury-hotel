import Wrapper from "../assets/wrapper/LandingPage";
import {
  FacilitiesSection,
  Header,
  HeroSection,
  RoomsSection,
} from "../components";
import { lazy, Suspense, useEffect, useState } from "react";
const FooterSection = lazy(() => import("../components/FooterSection.tsx"));
function LandingPage() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 200); // Change header background after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper scrolled={scrolled ? "true" : ""}>
      <Header />
      <HeroSection />
      <RoomsSection />
      <FacilitiesSection />
      <Suspense fallback={<div>loading</div>}>
        <FooterSection />
      </Suspense>
    </Wrapper>
  );
}

export default LandingPage;
