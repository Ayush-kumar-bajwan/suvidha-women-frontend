import { IoMdArrowDropright } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Aboutpage = () => {
  return (
    <div className="w-full h-full pt-1 pb-1 bg-[#FFEDFA] text-gray-900">
      {/* Hero Image */}
      <div className="w-full flex justify-center mt-20 px-4">
        <img
          className="w-full max-w-4xl h-[50vh] object-cover rounded-2xl shadow-lg"
          src="/about.jpg"
          alt="About Us"
        />
      </div>

      {/* Our Story Section */}
      <div className="max-w-3xl mx-auto px-6 text-center mt-16">
        <h1 className="text-4xl text-[#DE3163] font-bold">Our Story</h1>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          Suvidha Mahila Mandal, established on **September 8, 1995**, is a non-profit organization dedicated to
          **empowering financially challenged communities** through education. We provide opportunities for **student internships, mentorships, and volunteering**, ensuring innovative education that prepares students for the future.
        </p>
      </div>

      {/* Our Reach & Impact */}
      <div className="max-w-3xl mx-auto px-6 text-center mt-16">
        <h1 className="text-4xl text-[#DE3163] font-bold">Our Reach and Impact</h1>
        <ul className="mt-6 text-lg text-gray-700 leading-relaxed text-left">
          <li className="flex items-center gap-2">
            <IoMdArrowDropright className="text-[#DE3163] text-2xl" />
            **Regular workshops & health programs** in rural villages.
          </li>
          <li className="flex items-center gap-2">
            <IoMdArrowDropright className="text-[#DE3163] text-2xl" />
            **Collaboration with local doctors & NGOs** for medical assistance.
          </li>
          <li className="flex items-center gap-2">
            <IoMdArrowDropright className="text-[#DE3163] text-2xl" />
            **Educational programs** for young girls and women.
          </li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="max-w-3xl mx-auto px-6 text-center mt-16 mb-20">
        <h1 className="text-4xl text-[#DE3163] font-bold">Connect with Us</h1>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/company/suvidha-foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-[#DE3163] transition-all"
          >
            <FaLinkedin className="text-4xl text-[#DE3163]" />
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/suvidha_mahila_mandal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-[#DE3163] transition-all"
          >
            <FaInstagramSquare className="text-4xl text-[#DE3163]" />
            Instagram
          </a>

          <a
            href="https://www.facebook.com/suvidhamahilamandal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-[#DE3163] transition-all"
          >
            <FaFacebook className="text-4xl text-[#DE3163]" />
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
