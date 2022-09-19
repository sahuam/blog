import { Container } from "@mui/system";
import axios from "axios";
import React from "react";
import BlogContainer from "../../src/ui/containers/blog-container/BlogContainer";

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api/v1/blogs");

  return {
    props: { blogs: data },
  };
};

function BlogHome({ blogs }) {
  return (
    <Container maxWidth="md">
      <BlogContainer blogs={blogs} />
    </Container>
  );
}

export default BlogHome;
