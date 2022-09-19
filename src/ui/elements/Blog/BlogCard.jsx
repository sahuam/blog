import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function BlogCard({ title, description, url }) {
  const LETTER_RESTICTION = 200;
  const restrictText = (text) => {
    return text.length > LETTER_RESTICTION
      ? `${text.substr(0, LETTER_RESTICTION)} . . .`
      : text;
  };

  return (
    <Link href={"/blog/" + url}>
      <Card sx={{ cursor: "pointer", height: "250px" }}>
        {/* <CardMedia/> */}
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textTransform: "capitalize",
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{}}>
            {restrictText(description)}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BlogCard;
