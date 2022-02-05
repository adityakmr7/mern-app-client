import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { authSelector, loginUser, logoutUserThunk } from "../redux/slices/auth";

export default function Layout() {
  const { isAuthenticated } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = window.localStorage.getItem("access_token");
  React.useEffect(() => {
    if (token !== null) {
      dispatch(loginUser());
    } else {
      navigate("/login");
    }
  }, [token]);
  const handleLogout = () => {
    dispatch(logoutUserThunk());
    navigate("/login");
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    let value = event.target.getAttribute("value");
    if (value === "Logout") {
      handleLogout();
    } else if (value === "Create Post") {
      navigate("/create");
    }
    setAnchorElUser(null);
  };
  const settings = ["Profile", "Create Post", "Logout"];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            {!isAuthenticated ? <Link to={"/login"}>Login</Link> : null}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    value={setting}
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography value={setting} textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Outlet />
      </div>
    </>
  );
}
