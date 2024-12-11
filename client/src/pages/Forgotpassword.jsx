import { FaApple } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { SiIndeed } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Forgotpassword = () => {
  return (
    <div className="screen w-screen h-screen flex justify-center items-center">
      <div className="bg-slate-200 p-4 w-96 rounded-md">
        <h2 className="text-2xl text-center">Forgot Password Form</h2>

        <form action="" className="p-8">
          <div className="mt-2">
            <label style={{ userSelect: "none" }} htmlFor="ln ame">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
              placeholder="Enter your Email"
            />
          </div>

          <p className="opacity:50 mt-2">
            <Link to="/forgotpassword" className="text-blue-700">
              {" "}
              Try Another Way
            </Link>
          </p>

          <button className="bg-blue-700 mt-5 w-full hover:bg-blue-800 text-white font-bold py-3 px-4 rounded">
            Send OTP
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Forgotpassword;
