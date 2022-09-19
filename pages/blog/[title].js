import { ThemeProvider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogPageContainer from "../../src/ui/containers/blog-page-container/BlogPageContainer";
import { theme } from "../../src/util/theme";

export const getServerSideProps = async ({ query }) => {
  return {
    props: {
      query,
    },
  };
};

function BlogPage({ query }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const onLoad = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/blogs/" + query.title
      );
      setResult(data.data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    onLoad();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {loading ? "loading" : <BlogPageContainer blog={result} />}
    </ThemeProvider>
  );
}

export default BlogPage;
