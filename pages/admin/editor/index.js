import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import ContentEditor from "../../../src/poc/ContentEditor";
import EditorSchema from "../../../src/poc/EditorSchema";
import EditPage from "../../../src/poc/EditPage";

function ContentEditorPage() {
  const [content, setContent] = useState({ descriptions: [] });
  return (
    <Grid container>
      {/* header */}
      <Grid
        item
        xs={12}
        sx={{
          bgcolor: "whitesmoke",
          height: "50px",
          boxShadow: "-1px -1px -1px black black",
        }}
      ></Grid>
      {/* content editor */}
      <Grid item xs={6} sx={{ bgcolor: "whitesmoke", height: "100vh" }}>
        <ContentEditor content={content} setContent={setContent} />
        <hr />
        <EditorSchema />
      </Grid>
      {/* page */}
      <Grid item xs={6} sx={{ bgcolor: "white", height: "100vh" }}>
        <EditPage content={content} />
      </Grid>
    </Grid>
  );
}

export default ContentEditorPage;
