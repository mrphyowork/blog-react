import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BsFillPrinterFill } from "react-icons/bs";
import { BiScan } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFavorite } from "react-icons/md";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { BiSave } from "react-icons/bi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Hello Welcome to React Icons!</h2>

      <div className="mt-3">
        <button className="btn bg-success text-white ms-3">
          <BsFillPrinterFill /> Print
        </button>
        <button className="btn bg-success text-white ms-3">
          <BiScan />
          Scan
        </button>
      </div>

      <div className="mt-3">
        <button className="btn bg-warning text-dark ms-3">
          <TiShoppingCart /> Cart
        </button>
        <button className="btn bg-warning text-dark ms-3">
          <MdOutlineFavorite />
          Favorite
        </button>
        <button className="btn bg-warning text-dark ms-3">
          <RiShoppingBasket2Fill />
          Shopping
        </button>
      </div>

      <div className="mt-3">
        <button className="btn bg-danger text-light ms-3">
          <IoPersonAddOutline /> Add
        </button>
        <button className="btn bg-danger text-light ms-3">
          <FaRegEdit />
          Edit
        </button>
        <button className="btn bg-danger text-light ms-3">
          <MdAutoDelete />
          Delete
        </button>
        <button className="btn bg-danger text-light ms-3">
          <BiSave />
          Save
        </button>
      </div>

      <div className="mt-5">
        <h2 className="text-primary">Welcome to Google Fonts</h2>
        <h3 className="text-secondary">This font is Eczar font.</h3>
        <h4 className="text-danger">This font is Inter font.</h4>
        <h5 className="text-warning">This font is Quantico font.</h5>
      </div>
    </>
  );
}

export default App;
