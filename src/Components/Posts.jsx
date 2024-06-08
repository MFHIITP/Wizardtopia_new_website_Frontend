import React, { useState, useRef, useEffect } from "react";

function Posts(props) {
  const scroll = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [val, setVal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://wizardtopia-backend.onrender.com/backend_posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.name,
        title: title,
        content: content,
      }),
    });
    if (response.status === 200) {
      setTitle("");
      setContent("");
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://wizardtopia-backend.onrender.com/backend_posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPosts(data);
      setVal(true)
    };
    fetchData();
  }, [posts]);

  useEffect(() => {
    if(scroll.current){
      scroll.current.scrollTop = scroll.current.scrollHeight;
    }
  }, [val])
  


  return (
    <div>
      <div className="text-white p-4 overflow-y-auto" ref={scroll} style={{maxHeight: "67vh"}}>
        <ul className="space-y-4">
          {posts.map((post, index) => {
            return (
              <li key={index} className={`p-4 bg-gray-800 rounded-lg shadow-lg ${(props.name === post.name) ? 'ml-[35%]' : 'mr-[35%]'}`}>
                <div className="flex flex-col sm:flex-row justify-between">
                  <h2 className="text-xl font-bold mb-2 font-mono">{post.title}</h2>
                  <div className="text-sm my-1">{post.name}</div>
                </div>
                <p className="text-gray-200 font-mono">{post.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative h-48">
        <div className="fixed bottom-0 left-4 right-4 p-4 rounded-lg bg-gray-800 border-t border-gray-700">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-grow p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Enter content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-grow p-2 rounded bg-gray-700 text-white"
            />
            <button
              type="submit"
              className="p-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-mono"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Posts;
