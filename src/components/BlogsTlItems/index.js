import "./index.css";

const BlogsTIItems = (props) => {
  const { blogsTIItems } = props;
  const { id, title, description } = blogsTIItems;
  return (
    <div className={`blog-card ${id}`}>
      <div className="blog-card-content">
        <p>ID: {id}</p>
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-excerpt">{description}</p>
        <button className="blog-card-button">Read More</button>
      </div>
    </div>
  );
};

export default BlogsTIItems;
