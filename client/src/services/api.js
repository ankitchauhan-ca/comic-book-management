/*
import axios from "axios";

const API_URL = "http://localhost:5001/api/comicbooks";

export const fetchComicBooks = async (page = 1, limit = 10, filter = {}) => {
  const response = await axios.get(API_URL, {
    params: { page, limit, filter },
  });
  return response.data;
};

export const createComicBook = async (comicBook) => {
  const response = await axios.post(API_URL, comicBook);
  return response.data;
};

export const updateComicBook = async (id, comicBook) => {
  const response = await axios.put(`${API_URL}/${id}`, comicBook);
  return response.data;
};

export const deleteComicBook = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const fetchComicBookById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

*/

import axios from "axios";

const COMIC_API_URL = "http://localhost:5001/api/comicbooks";
const AUTH_API_URL = "http://localhost:5001/api/auth";

// Comic Book Operations
export const fetchComicBooks = async (page = 1, limit = 10, filter = {}) => {
  try {
    const response = await axios.get(COMIC_API_URL, {
      params: { page, limit, ...filter },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching comic books:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const createComicBook = async (comicBook) => {
  try {
    const response = await axios.post(COMIC_API_URL, comicBook);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating comic book:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateComicBook = async (id, comicBook) => {
  try {
    const response = await axios.put(`${COMIC_API_URL}/${id}`, comicBook);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating comic book:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const deleteComicBook = async (id) => {
  try {
    await axios.delete(`${COMIC_API_URL}/${id}`);
  } catch (error) {
    console.error(
      "Error deleting comic book:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchComicBookById = async (id) => {
  try {
    const response = await axios.get(`${COMIC_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching comic book details:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Authentication Operations
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error during signup:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const signin = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_API_URL}/signin`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error during signin:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const fetchUserDetails = async (token) => {
  try {
    const response = await axios.get(`${AUTH_API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user details:",
      error.response?.data || error.message
    );
    throw error;
  }
};
