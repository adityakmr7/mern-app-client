import { CircularProgress, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppCard } from "../components";
import { fetchPosts, postsSelector } from "../redux/slices/posts";

function Dashboard() {
  const posts = useSelector(postsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts(1, 10));
  }, []);

  if (posts.isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Container sx={{ marginY: "20px" }}>
      <Grid container display={"flex"} direction={"row"}>
        <Grid item display={"flex"}>
          {posts?.posts.map((item, i) => {
            return <AppCard key={item._id} {...item} />;
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
