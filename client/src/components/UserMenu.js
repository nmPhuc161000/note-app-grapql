import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";

export default function UserMenu() {
  const {
    user: { displayName, photoURL, auth }
  } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleLogout = () => {
    auth.signOut();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >
        <Typography>{displayName}</Typography>
        <Avatar
          src={photoURL}
          alt="avatar"
          sx={{
            width: 24,
            height: 24,
            marginLeft: "5px",
          }}
        ></Avatar>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
