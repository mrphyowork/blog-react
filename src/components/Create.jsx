import { MdCreateNewFolder } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { useTheme } from "../context/ThemeContext";

const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
  returnBack,
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
        <h1 className="text-primary">Create New Post</h1>
        <input
          ref={getTitle}
          type="text"
          placeholder="title"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          onChange={(e) => saveTitleToState(e)}
        />

        <textarea
          ref={getContent}
          placeholder="content"
          className={`form-control mb-3 ${
            isDark ? "bg-dark text-light border-light" : ""
          }`}
          onChange={saveContentToState}
        ></textarea>

        <button
          className="btn bg-success text-light p-2 mx-2"
          onClick={savePost}
        >
          <MdCreateNewFolder style={{ fontSize: "25px" }} /> Create Post
        </button>

        <button
          className="btn bg-secondary text-light p-2 mx-2"
          onClick={returnBack}
        >
          <ImCancelCircle style={{ fontSize: "25px" }} /> Cancel
        </button>
      </form>
    </>
  );
};
export default Create;
