import { useState } from "react";
import Header from "../Header";

import { Link } from "react-router-dom";
import "./index.css";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    const blogDetails = { title, description };
    const apiUrl = `https://zuai-backend-fk6h.onrender.com/blog/${isId}`;
    const options = {
      method: "PUT",
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

  const onChangeID = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="update-blogs-container">
        <h1>Make Your Blog Post Shine: Update Now.</h1>
        <div>
          <button type="button" className="blog-btn">
            Update your blog with ID
          </button>
        </div>
      </div>
      {isActive ? (
        <form className="create-blog-form" onSubmit={onSubmitBlog}>
          <h2>Create a New Blog Post</h2>

          <label htmlFor="id">ID:</label>
          <input type="text" id="id" onChange={onChangeID} />

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

export default UpdateBlog;
