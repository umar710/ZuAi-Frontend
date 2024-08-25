import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import BlogsTL from "./components/BlogsTL";
import CreateBlog from "./components/CreateBlog";
import UpdateBlog from "./components/UpdateBlog";
import DeleteBlog from "./components/DeleteBlog";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="signup" element={<Signup />} />
      <Route exact path="/blogs-timeline" element={<BlogsTL />} />
      <Route exact path="/create-blog" element={<CreateBlog />} />
      <Route exact path="/update-blog" element={<UpdateBlog />} />
      <Route exact path="/delete-blog" element={<DeleteBlog />} />
    </Routes>
  </BrowserRouter>
);

export default App;
