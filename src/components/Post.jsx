import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";

const Post = ({ index, id, title, content, editPost, deletePost }) => {
  const { isDark } = useTheme();

  return (
    <>
      <tr className={`text-center ${isDark ? "table-dark" : ""}`}>
        <td style={{ width: "5%" }}>{index + 1}</td>
        <td style={{ width: "20%" }}>{title}</td>
        <td style={{ width: "40%" }}>{content}</td>
        <td style={{ width: "35%" }}>
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
