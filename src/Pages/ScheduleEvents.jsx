import { useState, useEffect } from "react";
import axios from "axios";
import { PlusCircle, Users } from "lucide-react";
import gsap from "gsap";

const ScheduleEvents = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [host, setHost] = useState("");  // Set with admin's volunteer ID
  const [capacity, setCapacity] = useState(10);
  const [healthCategory, setHealthCategory] = useState("General Wellness");
  const [beneficiaryId, setBeneficiaryId] = useState("");

   // Replace with actual token

  useEffect(() => {
    fetchEvents();
    gsap.from(".event-card", { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleCreateEvent = async () => {
    try {
      const token = localStorage.getItem("adminToken"); // Fetch token from local storage
  
      if (!token) {
        alert("You must be logged in to create an event!");
        return;
      }
  
      const res = await axios.post(
        "http://localhost:8000/api/events",
        {
          title,
          description,
          date,
          time,
          location,
          host,
          capacity,
          healthCategory,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use token from local storage
          },
        }
      );
  
      alert("Event created successfully!");
      fetchEvents();
    } catch (err) {
      console.error("Error creating event:", err);
      alert("Failed to create event. Check required fields.");
    }
  };
  

  const handleRegisterBeneficiary = async (eventId) => {
    try {
      await axios.post(`http://localhost:8000/api/events/${eventId}/register`, {
        beneficiaryId,
      });
      alert("Beneficiary registered successfully!");
      fetchEvents();
    } catch (err) {
      console.error("Error registering beneficiary:", err);
      alert("Failed to register beneficiary.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        Schedule & Manage Events
      </h1>

      {/* Create Event Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Create a New Event
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Host (Admin ID)"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="p-2 border rounded"
          />
          {/* Health Category Dropdown */}
          <select
            value={healthCategory}
            onChange={(e) => setHealthCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="Pregnancy">Pregnancy</option>
            <option value="Cancer Awareness">Cancer Awareness</option>
            <option value="Eye Health">Eye Health</option>
            <option value="Obesity">Obesity</option>
            <option value="General Wellness">General Wellness</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          onClick={handleCreateEvent}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all flex items-center"
        >
          <PlusCircle className="mr-2" />
          Create Event
        </button>
      </div>

      {/* List of Existing Events */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="event-card bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.description}</p>
            <p className="text-sm text-gray-600">
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Time:</strong> {event.time}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> {event.healthCategory}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Capacity:</strong> {event.capacity}
            </p>
            <input
              type="text"
              placeholder="Beneficiary ID"
              value={beneficiaryId}
              onChange={(e) => setBeneficiaryId(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
            />
            <button
              onClick={() => handleRegisterBeneficiary(event._id)}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all flex items-center"
            >
              <Users className="mr-2" />
              Register Beneficiary
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleEvents;
