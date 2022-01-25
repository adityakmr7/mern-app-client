import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { authSelector, logoutUserThunk } from "../redux/slices/auth";

export default function Layout() {
  const { isAuthenticated } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUserThunk());
    navigate("/login");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            {isAuthenticated ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Outlet />
      </div>
    </>
  );
}
