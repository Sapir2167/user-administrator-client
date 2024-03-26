import { useEffect, useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList";
import { getUsers } from "./api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const updateAddedUser = (addedUser) => {
    setUsers((prevUsers) => [...prevUsers, addedUser]);
  };

  const updateDeletedUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <UserForm updateAddedUser={updateAddedUser} />
      <UserList users={users} updateDeletedUser={updateDeletedUser} />
    </div>
  );
}

export default App;
