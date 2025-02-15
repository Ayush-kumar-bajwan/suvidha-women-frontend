import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageCircle, 
  Settings,
  LogOut,
  UserPlus,
  Activity
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from('.dashboard-animate', {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };
  

  const stats = [
    { title: 'Total Beneficiaries', value: '2,543', icon: Users },
    { title: 'Pending Volunteers', value: '12', icon: UserPlus },
    { title: 'Active Events', value: '8', icon: Calendar },
    { title: 'Total Sessions', value: '156', icon: Activity }
  ];

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
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-[#DE3163]" />
                <span className="text-2xl font-bold text-gray-700">{stat.value}</span>
              </div>
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="dashboard-animate mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <UserPlus className="h-5 w-5 text-[#DE3163] mr-2" />
              <span className="text-gray-700">Approve Volunteers</span>
            </button>
            <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <Calendar className="h-5 w-5 text-[#DE3163] mr-2" />
              <span className="text-gray-700">Schedule Event</span>
            </button>
            <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <MessageCircle className="h-5 w-5 text-[#DE3163] mr-2" />
              <span className="text-gray-700">Send Notifications</span>
            </button>
          </div>
        </div>

        {/* Recent Activity Placeholder */}
        <div className="dashboard-animate bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Recent Activity</h2>
            <button className="text-[#DE3163] hover:text-[#E195AB] transition-colors duration-200">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#DE3163] mr-3"></div>
                  <div>
                    <p className="text-gray-700">New volunteer registration</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <button className="text-sm text-[#DE3163] hover:text-[#E195AB]">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;