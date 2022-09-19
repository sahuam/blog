import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function BlogTemplate1({ content }) {
  const { title, createdDate, author, descriptions = [] } = content;
  const getDescription = (description) => {
    switch (description.type) {
      case "text": {
        let variant = "subtitle1";
        if (description.variant === "H1 Heading") variant = "h1";
        if (description.variant === "H2 Heading") variant = "h2";
        if (description.variant === "H3 Heading") variant = "h3";
        if (description.variant === "H4 Heading") variant = "h4";
        if (description.variant === "H5 Heading") variant = "h5";
        if (description.variant === "H6 Heading") variant = "h6";
        if (description.variant === "Paragraph") variant = "subtitle1";
        return (
          <Typography sx={{ mb: 2 }} variant={variant}>
            {description.value}
          </Typography>
        );
      }
      case "link":
        return description.variant === "internal " ? (
          <Link
            href={description.src}
            passHref={true}
            styles={{ marginBottom: 2, display: "block" }}
          >
            {description.value}
          </Link>
        ) : (
          <MuiLink href={description.src} sx={{ mb: 2, display: "block" }}>
            {description.value}
          </MuiLink>
        );
      case "image": {
        return (
          <Box sx={{ width: "100%" }}>
            <Box
              component="img"
              src={description.src}
              alt={description.value}
              sx={{
                display: "block",
                width:
                  description.variant === "full-width-image"
                    ? "100%"
                    : description.variant === "half-width-image"
                    ? "50%"
                    : "25%",
                height: "auto",
                m:
                  description.align === "right"
                    ? "0 0 0 auto"
                    : description.align === "center"
                    ? "0 auto"
                    : "",
                mb: 4,
                mt: 4,
              }}
            />
          </Box>
        );
      }
      case "rich":
        return (
          <div dangerouslySetInnerHTML={{ __html: description.value }}></div>
        );

      default:
        return;
    }
  };
  return (
    <Grid container>
      {/* title */}
      <Grid item xs={12}>
        <Typography variant="h1" sx={{ fontSize: "3rem" }} id="blog-title-1">
          {title}
        </Typography>
        <br />
      </Grid>
      {/* date and author */}
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="body" id="blog-data-1">
          Created on {createdDate}
        </Typography>
        <br />
        <Typography variant="body" id="blog-author-1">
          Created by <b>{author}</b>
        </Typography>
      </Grid>
      {/* all description */}
      <Grid item xs={12}>
        <Box id="blog-description-arr-1">
          {descriptions.map((description) => getDescription(description))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default BlogTemplate1;
