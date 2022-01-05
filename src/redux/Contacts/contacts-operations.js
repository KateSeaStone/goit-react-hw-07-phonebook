import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apiContacts from "../../services/API/apiContacts";

const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await apiContacts.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, { rejectWithValue }) => {
    const newContact = {
      name: name,
      number: number,
    };
    try {
      const createdContact = await apiContacts.addContact(newContact);
      return createdContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const deletedContact = await apiContacts.deleteContact(id);
      return deletedContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { addContact, deleteContact, fetchContacts };
