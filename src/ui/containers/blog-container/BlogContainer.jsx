import { Grid } from "@mui/material";
import React from "react";
import BlogCard from "../../elements/Blog/BlogCard";

function BlogContainer({ blogs }) {

  return (
    <Grid container sx={{ p: "2rem 1rem", bgcolor: "whitesmoke" }}>
      {blogs.data.map((blog) => (
        <Grid item xs={4} sx={{ p: 1 }}>
          <BlogCard
            title={blog.title}
            description={blog.description}
            url={blog.url}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default BlogContainer;
