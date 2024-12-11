import { useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo/logo.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Animate logo
    gsap.fromTo(
      ".logo",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    // Animate heading
    gsap.fromTo(
      ".heading",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, ease: "elastic.out(1, 0.3)" }
    );

    // Animate button
    gsap.fromTo(
      ".enter-btn",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="screen w-screen h-screen flex justify-center items-center gap-6 flex-col">
      {/* Logo */}
      <img src={logo} alt="Rapido Logo" className="logo w-[110px]" />

      {/* Heading */}
      <h1 className="heading text-center text-lg font-bold">
        Welcome RAPIDO your ride! your way!
      </h1>

      {/* Button */}
      <Link
        to="/chooseoption"
        className="enter-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded flex justify-center items-center gap-2"
      >
        Enter <FaArrowAltCircleRight className="mt-[2px]" />
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
