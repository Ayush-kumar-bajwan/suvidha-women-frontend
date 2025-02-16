import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BASE_URL } from '../services/api';

const RegisterBeneficiary = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    location: '',
    healthConcerns: []
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // GSAP Animation
  useGSAP(() => {
    gsap.from('.register-animate', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  }, []);

  const healthConcernOptions = [
    'Pregnancy Care',
    'Menstrual Health',
    'Reproductive Health',
    'Nutrition',
    'Mental Health',
    'Cancer Awareness',
    'General Wellness'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHealthConcerns = (concern) => {
    setFormData(prev => {
      const updatedConcerns = prev.healthConcerns.includes(concern)
        ? prev.healthConcerns.filter(item => item !== concern)
        : [...prev.healthConcerns, concern];
      return {
        ...prev,
        healthConcerns: updatedConcerns
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post(`${BASE_URL}/beneficiaries/register`, formData);
      navigate('/registration-success');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEDFA] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="register-animate text-center mb-10">
          <h1 className="text-4xl font-bold text-[#DE3163] mb-3">
            Join Our Health Initiative
          </h1>
          <p className="text-gray-600 text-lg">
            Register to access health resources and join our community of empowered women
          </p>
        </div>

        {error && (
          <div className="register-animate mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-animate bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E195AB] focus:ring-2 focus:ring-[#E195AB] focus:ring-opacity-50"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="18"
                max="100"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E195AB] focus:ring-2 focus:ring-[#E195AB] focus:ring-opacity-50"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E195AB] focus:ring-2 focus:ring-[#E195AB] focus:ring-opacity-50"
                placeholder="Enter 10-digit phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E195AB] focus:ring-2 focus:ring-[#E195AB] focus:ring-opacity-50"
                placeholder="Enter your village/city name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Health Concerns</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {healthConcernOptions.map((concern) => (
                  <div
                    key={concern}
                    onClick={() => handleHealthConcerns(concern)}
                    className={`cursor-pointer p-3 rounded-lg text-sm text-center transition-colors duration-200 ${
                      formData.healthConcerns.includes(concern)
                        ? 'bg-[#DE3163] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#FFEDFA]'
                    }`}
                  >
                    {concern}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[#DE3163] text-white rounded-lg font-semibold hover:bg-[#E195AB] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Registering...' : 'Register Now'}
            </button>
          </div>
        </form>

        <div className="register-animate mt-6 text-center text-gray-600">
          <p>By registering, you agree to join our initiative for better health and wellness.</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterBeneficiary;