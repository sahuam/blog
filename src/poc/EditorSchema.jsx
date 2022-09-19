import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
const TYPES = {
  Text: "TEXT",
  RichText: "RICH_TEXT",
  Any: "ANY",
};

const blogSchema = {
  id: { type: TYPES.Text, placeholder: "ID" },
  title: { type: TYPES.Text, placeholder: "Title of the blog" },
  author: { type: TYPES.Text, placeholder: "Author's name" },
  descriptions: [{ type: TYPES.Any, placeholder: "Description" }],
};

// text field
const TextInput = (props) => <TextField {...props} />;

// number field

// rich text

// area text

// select input

// checkbox

// radio group

// arrayOf type
const ArrayOfInput = (props) => {
  const [element, setElement] = useState([
    getInputFieldFromSchema(props.key, blogSchema),
  ]);

  return (
    <Box id="arr-text">
      {element.map((el) => el)}
      <br />
      <Button
        onClick={() =>
          setElement([
            ...element,
            getInputFieldFromSchema(props.key, blogSchema),
          ])
        }
      >
        Add Item
      </Button>
    </Box>
  );
};

const getInputFieldFromSchema = (key, schema) => {
  if (schema[key].length > 0) {
    return <ArrayOfInput {...schema[key][0]} key={key} />;
  }

  switch (schema[key].type) {
    case TYPES.Text:
      return (
        <TextInput
          {...schema[key]}
          type="text"
          name={"blog-" + key}
          id={"blog-" + key}
        />
      );
    case TYPES.Any:
      break;
    default:
      break;
  }
};

function EditorSchema() {
  const attributes = Object.keys(blogSchema);

  return (
    <div>
      <p>EditorSchema</p>
      {attributes.map((key) => getInputFieldFromSchema(key, blogSchema))}
    </div>
  );
}

export default EditorSchema;
