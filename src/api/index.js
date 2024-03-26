const BASE_URL = "http://localhost:3000/api/users/";

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    return users;
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

export const addUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.status !== 201) {
      throw new Error("Failed to add user");
    }
    const addedUser = await response.json();
    return addedUser;
  } catch (error) {
    throw new Error(`Error adding user: ${error.message}`);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
