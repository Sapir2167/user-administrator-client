import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import styles from "./UserForm.module.css";
import { addUser } from "../../api";

function UserForm({ updateAddedUser }) {
  const [formError, setFormError] = useState("");
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addedUser = await addUser(newUser);
      updateAddedUser(addedUser);
      setNewUser({ firstName: "", lastName: "", email: "", password: "" });
      setFormError("");
    } catch (error) {
      setFormError("Error adding user");
      console.error("Error adding user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          label="first Name"
          variant="outlined"
          value={newUser.firstName}
          required
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={newUser.lastName}
          required
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          value={newUser.email}
          required
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          value={newUser.password}
          required
          onChange={handleChange}
        />

        <Button variant="contained" color="primary" type="submit">
          Add User
        </Button>
        {formError && <Typography color="error">{formError}</Typography>}
      </form>
    </div>
  );
}

export default UserForm;
