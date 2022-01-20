import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">
              <Link to={"/login"}>Login</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Outlet />
      </div>
    </>
  );
}
