import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import axios from 'axios';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const VolunteerRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    expertise: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.from('.register-animate', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  }, []);

  const expertiseOptions = [
    'Health Education',
    'Community Outreach',
    'Medical Professional',
    'Mental Health Support',
    'Event Organization',
    'Social Work'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post('/api/volunteers/register', formData);
      setSuccess('Registration successful! Please wait for admin approval.');
      setTimeout(() => navigate('/'), 3000);
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
            Join as a Volunteer
          </h1>
          <p className="text-gray-600 text-lg">
            Help us make a difference in women's health
          </p>
        </div>

        {error && (
          <div className="register-animate mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {success && (
          <div className="register-animate mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="h-4 w-4 text-green-600 mr-2" />
            <p className="text-green-600">{success}</p>
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
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E195AB] focus:ring-2 focus:ring-[#E195AB] focus:ring-opacity-50"
                placeholder="Enter your email"
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
              <label className="block text-gray-700 font-medium mb-2">Expertise</label>
              <select
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E195AB] focus:ring-2 focus:ring-[#E195AB] focus:ring-opacity-50"
              >
                <option value="">Select your expertise</option>
                {expertiseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[#DE3163] text-white rounded-lg font-semibold hover:bg-[#E195AB] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Registering...' : 'Register as Volunteer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerRegister;