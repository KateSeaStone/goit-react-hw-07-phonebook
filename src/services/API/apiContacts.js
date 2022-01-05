import axios from "axios";

axios.defaults.baseURL = "https://61d56df12b4f730017a82827.mockapi.io/";

export async function fetchContacts() {
  try {
    const { data } = await axios.get("contacts");
    return data;
  } catch (error) {
    return;
  }
}

export async function addContact(contact) {
  try {
    const { data } = await axios.post("contacts", contact);
    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteContact(id) {
  try {
    const { data } = await axios.delete(`contacts/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}
