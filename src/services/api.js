import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const volunteerService = {
  getPendingVolunteers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/volunteers/pending`);
      return response.data;
    } catch (error) {
      console.error('Error fetching pending volunteers:', error);
      throw error;
    }
  },

  getApprovedVolunteers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/volunteers/approved`);
      return response.data;
    } catch (error) {
      console.error('Error fetching approved volunteers:', error);
      throw error;
    }
  },

  approveVolunteer: async (volunteerId) => {
    try {
      const response = await axios.put(`${BASE_URL}/volunteers/approve/${volunteerId}`);
      return response.data;
    } catch (error) {
      console.error('Error approving volunteer:', error);
      throw error;
    }
  }
};

export const beneficiaryService = {
  getAllBeneficiaries: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/beneficiaries/all`);
      return response.data;
    } catch (error) {
      console.error('Error fetching beneficiaries:', error);
      throw error;
    }
  }
};

export const eventService = {
  getAllEvents: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/events`);
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  createEvent: async (eventData) => {
    try {
      const response = await axios.post(`${BASE_URL}/events`, eventData);
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  registerBeneficiary: async (eventId, beneficiaryId) => {
    try {
      const response = await axios.post(`${BASE_URL}/events/${eventId}/register`, {
        beneficiaryId
      });
      return response.data;
    } catch (error) {
      console.error('Error registering beneficiary:', error);
      throw error;
    }
  }
};