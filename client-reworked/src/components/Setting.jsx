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
          src="https://www.svgrepo.com/show/448746/cog.svg"
          alt="setting"
          className="h-5 w-5"
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
