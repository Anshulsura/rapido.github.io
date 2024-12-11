import { useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo/logo.png";
import { FaRegUser } from "react-icons/fa";
import Footer from "../components/Footer";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Chooseoption = () => {
  const navigate = useNavigate();

  const handleClick = (role) => {
    if (role === "passenger") {
      navigate("/passenger");
    } else if (role === "captain") {
      navigate("/captain");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    // Animate back button
    gsap.fromTo(
      ".back-btn",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    // Animate logo
    gsap.fromTo(
      ".logo",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
    );

    // Animate heading
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    // Animate buttons
    gsap.fromTo(
      ".option-btn",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3, delay: 1 }
    );
  }, []);

  return (
    <div className="screen w-screen h-screen flex justify-center items-center flex-col gap-9">
      {/* Back Button */}
      <button
        onClick={() => handleClick()}
        className="back-btn btn btn-blue fixed top-2 left-2 text-2xl"
      >
        <IoArrowBackSharp />
      </button>

      {/* Logo */}
      <img src={logo} alt="Logo" className="logo w-[90px]" />

      {/* Heading */}
      <h1 className="heading text-3xl font-semibold">Select Your Role!</h1>

      {/* Buttons */}
      <div className="flex gap-3 justify-center p-5 w-screen">
        <button
          className="option-btn gap-1 bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-5 rounded flex items-center text-[20px] w-[200px] justify-center"
          onClick={() => handleClick("passenger")}
        >
          <FaRegUser />
          Passenger
        </button>
        <button
          className="option-btn gap-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-5 rounded flex items-center text-[20px] w-[200px] justify-center"
          onClick={() => handleClick("captain")}
        >
          <FaRegUser />
          Captain
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Chooseoption;
