import React, { useEffect, useState } from "react";
import Create from "./Create";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => console.log(title), [title]);
  useEffect(() => console.log(content), [content]);

  function saveTitleToState(e) {
    setTitle(e.target.value);
  }

  function saveContentToState(e) {
    setContent(e.target.value);
  }

  function savePost(e) {
    e.preventDefault();
    console.log("post saved!");
  }

  return (
    <Create
      saveTitleToState={saveTitleToState}
      saveContentToState={saveContentToState}
      savePost={savePost}
    />
  );
};

export default List;
