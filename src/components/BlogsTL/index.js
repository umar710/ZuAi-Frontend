import { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import BlogsTIItems from "../BlogsTlItems";

import { Oval } from "react-loader-spinner";

import "./index.css";

const BlogsTL = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch(
        "https://zuai-backend-fk6h.onrender.com/blog"
      );
      const data = await response.json();
      console.log(data);
      const updatedBlogData = data.map((eachItem) => ({
        id: eachItem._id,
        title: eachItem.title,
        description: eachItem.description,
      }));
      setBlogs(updatedBlogData);
      setLoading(false);
    };
    getBlogs();
  }, []);
  return (
    <>
      <Header />
      <div className="blogs-container">
        <h1>
          Publish your passions, your way <br />
          Create a unique and beautiful blog easily.
        </h1>
        <div>
          <button type="button" className="blog-btn">
            Create your blog
          </button>
        </div>
      </div>
      {isLoading ? (
        <Oval height={80} width={80} color="#4fa94d" ariaLabel="loading" />
      ) : (
        blogs.map((eachItem) => (
          <BlogsTIItems blogsTIItems={eachItem} key={eachItem.id} />
        ))
      )}
      <Footer />
    </>
  );
};

export default BlogsTL;
