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
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ErrorMessage } from "../../components";
import { loginUserThunk } from "../../redux/slices/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleChange, handleSubmit, errors, touched, handleBlur, values } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string().required("Password is required"),
      }),
      onSubmit: (values) => {
        Promise.resolve(dispatch(loginUserThunk(values)))
          .then((res) => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });
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
              <form onSubmit={handleSubmit}>
                <Stack>
                  <TextField
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ marginTop: 2 }}
                    placeholder="UserName"
                    variant="outlined"
                  />
                  <ErrorMessage
                    isTouched={touched.username}
                    error={errors.username}
                  />
                  <TextField
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ marginY: 2 }}
                    placeholder="Password"
                    type={"password"}
                    variant="outlined"
                  />
                  <ErrorMessage
                    isTouched={touched.password}
                    error={errors.password}
                  />
                  <Button variant="contained" type="submit">
                    Login
                  </Button>
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
