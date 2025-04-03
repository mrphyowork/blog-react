import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

const Post = () => {
  return (
    <>
      <section
        className="w-50 border bg-light p-3 rounded text-center mx-auto mt-5"
        style={{ borderRadius: "15px" }}
      >
        <h3>Post title will appear here</h3>
        <p>Post contents will appear here</p>
        <button className="btn bg-primary text-light mx-2">
          <CiEdit style={{ fontSize: "25px" }} /> Edit
        </button>
        <button className="btn bg-danger text-light">
          <RiDeleteBin5Line style={{ fontSize: "25px" }} /> Delete
        </button>
      </section>
    </>
  );
};
export default Post;
