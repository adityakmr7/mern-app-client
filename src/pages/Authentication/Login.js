import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        height={"100vh"}
        width={"100%"}
      >
        <Grid item>
          <Card sx={{ minWidth: 500 }}>
            <Box p={2}>
              <Typography variant="h5">Login to explore</Typography>
            </Box>
            <CardContent>
              <form>
                <Stack>
                  <TextField
                    sx={{ marginTop: 2 }}
                    placeholder="UserName"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ marginY: 2 }}
                    placeholder="Password"
                    type={"password"}
                    variant="outlined"
                  />
                  <Button variant="contained">Login</Button>
                  <Box marginTop={2}>
                    <Typography>
                      New User ? <Link to={"/register"}>Register</Link>
                    </Typography>
                  </Box>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
