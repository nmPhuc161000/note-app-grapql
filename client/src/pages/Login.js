import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const auth = getAuth();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const testDate = await signInWithPopup(auth, provider);
    console.log(testDate);
  };

  if (user?.uid) {
    navigate("/");
    return;
  }
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "15px" }}>
        Welcome to Note app
      </Typography>
      <Button variant="outlined" onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </>
  );
}
