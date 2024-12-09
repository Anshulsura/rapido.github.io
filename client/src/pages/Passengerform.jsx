import { useEffect } from "react";
import { gsap } from "gsap";
import { FaApple } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { SiIndeed } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Passengerform = () => {
  useEffect(() => {
    // Animate form container
    gsap.fromTo(
      ".form-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Animate social buttons
    gsap.fromTo(
      ".social-button",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, delay: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="screen w-screen h-screen flex justify-center items-center">
      <div className="form-container bg-slate-200 p-4 w-96 rounded-md">
        <h2 className="text-2xl text-center">Create New Account</h2>

        <form action="" className="p-8">
          <div className="flex gap-3">
            <div>
              <label style={{ userSelect: "none" }} htmlFor="fname">
                First name
              </label>
              <input
                type="text"
                id="fname"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label style={{ userSelect: "none" }} htmlFor="lname">
                Last name
              </label>
              <input
                type="text"
                id="lname"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
                placeholder="Enter your Last name"
              />
            </div>
          </div>

          <div className="mt-2">
            <label style={{ userSelect: "none" }} htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mt-2">
            <label style={{ userSelect: "none" }} htmlFor="Password">
              Password
            </label>
            <input
              type="Password"
              id="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
              placeholder="Enter your Password"
            />
          </div>

          <button className="bg-blue-700 mt-5 w-full hover:bg-blue-800 text-white font-bold py-3 px-4 rounded">
            Submit
          </button>

          <p className="opacity:60 mt-2">
            Already Have An Account?{" "}
            <Link to="/passengerlogin" className="text-blue-700">
              Click Here
            </Link>
          </p>
        </form>

        <div className="w-full h-[.3px] bg-black mt-1 relative flex justify-center items-center">
          <p className="bg-slate-200 px-3">OR</p>
        </div>

        <div className="flex gap-7 mt-8 justify-center items-center">
          <button className="social-button bg-black text-white p-2 rounded-md">
            <FaApple />
          </button>
          <button className="social-button bg-blue-600 text-white p-2 rounded-md">
            <MdOutlineFacebook />
          </button>
          <button className="social-button bg-blue-800 text-white p-2 rounded-md">
            <SiIndeed />
          </button>
          <button className="social-button bg-white p-2 rounded-md">
            <FcGoogle />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Passengerform;
