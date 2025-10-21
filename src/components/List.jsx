import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [validateErr, setValidateErr] = useState([]);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = isDark
      ? "bg-dark text-light"
      : "bg-light text-dark";
  }, [isDark]);

  useEffect(() => console.log(title), [title]);
  useEffect(() => console.log(content), [content]);
  // useEffect(() => console.log(posts), [posts]);
  // useEffect(() => console.log(editId), [editId]);

  const getTitle = useRef(null);
  const getContent = useRef();

  useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = async () => {
    try {
      const token = localStorage.getItem("token");
      const blog = await axios.get(
        "https://blog-olive-three-64.vercel.app/blog",
        {
          withCredentials: true,
        }
      );
      // console.log(blog.data);
      setPosts(blog.data);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

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

  const savePost = async (event) => {
    event.preventDefault();
    if (title && content) {
      // setPosts([...posts, {id: Date.now(), title, content}])
      await axios.post("https://blog-olive-three-64.vercel.app/blog", {
        title,
        content,
      });
      fetchPost();

      getTitle.current.value = "";
      getContent.current.value = "";
      toggleCreate();

      setValidateErr([]);
    } else {
      let err = [];
      if (!title) err["title"] = "This field is required!";
      if (!content) err["content"] = "This field is required!";

      setValidateErr(err);
    }
  };

  function returnBack(e) {
    e.preventDefault();
    toggleCreate();
  }

  function editPost(id) {
    toggleEdit();
    setEditId(id);
  }

  const updatePost = async (event) => {
    event.preventDefault();
    if (title && content) {
      await axios.put(`https://blog-olive-three-64.vercel.app/blog/${editId}`, {
        title,
        content,
      });
      fetchPost();

      getTitle.current.value = "";
      getContent.current.value = "";
      setIsEdit(false);

      setValidateErr([]);
    } else {
      let err = [];
      if (!title) err["title"] = "This field is required!";
      if (!content) err["content"] = "This field is required!";

      setValidateErr(err);
    }
  };

  // function deletePost(id) {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete this post?"
  //   );
  //   if (confirmed) {
  //     const modifiedPosts = posts.filter((post) => {
  //       return post.id !== id;
  //     });
  //     setPosts(modifiedPosts);
  //   }
  // }

  const deletePost = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      await axios.delete(`https://blog-olive-three-64.vercel.app/blog/${id}`);
      fetchPost();
    }
  };

  if (isCreate) {
    return (
      <div
      // className={
      //   isDark
      //     ? "bg-dark text-light min-vh-100"
      //     : "bg-light text-dark min-vh-100"
      // }
      >
        <button
          className={`btn ${
            isDark ? "btn-light" : "btn-dark"
          } position-fixed top-0 end-0 m-3`}
          onClick={toggleTheme}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        <Create
          getTitle={getTitle}
          getContent={getContent}
          saveTitleToState={saveTitleToState}
          saveContentToState={saveContentToState}
          savePost={savePost}
          returnBack={returnBack}
        />
      </div>
    );
  } else if (isEdit) {
    const post = posts.find((post) => post.id === editId);
    return (
      <div>
        <button
          className={`btn ${
            isDark ? "btn-light" : "btn-dark"
          } position-fixed top-0 end-0 m-3`}
          onClick={toggleTheme}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        <Edit
          title={post.title}
          content={post.content}
          saveTitleToState={saveTitleToState}
          saveContentToState={saveContentToState}
          updatePost={updatePost}
          editPost={editPost}
          getTitle={getTitle}
          getContent={getContent}
        />
      </div>
    );
  } else {
    return (
      <div>
        <button
          className={`btn ${
            isDark ? "btn-light" : "btn-dark"
          } position-fixed top-0 end-0 m-3`}
          onClick={toggleTheme}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        {/* <div className="container py-5 mt-5"> */}
        <h1 className="text-center">All Posts</h1>

        {posts.length ? (
          <table className={`table ${isDark ? "table-dark" : ""}`}>
            <thead>
              <tr className="text-center">
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => {
                return (
                  <Post
                    index={index}
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
      // </div>
    );
  }
};

export default List;
