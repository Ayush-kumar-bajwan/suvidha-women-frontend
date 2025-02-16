import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Shield } from 'lucide-react';
import axios from 'axios';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BASE_URL } from '../services/api';

const AdminLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      navigate('/admin-dashboard');
    }else{
      navigate('/admin-login')
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.from('.login-animate', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2
    });
  }, []);

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

    try {
      const response = await axios.post(`${BASE_URL}/admins/login`, formData);
      const { token } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('adminToken', token);
      
      // Navigate to admin dashboard
      navigate('/admin-dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEDFA] py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="login-animate text-center mb-10">
          <Shield className="h-16 w-16 text-[#DE3163] mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-[#DE3163] mb-3">
            Admin Login
          </h1>
          <p className="text-gray-600 text-lg">
            Access your admin dashboard
          </p>
        </div>

        {error && (
          <div className="login-animate mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-animate bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
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
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#E195AB] focus:ring-2 focus:ring-[#E195AB] focus:ring-opacity-50"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[#DE3163] text-white rounded-lg font-semibold hover:bg-[#E195AB] transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;