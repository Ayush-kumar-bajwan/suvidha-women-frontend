import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageCircle, 
  LogOut,
  UserPlus,
  Activity,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { volunteerService, beneficiaryService, eventService } from '../services/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalBeneficiaries: 0,
    pendingVolunteers: 0,
    approvedVolunteers: 0,
    activeEvents: 0
  });
  const [recentEvents, setRecentEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const eventsPerPage = 5;

  useGSAP(() => {
    gsap.from('.dashboard-animate', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2
    });
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [pendingVols, approvedVols, beneficiaries, events] = await Promise.all([
        volunteerService.getPendingVolunteers(),
        volunteerService.getApprovedVolunteers(),
        beneficiaryService.getAllBeneficiaries(),
        eventService.getAllEvents()
      ]);

      setStats({
        pendingVolunteers: pendingVols.total || pendingVols.volunteers.length,
        approvedVolunteers: approvedVols.total || approvedVols.volunteers.length,
        totalBeneficiaries: beneficiaries.total || beneficiaries.beneficiaries.length,
        activeEvents: Array.isArray(events) ? events.length : 0
      });

      // Sort events by date and get upcoming ones
      const upcomingEvents = (Array.isArray(events) ? events : [])
        .filter(event => new Date(event.date) >= new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice((currentPage - 1) * eventsPerPage, currentPage * eventsPerPage);

      setRecentEvents(upcomingEvents);
      setTotalPages(Math.ceil((Array.isArray(events) ? events.length : 0) / eventsPerPage));
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [currentPage]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  const formatDateTime = (date, time) => {
    return new Date(`${date}T${time}`).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  const navigateToSection = (section) => {
    switch(section) {
      case 'volunteers':
        navigate('/admin-dashboard/approve-volunteers');
        break;
      case 'events':
        navigate('/admin-dashboard/schedule-events');
        break;
      case 'notifications':
        navigate('/send-notifications');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEDFA]">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <LayoutDashboard className="h-8 w-8 text-[#DE3163]" />
              <span className="ml-2 text-xl font-semibold text-gray-700">Admin Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center ml-4 px-4 py-2 text-sm text-[#DE3163] hover:bg-[#FFEDFA] rounded-lg transition-colors duration-200"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="dashboard-animate mb-8">
          <h1 className="text-3xl font-bold text-gray-700">Welcome, Admin</h1>
          <p className="text-gray-600 mt-2">Here's what's happening in your women's health initiative.</p>
        </div>

        {/* Stats Grid */}
        <div className="dashboard-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-[#DE3163]" />
              <span className="text-2xl font-bold text-gray-700">{stats.totalBeneficiaries}</span>
            </div>
            <h3 className="text-gray-600 font-medium">Total Beneficiaries</h3>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <Clock className="h-8 w-8 text-[#DE3163]" />
              <span className="text-2xl font-bold text-gray-700">{stats.pendingVolunteers}</span>
            </div>
            <h3 className="text-gray-600 font-medium">Pending Volunteers</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="h-8 w-8 text-[#DE3163]" />
              <span className="text-2xl font-bold text-gray-700">{stats.approvedVolunteers}</span>
            </div>
            <h3 className="text-gray-600 font-medium">Approved Volunteers</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="h-8 w-8 text-[#DE3163]" />
              <span className="text-2xl font-bold text-gray-700">{stats.activeEvents}</span>
            </div>
            <h3 className="text-gray-600 font-medium">Active Events</h3>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-animate mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => navigateToSection('volunteers')}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <UserPlus className="h-5 w-5 text-[#DE3163] mr-2" />
              <span className="text-gray-700">Approve Volunteers</span>
            </button>
            <button 
              onClick={() => navigateToSection('events')}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Calendar className="h-5 w-5 text-[#DE3163] mr-2" />
              <span className="text-gray-700">Schedule Event</span>
            </button>
            <button 
              onClick={() => navigateToSection('notifications')}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <MessageCircle className="h-5 w-5 text-[#DE3163] mr-2" />
              <span className="text-gray-700">Send Notifications</span>
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="dashboard-animate bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Upcoming Events</h2>
            <button 
              onClick={() => navigateToSection('events')}
              className="text-[#DE3163] hover:text-[#E195AB] transition-colors duration-200"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <div key={event._id} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#DE3163] mr-3"></div>
                  <div>
                    <p className="text-gray-700">{event.title}</p>
                    <p className="text-sm text-gray-500">
                      {formatDateTime(event.date, event.time)} at {event.location}
                    </p>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-[#DE3163]">
                    {event.registeredBeneficiaries?.length || 0}/{event.capacity} registered
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? 'bg-[#DE3163] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;