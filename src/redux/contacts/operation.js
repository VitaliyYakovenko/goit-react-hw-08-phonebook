import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /tasks
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (user, {rejectWithValue}) => {
    try {
      const response = await axios.post('/contacts', user);
      
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, {rejectWithValue}) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

