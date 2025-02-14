import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, MapPin, Clock, User, Filter, Users, Heart, AlertCircle } from 'lucide-react';




// Color palette for reference:
// Primary Pink: #DE3163
// Light Pink: #E195AB
// Background Pink: #FFEDFA

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [registering, setRegistering] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setError(null);
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      setError('Failed to fetch events. Please try again later.');
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (eventId) => {
    try {
      setRegistering(true);
      // Assuming you have the beneficiaryId from auth context or similar
      const beneficiaryId = 'your-beneficiary-id';
      await axios.post(`/api/events/${eventId}/register`, { beneficiaryId });
      // Refresh events after registration
      fetchEvents();
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setRegistering(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const sortEvents = (events) => {
    return [...events].sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'capacity':
          return b.capacity - a.capacity;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  };

  const filteredEvents = sortEvents(events).filter(event => {
    const matchesFilter = filter === 'all' || event.status === filter;
    const matchesCategory = selectedCategory === 'all' || event.healthCategory === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesCategory && matchesSearch;
  });

  return (
    <>
      
      <div className="min-h-screen bg-[#FFEDFA] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#DE3163] mb-8 text-center">
            Health Events
          </h1>

          {error && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-600">{error}</AlertDescription>
            </Alert>
          )}

          <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Search Events</label>
                <input
                  type="text"
                  placeholder="Search by title, description, or location"
                  className="w-full rounded-lg border-gray-300 focus:border-[#E195AB] focus:ring-[#E195AB]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Event Status</label>
                <select
                  className="w-full rounded-lg border-gray-300 focus:border-[#E195AB] focus:ring-[#E195AB]"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Events</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="expired">Past Events</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Health Category</label>
                <select
                  className="w-full rounded-lg border-gray-300 focus:border-[#E195AB] focus:ring-[#E195AB]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="Pregnancy">Pregnancy</option>
                  <option value="Cancer Awareness">Cancer Awareness</option>
                  <option value="Eye Health">Eye Health</option>
                  <option value="Obesity">Obesity</option>
                  <option value="General Wellness">General Wellness</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Sort By</label>
                <select
                  className="w-full rounded-lg border-gray-300 focus:border-[#E195AB] focus:ring-[#E195AB]"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="date">Date</option>
                  <option value="capacity">Capacity</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DE3163] mx-auto"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <span
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white text-sm font-semibold text-[#DE3163]">
                      {event.healthCategory}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-2 text-[#E195AB]" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-2 text-[#E195AB]" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-2 text-[#E195AB]" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <User className="w-5 h-5 mr-2 text-[#E195AB]" />
                        Host: {event.host.name}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2 text-[#E195AB]" />
                        {event.registeredBeneficiaries.length} / {event.capacity} registered
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                          event.status === 'expired' || event.registeredBeneficiaries.length >= event.capacity
                            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                            : 'bg-[#DE3163] text-white hover:bg-[#E195AB]'
                        }`}
                        disabled={event.status === 'expired' || registering || event.registeredBeneficiaries.length >= event.capacity}
                        onClick={() => handleRegister(event._id)}
                      >
                        {event.status === 'expired'
                          ? 'Event Ended'
                          : event.registeredBeneficiaries.length >= event.capacity
                          ? 'Event Full'
                          : registering
                          ? 'Registering...'
                          : 'Register Now'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
                <Heart className="w-12 h-12 text-[#E195AB] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Events Found</h3>
                <p className="text-gray-600">
                  We couldn't find any events matching your criteria. Try adjusting your filters or check back later.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    
    </>
  );
};

export default EventsPage;