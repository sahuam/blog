import { Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const data = await axios.post("http://localhost:3000/api/v1/login", {
        username,
        password,
      });

      router.push("/admin/dashboard");
    } catch (error) {
      //   console.log(error);
      if (error?.response?.status === 400) setError("Something went wrong");
      else if (error?.response?.status === 401) setError("Invalid credentials");
    }
  };
  return (
    <Container maxWidth="md">
      <Typography>Admin Login</Typography>
      <br />
      <br />
      <form>
        <TextField
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <br />
        <TextField
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <br />
        <Typography sx={{ color: "red" }}>{error}</Typography>
        <Button variant="contained" onClick={handleLogin}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Login;
