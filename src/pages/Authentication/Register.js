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
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function Register() {
  const { handleChange, handleSubmit, errors, touched, handleBlur } = useFormik(
    {
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .min(6, "Username must be more than 6 character")
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Password must be more than 8 character.")
          .required("Password is required"),
      }),
      onSubmit: (values) => {
        console.log("ONSub", values);
      },
    }
  );
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
              <Typography variant="h5">Register</Typography>
            </Box>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Stack>
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{ marginTop: 2 }}
                    placeholder="UserName"
                    variant="outlined"
                    name="username"
                  />
                  {touched.username && errors.username ? (
                    <Box>{errors.username}</Box>
                  ) : null}
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{ marginTop: 2 }}
                    placeholder="Email"
                    variant="outlined"
                    name="email"
                  />
                  {touched.email && errors.email ? (
                    <Box>{errors.email}</Box>
                  ) : null}
                  <TextField
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={{ marginY: 2 }}
                    placeholder="Password"
                    type={"password"}
                    variant="outlined"
                    name="password"
                  />
                  {touched.password && errors.password ? (
                    <Box>{errors.password}</Box>
                  ) : null}
                  <Button type="submit" variant="contained">
                    Register
                  </Button>
                  <Box marginTop={2}>
                    <Typography>
                      Existing User ? <Link to={"/login"}>Login</Link>
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

export default Register;
