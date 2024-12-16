import { FaApple } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { SiIndeed } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useState } from "react";
import axios from "axios";

const Passengerlogin = () => {


 const navigate =  useNavigate()


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
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: "power2.out",
      }
    );
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


   const [error, setError] = useState(null)


  const handleChange = (e) => {
  const  {name,value} = e.target;
 
  setFormData({
    ...formData,
    [name] :value
  })
    
  }

  // function to the define handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = {
      email  : formData.email,
      password : formData.password
    }


    const response = await axios.post(`${import.meta.env.VITE_BASEURI }/users/login`, loginUser)

    console.log(response.data);
    


    if(response.status === 200){

      localStorage.setItem('token', response.data.token)
      navigate('/dashboard')
    }
    

  };

  return (
    <div className="screen w-screen h-screen flex justify-center items-center">
      <div className="bg-slate-200 p-4 w-96 rounded-md">
        <h2 className="text-2xl text-center heading">Login Account</h2>

        <form onSubmit={handleSubmit} className="p-8">

{error && (
<div className="bg-red-400 text-white p-3 rounded-md">{error}</div>
  
)}

          <div className="mt-2  form-container">
            <label style={{ userSelect: "none" }} htmlFor="ln ame">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 form-container"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2  form-container">
            <label style={{ userSelect: "none" }} htmlFor="Password">
              Password
            </label>
            <input
              type="Password"
              id="Password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <p className="opacity:50 mt-2">
            <Link to="/forgotpassword" className="text-blue-700">
              {" "}
              Forgot Your Password
            </Link>
          </p>

          <button className="bg-blue-700 mt-5 w-full hover:bg-blue-800 text-white font-bold py-3 px-4 rounded">
            Login
          </button>

          <p className="opacity:60 mt-2">
            Create New Account?{" "}
            <Link to="/passenger" className="text-blue-700">
              {" "}
              Click Here
            </Link>
          </p>
        </form>

        <div className="w-full h-[.3px] bg-black mt-1 relative flex justify-center items-center">
          <p className="bg-slate-200 px-3">OR</p>
        </div>

        <div className="flex gap-7 mt-8 justify-center items-center ">
          <button className="bg-black text-white p-2 rounded-md social-button">
            <FaApple />
          </button>
          <button className="bg-blue-600 text-white p-2 rounded-md social-button">
            <MdOutlineFacebook />
          </button>
          <button className="bg-blue-800 text-white p-2 rounded-md social-button">
            <SiIndeed />
          </button>
          <button className="bg-white  p-2 rounded-md social-button">
            <FcGoogle />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Passengerlogin;
