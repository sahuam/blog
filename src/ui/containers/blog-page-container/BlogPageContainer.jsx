import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import BlogPage from "../../elements/Blog/BlogPage";

function BlogPageContainer({ blog }) {
  return (
    <Container maxWidth="lg" sx={{}}>
      <Grid container>
        <Grid item xs={12} sx={{ pr: 2 }}>
          <BlogPage title={blog.title} description={blog.description} />
        </Grid>
        {/* <Grid item xs={4} sx={{ bgcolor: "whitesmoke" }}></Grid> */}
      </Grid>
    </Container>
  );
}

export default BlogPageContainer;
