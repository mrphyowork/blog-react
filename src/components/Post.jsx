import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{content}</td>
        <td>
          <button
            className="btn bg-primary text-light mx-2"
            onClick={() => editPost(id)}
          >
            <CiEdit style={{ fontSize: "25px" }} /> Edit
          </button>
          <button
            className="btn bg-danger text-light"
            onClick={() => deletePost(id)}
          >
            <RiDeleteBin5Line style={{ fontSize: "25px" }} /> Delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default Post;
