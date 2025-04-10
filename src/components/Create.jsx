import { MdCreateNewFolder } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
  returnBack,
}) => {
  return (
    <>
      <form
        className="w-50 border bg-light p-3 rounded text-center mx-auto mt-5"
        style={{ borderRadius: "15px" }}
      >
        <h1 className="text-primary">Create New Post</h1>
        <input
          ref={getTitle}
          type="text"
          placeholder="title"
          className="form-control mb-3"
          onChange={(e) => saveTitleToState(e)}
        />

        <textarea
          ref={getContent}
          placeholder="content"
          className="form-control mb-3"
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
