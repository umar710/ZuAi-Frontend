import { useState } from "react";
import Header from "../Header";

import "./index.css";
import { Link } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isShowSuccessMsg, setShowSuccessMsg] = useState(false);
  const [isActive, setActive] = useState(true);
  const [msg, setmsg] = useState("");
  const [img, setImg] = useState("");

  const onSuccessView = (data) => {
    setShowSuccessMsg(true);
    setmsg(data.msg);
    setImg(data.img);
    setActive(false);
  };

  const onSubmitBlog = async (event) => {
    event.preventDefault();
    const blogDetails = { title, description };
    const apiUrl = "https://zuai-backend-fk6h.onrender.com/blog";
    const options = {
      method: "POST",
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

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="create-blogs-container">
        <h1>
          Publish your passions, your way <br />
          Create a unique and beautiful blog easily.
        </h1>
      </div>
      {isActive ? (
        <form className="create-blog-form" onSubmit={onSubmitBlog}>
          <h2>Create a New Blog Post</h2>

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={onChangeTitle}
            value={title}
          />

          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            onChange={onChangeContent}
            value={description}
          ></textarea>

          <button type="submit">Create Blog Post</button>
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

export default CreateBlog;
