import axios from "axios";
import { toast } from "react-toastify";
// types/UserType.ts
export interface UserType {
  user_id: string;
  user_first_name: string;
  user_last_name: string;
  user_email: string;
  user_phone_number: string;
  role_id: number;
  user_img?: string;
  active_user_status: number; // 1 = Active, 0 = Inactive
  uuid: string;
}

const api_url = import.meta.env.VITE_API_URL.replace(/\/$/, "");

// Function to get auth token
const getAuthToken = (): string | null => {
  return localStorage.getItem("token");
};

// Axios instance with default config
const apiClient = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add user function

const addUser = async (formData: object): Promise<any> => {
  const token = getAuthToken();
  if (!token) {
    toast.error("Authentication token is missing!");
    return;
  }

  try {
    const response = await apiClient.post("/users", formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("User added successfully!");
    return response.data;
  } catch (error: any) {
    // console.error("Error adding user:", error.response?.data || error.message);
    toast.error(error.response?.data?.message || "Failed to add user");
    throw error;
  }
};

// Get all users function
const getUsers = async (): Promise<any> => {
  const token = getAuthToken();
  if (!token) {
    toast.error("Please log in to get all users!");
    return;
  }

  try {
    const response = await apiClient.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    // console.error(
    //   "Error fetching users:",
    //   error.response?.data || error.message
    // );
    toast.error(error.response?.data?.message || "Failed to fetch users");
    throw error;
  }
};

// Get users by role
const getUsersByRole = async (roleId: number): Promise<any> => {
  const token = getAuthToken();
  if (!token) {
    toast.error("Authentication token is missing!");
    return;
  }

  try {
    const response = await apiClient.get(`/users/role/${roleId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    // console.error(
    //   "Error fetching users by role:",
    //   error.response?.data || error.message
    // );
    toast.error(
      error.response?.data?.message || "Failed to fetch users by role"
    );
    throw error;
  }
};
// Fetch customers (role_id = 1)
const getCustomers = async (): Promise<UserType[]> => {
  try {
    const customers = await getUsersByRole(1); // Call to get users by role ID 1 (customers)
    // console.log("Filtered Customers:", customers);
    return customers;
  } catch (error) {
    // console.error("Error fetching customers:", error);
    throw error;
  }
};

// Fetch employees (role_id = 2)
const getEmployees = async (): Promise<UserType[]> => {
  try {
    const employees = await getUsersByRole(2); // Call to get users by role ID 2 (employees)
    // console.log("Filtered Employees:", employees);
    return employees;
  } catch (error) {
    // console.error("Error fetching employees:", error);
    throw error;
  }
};

// Get a single user by UUID
const singleUser = async (uuid: string): Promise<any> => {
  const token = getAuthToken();
  if (!token) {
    toast.error("Authentication token is missing!");
    return;
  }

  try {
    const response = await apiClient.get(`/users/${uuid}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    // console.error(
    //   "Error fetching user:",
    //   error.response?.data || error.message
    // );
    toast.error(error.response?.data?.message || "Failed to fetch user");
    throw error;
  }
};

// Edit user function
const editUser = async (uuid: string, data: object): Promise<any> => {
  const token = getAuthToken();
  if (!token) {
    toast.error("Authentication token is missing!");
    return;
  }

  try {
    const response = await apiClient.put(`/users/${uuid}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("User updated successfully!");
    return response.data;
  } catch (error: any) {
    // console.error(
    //   "Error updating user:",
    //   error.response?.data || error.message
    // );
    toast.error(error.response?.data?.message || "Failed to update user");
    throw error;
  }
};

// Delete user function
const deleteUser = async (uuid: string): Promise<any> => {
  const token = getAuthToken();
  if (!token) {
    toast.error("Authentication token is missing!");
    return;
  }

  try {
    const response = await apiClient.delete(`/users/${uuid}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("User deleted successfully!");
    return response.data;
  } catch (error: any) {
    // console.error(
    //   "Error deleting user:",
    //   error.response?.data || error.message
    // );
    toast.error(error.response?.data?.message || "Failed to delete user");
    throw error;
  }
};

// Export all functions
const users = {
  addUser,
  getUsers,
  getUsersByRole,
  getEmployees,
  getCustomers,
  singleUser,
  editUser,
  deleteUser,
};

export default users;
