import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  // GSAP Animation
  useGSAP(() => {
    gsap.from('.success-animate', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2
    });

    // Special animation for the check icon
    gsap.from('.check-animate', {
      scale: 0,
      rotation: -180,
      duration: 1,
      ease: "back.out(1.7)"
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFEDFA] py-12 px-4 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="success-animate mb-6 flex justify-center">
            <CheckCircle className="check-animate h-20 w-20 text-[#DE3163]" />
          </div>
          
          <h1 className="success-animate text-3xl font-bold text-[#DE3163] mb-4">
            Registration Successful!
          </h1>
          
          <p className="success-animate text-gray-600 text-lg mb-8">
            Welcome to our women's health initiative. We're excited to have you join our community of empowered women.
          </p>
          
          <div className="success-animate space-y-4">
            <p className="text-gray-600">
              You'll receive updates and important information via SMS on your registered phone number.
            </p>
            
            <div className="border-t border-gray-100 pt-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">What's Next?</h2>
              <div className="text-left space-y-3">
                <p className="text-gray-600 flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#DE3163] mt-2 mr-2"></span>
                  Check your phone for a welcome message
                </p>
                <p className="text-gray-600 flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#DE3163] mt-2 mr-2"></span>
                  Complete your health profile when prompted
                </p>
                <p className="text-gray-600 flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#DE3163] mt-2 mr-2"></span>
                  Stay tuned for upcoming health sessions in your area
                </p>
              </div>
            </div>
          </div>
          
          <div className="success-animate mt-8">
            <button
              onClick={() => navigate('/')}
              className="w-full py-3 px-4 bg-[#DE3163] text-white rounded-lg font-semibold hover:bg-[#E195AB] transition-colors duration-200"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;