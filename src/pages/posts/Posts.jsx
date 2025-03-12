import React, { useState } from "react";
import PostViewer from "../../components/PostViewer";
import { AnimatePresence } from "framer-motion";
import "./Posts.css";

const Posts = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const postsList = [
    {
      id: 1,
      title:
        "Apresento o Richly: Seu Novo Editor de Texto Online Moderno e Open Source! 🚀",
      markdown: true,
      file: "/posts/richly.md",
      content:
        "Conheça o Richly, um projeto open source desenvolvido para quem busca produtividade e flexibilidade!",
      url: "https://richlyapp.vercel.app/",
    },
    {
      id: 2,
      title:
        "Apresento o Richly: Seu Novo Editor de Texto Online Moderno e Open Source! 🚀",
      markdown: true,
      content:
        "Conheça o Richly, um projeto open source desenvolvido para quem busca produtividade e flexibilidade!",
      file: "/posts/richly.md",
      url: "https://richlyapp.vercel.app/",
    },
    {
      id: 3,
      title:
        "Apresento o Richly: Seu Novo Editor de Texto Online Moderno e Open Source! 🚀",
      markdown: true,
      content:
        "Conheça o Richly, um projeto open source desenvolvido para quem busca produtividade e flexibilidade!",
      file: "/posts/richly.md",
      url: "https://richlyapp.vercel.app/",
    },
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseViewer = () => {
    setSelectedPost(null);
  };

  return (
    <div className="posts-page">
      <h1 className="posts-title">Posts</h1>
      <div className="posts-list">
        {postsList.map((post) => (
          <div
            key={post.id}
            className="post-item"
            onClick={() => handlePostClick(post)}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedPost && (
          <PostViewer post={selectedPost} onClose={handleCloseViewer} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Posts;
