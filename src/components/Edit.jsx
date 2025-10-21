import { GrUpdate } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { useTheme } from "../context/ThemeContext";

const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
  editPost,
  getTitle,
  getContent,
}) => {
  const { isDark } = useTheme();

  return (
    <>
      <form
        className={`w-50 border p-3 rounded text-center mx-auto mt-5 ${
          isDark
            ? "bg-dark text-light border-light"
            : "bg-light text-dark border-dark"
        }`}
        style={{ borderRadius: "15px" }}
      >
        <h1 className="text-warning mb-4">Edit Post</h1>
        <input
          type="text"
          placeholder="title"
          className={`form-control ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          defaultValue={title}
          onChange={saveTitleToState}
          ref={getTitle}
        />
        <br />
        <br />
        <textarea
          placeholder="contents"
          className={`form-control ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          defaultValue={content}
          onChange={saveContentToState}
          ref={getContent}
        ></textarea>
        <br />
        <br />
        <button className="btn bg-success text-light p-2" onClick={updatePost}>
          {" "}
          <GrUpdate style={{ fontSize: "25px" }} /> Update Post
        </button>
        <button
          className="btn bg-secondary text-light p-2 mx-2"
          onClick={editPost}
        >
          <ImCancelCircle style={{ fontSize: "25px" }} /> Cancel
        </button>
      </form>
    </>
  );
};
export default Edit;
