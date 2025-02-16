import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { volunteerService } from '../services/api';

const ApproveVolunteers = () => {
  const [pendingVolunteers, setPendingVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPendingVolunteers();
  }, []);

  const fetchPendingVolunteers = async () => {
    try {
      setLoading(true);
      const response = await volunteerService.getPendingVolunteers();
      setPendingVolunteers(response.volunteers || []); // Access the volunteers array from response
      setLoading(false);
    } catch (error) {
      console.error('Error fetching pending volunteers:', error);
      setError('Failed to fetch volunteers. Please try again.');
      setLoading(false);
    }
  };

  const handleApprove = async (volunteerId) => {
    try {
      await volunteerService.approveVolunteer(volunteerId);
      // Refresh the list after approval
      fetchPendingVolunteers();
    } catch (error) {
      console.error('Error approving volunteer:', error);
      setError('Failed to approve volunteer. Please try again.');
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-[#FFEDFA] p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
            <button
              className="text-[#DE3163] mt-2 hover:text-[#E195AB]"
              onClick={fetchPendingVolunteers}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-2xl font-bold text-gray-700 mb-6">Pending Volunteers</h1>
          
          {loading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#DE3163] mx-auto"></div>
              <p className="text-gray-600 mt-2">Loading volunteers...</p>
            </div>
          ) : pendingVolunteers.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No pending volunteers to approve</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {pendingVolunteers.map((volunteer) => (
                <div key={volunteer._id} className="bg-gray-50 p-4 rounded-lg flex flex-wrap items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">{volunteer.name}</h3>
                    <p className="text-gray-600 text-sm">{volunteer.email}</p>
                    <p className="text-gray-600 text-sm">Phone: {volunteer.phoneNumber}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Expertise: {volunteer.expertise}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleApprove(volunteer._id)}
                      className="flex items-center px-4 py-2 bg-[#DE3163] text-white rounded-lg hover:bg-[#E195AB] transition-colors duration-200"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve
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

export default ApproveVolunteers;