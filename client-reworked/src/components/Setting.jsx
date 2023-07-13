import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const Setting = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDarkMode = () => {
    handleClose();
  };

  const handleSignout = () => {
    handleClose();
  };

  return (
    <>
      <button onClick={handleClick}>
        <img
          src="https://cdn.discordapp.com/attachments/1126661998063652924/1127892598661586964/edit_profile.svg"
          alt="setting"
        />
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDarkMode}>Dark Mode</MenuItem>
        <MenuItem onClick={handleSignout}>Signout</MenuItem>
      </Menu>
    </>
  );
};
