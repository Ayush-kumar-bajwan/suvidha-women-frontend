import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Homepage = () => {
  useGSAP(() => {
    gsap.from(".Animate", {
      opacity: 0,
      y: 50,
      duration: 1.1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Animate",
        start: "top 80%", // Start animation when element is 80% in viewport
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#FFEDFA] text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: "url('/women.jpg')" }}>
        <div className="absolute inset-0 bg-[#DE3163]/60"></div>
        <div className="z-10 px-6 md:px-12">
          <h1 className="Animate text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Empowering Rural Women for a Healthier Tomorrow
          </h1>
          <p className="Animate mt-4 text-lg md:text-xl text-white drop-shadow-md max-w-2xl mx-auto">
            Providing access to healthcare, education, and wellness resources for women in need.
          </p>
          <Link to="/register-user">
            <button className=" mt-6 px-6 py-3 text-lg font-semibold bg-white text-[#DE3163] rounded-lg shadow-md transition-all hover:bg-[#c42854] hover:text-white hover:scale-105">
              Register for Workshop
            </button>
          </Link>
        </div>
      </div>
      
      {/* Why Suvidha? */}
      <div className="px-6 md:px-12 py-16 text-center">
        <h2 className="Animate text-3xl md:text-4xl font-semibold text-[#DE3163]">
          Why Women's Health Matters?
        </h2>
        <p className="Animate mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Millions of women in rural areas lack access to healthcare, face societal taboos, and struggle with awareness.
          Suvidha aims to bridge this gap by providing essential health and wellness resources.
        </p>
      </div>
      
      {/* Our Initiatives */}
      <div className="px-6 md:px-12 py-16 bg-[#E195AB]/20 text-center">
        <h2 className="Animate text-3xl md:text-4xl font-semibold text-[#DE3163]">
          Our Key Initiatives
        </h2>
        <div className="Animate mt-8 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#DE3163]">Pregnancy Care</h3>
            <p className="mt-2 text-gray-700">Providing guidance and health checkups for expecting mothers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#DE3163]">Menstrual Hygiene</h3>
            <p className="mt-2 text-gray-700">Spreading awareness and breaking societal taboos around periods.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#DE3163]">Health Camps</h3>
            <p className="mt-2 text-gray-700">Organizing free checkups, workshops, and wellness programs.</p>
          </div>
        </div>
      </div>
      
      {/* Join Us */}
      <div className="px-6 md:px-12 py-16 text-center">
        <h2 className="Animate text-3xl md:text-4xl font-semibold text-[#DE3163]">
          Join the Suvidha Movement
        </h2>
        <p className="Animate mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Become a volunteer or beneficiary and contribute to women's health & wellness.
        </p>
        <Link to="/volunteer-register">
          <button className="  t-6 px-6 py-3 text-lg font-semibold bg-[#DE3163] text-white rounded-lg shadow-md transition-all hover:bg-[#c42854] hover:scale-105">
            Get Involved
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
