import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function ContentEditor({ content, setContent }) {
  return (
    <div>
      <form>
        <TextField
          id="content-blog-title-1"
          sx={{}}
          defaultValue="Title"
          name="title"
          placeholder="Title"
          onChange={(e) => setContent({ ...content, title: e.target.value })}
        />
        <TextField
          id="content-blog-author-1"
          sx={{}}
          name="author"
          placeholder="Author"
          onChange={(e) => setContent({ ...content, author: e.target.value })}
        />
        <Box contianer-type="array" id="content-blog-description-arr-1">
          {/* <TextField
            name="description"
            placeholder="description"
            id="content-blog-description-1-1"
            onChange={(e) =>
              setContent({
                ...content,
                descriptions: [...content.descriptions, e],
              })
            }
          />
          <Button>Add</Button> */}
          {["Add descriptions", ...content?.descriptions].map((des, i) => (
            <Box>
              <TextField
                name="description"
                placeholder={des}
                id={`content-blog-description-1-${i}`}
                defaultValue={des}
                //   onChange={(e) =>
                //     setContent({
                //       ...content,
                //       descriptions: [...content.descriptions, e],
                //     })
                //   }
              />
              <Button
                onClick={(e) =>
                  setContent({
                    ...content,
                    descriptions: [...content.descriptions, e],
                  })
                }
              >
                Add
              </Button>
            </Box>
          ))}
        </Box>
      </form>
    </div>
  );
}

export default ContentEditor;
