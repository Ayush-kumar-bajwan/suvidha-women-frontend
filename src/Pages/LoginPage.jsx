import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Shield } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const LoginOptions = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from('.option-animate', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFEDFA] py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="option-animate text-center mb-10">
          <h1 className="text-4xl font-bold text-[#DE3163] mb-3">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-lg">
            Choose how you want to continue
          </p>
        </div>

        <div className="option-animate space-y-4">
          <button
            onClick={() => navigate('/volunteer-register')}
            className="w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-4 group"
          >
            <UserPlus className="h-6 w-6 text-[#DE3163] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xl font-semibold text-gray-700">Continue as Volunteer</span>
          </button>

          <button
            onClick={() => navigate('/admin-login')}
            className="w-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-4 group"
          >
            <Shield className="h-6 w-6 text-[#DE3163] group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xl font-semibold text-gray-700">Continue as Admin</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;