import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
  ]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  useEffect(() => console.log(title), [title]);
  useEffect(() => console.log(content), [content]);
  // useEffect(() => console.log(posts), [posts]);
  // useEffect(() => console.log(editId), [editId]);

  const getTitle = useRef(null);
  const getContent = useRef();

  function toggleCreate() {
    setIsCreate(!isCreate);
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  function saveTitleToState(e) {
    setTitle(e.target.value);
  }

  function saveContentToState(e) {
    setContent(e.target.value);
  }

  function savePost(e) {
    e.preventDefault();
    // const id = Date.now();
    const id = posts.length + 1;
    setPosts([...posts, { id, title, content }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    getTitle.current.focus();
    toggleCreate();
  }

  function returnBack(e) {
    e.preventDefault();
    toggleCreate();
  }

  function editPost(id) {
    toggleEdit();
    setEditId(id);
  }

  function updatePost(e) {
    e.preventDefault();

    const updatedPosts = posts.map((post) => {
      if (post.id === editId) {
        return {
          ...post,
          title: title || post.title,
          content: content || post.content,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    toggleEdit();
    setTitle("");
    setContent("");
  }

  function deletePost(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      const modifiedPosts = posts.filter((post) => {
        return post.id !== id;
      });
      setPosts(modifiedPosts);
    }
  }

  if (isCreate) {
    return (
      <Create
        getTitle={getTitle}
        getContent={getContent}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        savePost={savePost}
        returnBack={returnBack}
      />
    );
  } else if (isEdit) {
    const post = posts.find((post) => post.id === editId);
    return (
      <Edit
        title={post.title}
        content={post.content}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
        updatePost={updatePost}
      />
    );
  } else {
    return (
      <div className="container my-5 p-5 text-center">
        <h1>All Posts</h1>

        {posts.length ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    editPost={editPost}
                    deletePost={deletePost}
                  />
                );
              })}
            </tbody>
          </table>
        ) : (
          <h2 className="text-danger">Nothing to show here!</h2>
        )}

        <button className="btn btn-primary mt-3" onClick={toggleCreate}>
          Create New Post
        </button>
      </div>
    );
  }
};

export default List;
