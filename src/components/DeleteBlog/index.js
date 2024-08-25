import { useState } from "react";
import Header from "../Header";

import { Link } from "react-router-dom";
import "./index.css";

const DeleteBlog = () => {
  const [isShowSuccessMsg, setShowSuccessMsg] = useState(false);
  const [isActive, setActive] = useState(true);
  const [msg, setmsg] = useState("");
  const [img, setImg] = useState("");
  const [isId, setId] = useState("");

  const onSuccessView = (data) => {
    setShowSuccessMsg(true);
    setmsg(data.msg);
    setImg(data.img);
    setActive(false);
  };

  const onSubmitBlog = async (event) => {
    event.preventDefault();
    const blogDetails = { isId };
    const apiUrl = `https://zuai-backend-fk6h.onrender.com/blog/${isId}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", // Corrected the typo here
      },
      body: JSON.stringify(blogDetails),
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      onSuccessView(data);
    }
  };

  const onChangeID = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="delete-blogs-container">
        <h1>Delete Your Blogs</h1>
      </div>
      {isActive ? (
        <form className="create-blog-form" onSubmit={onSubmitBlog}>
          <h2>Delete Your Blog</h2>

          <label htmlFor="id">ID:</label>
          <input type="text" id="id" onChange={onChangeID} />

          <button type="submit">Delete Your Blog</button>
        </form>
      ) : (
        <div className="show-post-card">
          {isShowSuccessMsg && <h3 className="text-message">*{msg}</h3>}
          {isShowSuccessMsg && (
            <img src={img} alt={msg} className="carton-img" />
          )}
          <div>
            <Link to="/blogs-timeline">
              {" "}
              <button type="button" className="blogs-btn">
                Blogs
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBlog;
