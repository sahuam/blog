import React, { useEffect } from "react";

function RichTextEditor() {
  const edit = (d) => {
    console.log(d.innerHTML);
  };

  const setColor = (color) => {
    // document.execCommand("styleWithCSS", false, true);
    // document.execCommand("foreColor", false, color);
  };

  useEffect(() => {
    window.addEventListener("select", (e) => console.log(e));
  }, []);

  return (
    <div>
      <p id="block">Hello world</p>

      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <div
        contentEditable="true"
        id="ce"
        style={{
          width: "400px",
          height: "400px",
          border: "1px solid ",
          padding: "16px",
        }}
        onSelect={(e) => edit(e.target)}
      ></div>
    </div>
  );
}

export default RichTextEditor;
