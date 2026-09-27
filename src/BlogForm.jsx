import { useState } from "react";
import blogService from "./services/blogs";

const BlogForm = () => {
  const [value, setValue] = useState({
    title: "",
    author: "",
    url: "",
    likes: 0,
  });

  const handleSumbit = async (event) => {
    event.preventDefault();
    if (value.title === "" || value.author == "" || value.url === "") return;

    await blogService.create(value);
    setValue({
      title: "",
      author: "",
      url: "",
      likes: 0,
    });
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        value={value.title}
        onChange={(event) => setValue({ ...value, title: event.target.value })}
        placeholder="write a title"
      />
      <input
        value={value.author}
        onChange={(event) => setValue({ ...value, author: event.target.value })}
        placeholder="write an author"
      />
      <input
        value={value.url}
        onChange={(event) => setValue({ ...value, url: event.target.value })}
        placeholder="write a url"
      />
      <input
        type="number"
        value={value.likes}
        onChange={(event) => setValue({ ...value, likes: event.target.value })}
        placeholder="write a number"
      />
      <button type="submit">add</button>
    </form>
  );
};

export default BlogForm;
