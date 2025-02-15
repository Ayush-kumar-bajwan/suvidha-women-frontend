import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, ArrowLeft, Plus, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ScheduleEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    healthCategory: '',
    host: localStorage.getItem('adminId')
  });
  const [beneficiaryId, setBeneficiaryId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the authentication token from localStorage
  const authToken = localStorage.getItem('token');

  // Create axios instance with default headers
  const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json'
    }
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axiosInstance.get('/events');
      setEvents(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
      setError('Failed to fetch events. Please try again.');
      if (error.response?.status === 401) {
        // Redirect to login if unauthorized
        navigate('/admin-login');
      }
    }
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // Validate form data
      if (!formData.title || !formData.date || !formData.time || !formData.capacity) {
        setError('Please fill in all required fields');
        return;
      }

      const response = await axiosInstance.post('/events', formData);
      setShowForm(false);
      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        capacity: '',
        healthCategory: '',
        host: localStorage.getItem('adminId')
      });
      fetchEvents();
    } catch (error) {
      console.error('Error creating event:', error);
      setError(error.response?.data?.message || 'Failed to create event. Please try again.');
      if (error.response?.status === 401) {
        navigate('/admin-login');
      }
    }
  };

  const handleRegisterBeneficiary = async (eventId) => {
    setError(null);
    try {
      if (!beneficiaryId) {
        setError('Please enter a beneficiary ID');
        return;
      }

      await axiosInstance.post(`/events/${eventId}/register`, {
        beneficiaryId: beneficiaryId
      });
      setBeneficiaryId('');
      fetchEvents();
    } catch (error) {
      console.error('Error registering beneficiary:', error);
      setError(error.response?.data?.message || 'Failed to register beneficiary. Please try again.');
      if (error.response?.status === 401) {
        navigate('/admin-login');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEDFA] p-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate('/admin-dashboard')}
          className="flex items-center text-[#DE3163] mb-6 hover:text-[#E195AB] transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-700">Events Management</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center px-4 py-2 bg-[#DE3163] text-white rounded-lg hover:bg-[#E195AB] transition-colors duration-200"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </button>
          </div>

          {showForm && (
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Create New Event</h2>
              <form onSubmit={handleCreateEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Event Title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="number"
                  placeholder="Capacity"
                  value={formData.capacity}
                  onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Health Category"
                  value={formData.healthCategory}
                  onChange={(e) => setFormData({...formData, healthCategory: e.target.value})}
                  className="p-2 border rounded-lg"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="p-2 border rounded-lg md:col-span-2"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#DE3163] text-white py-2 px-4 rounded-lg hover:bg-[#E195AB] transition-colors duration-200 md:col-span-2"
                >
                  Create Event
                </button>
              </form>
            </div>
          )}

          {loading ? (
            <p className="text-gray-600">Loading events...</p>
          ) : events.length === 0 ? (
            <p className="text-gray-600">No events scheduled</p>
          ) : (
            <div className="grid gap-4">
              {events.map((event) => (
                <div key={event._id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-gray-800">{event.title}</h3>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                      <p className="text-gray-600 text-sm mt-1">
                        {new Date(event.date).toLocaleDateString()} at {event.time} - {event.location}
                      </p>
                    </div>
                    <div className="text-sm text-[#DE3163]">
                      {event.registeredBeneficiaries?.length || 0}/{event.capacity} registered
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Beneficiary ID"
                      value={beneficiaryId}
                      onChange={(e) => setBeneficiaryId(e.target.value)}
                      className="p-2 border rounded-lg flex-1"
                    />
                    <button
                      onClick={() => handleRegisterBeneficiary(event._id)}
                      className="flex items-center px-4 py-2 bg-[#DE3163] text-white rounded-lg hover:bg-[#E195AB] transition-colors duration-200"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Register Beneficiary
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleEvents;