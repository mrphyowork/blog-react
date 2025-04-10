import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // useEffect(() => console.log(title), [title]);
  // useEffect(() => console.log(content), [content]);
  useEffect(() => console.log(posts), [posts]);

  const getTitle = useRef(null);
  const getContent = useRef();

  function toggleCreate() {
    setIsCreate(!isCreate);
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

  function editBtn() {
    console.log("edit btn clicked!");
  }

  function deleteBtn() {
    console.log("delete btn clicked!");
  }

  return (
    <>
      {isCreate ? (
        <Create
          getTitle={getTitle}
          getContent={getContent}
          saveTitleToState={saveTitleToState}
          saveContentToState={saveContentToState}
          savePost={savePost}
          returnBack={returnBack}
        />
      ) : (
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
                      editBtn={editBtn}
                      deleteBtn={deleteBtn}
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
      )}
    </>
  );
};

export default List;
