import { MdCreateNewFolder } from "react-icons/md";

const Create = ({ saveTitleToState, saveContentToState, savePost }) => {
  return (
    <>
      <form
        className="w-50 border bg-light p-3 rounded text-center mx-auto mt-5"
        style={{ borderRadius: "15px" }}
      >
        <h1 className="text-primary">Create New Post</h1>
        <input
          type="text"
          placeholder="title"
          className="form-control mb-3"
          onChange={(e) => saveTitleToState(e)}
        />

        <textarea
          placeholder="content"
          className="form-control mb-3"
          onChange={saveContentToState}
        ></textarea>

        <button className="btn bg-success text-light p-2" onClick={savePost}>
          <MdCreateNewFolder style={{ fontSize: "25px" }} /> Create Post
        </button>
      </form>
    </>
  );
};
export default Create;
