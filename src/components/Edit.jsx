import { GrUpdate } from "react-icons/gr";

const Edit = ({
  title,
  content,
  saveTitleToState,
  saveContentToState,
  updatePost,
}) => {
  return (
    <>
      <form
        className="w-50 border bg-light p-3 rounded text-center mx-auto mt-5"
        style={{ borderRadius: "15px" }}
      >
        <h1 className="text-warning mb-4">Edit Post</h1>
        <input
          type="text"
          placeholder="title"
          className="form-control"
          defaultValue={title}
          onChange={saveTitleToState}
        />
        <br />
        <br />
        <textarea
          placeholder="contents"
          className="form-control"
          defaultValue={content}
          onChange={saveContentToState}
        ></textarea>
        <br />
        <br />
        <button className="btn bg-success text-light p-2" onClick={updatePost}>
          {" "}
          <GrUpdate style={{ fontSize: "25px" }} /> Update Post
        </button>
      </form>
    </>
  );
};
export default Edit;
