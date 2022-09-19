const TYPES = {
  Text: "TEXT",
  RichText: "RICH_TEXT",
  Any: "ANY",
};

export const blogSchema = {
  id: TYPES.Text,
  title: TYPES.Text,
  author: TYPES.Text,
  descriptions: [TYPES.Any],
};