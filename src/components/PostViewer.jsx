// src/components/PostViewer.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { FaFacebook, FaTwitter, FaLinkedin, FaCopy } from "react-icons/fa";
import "./css/postViewer.css";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const PostViewer = ({ post, onClose }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (post.markdown && post.file) {
      fetch(post.file)
        .then((res) => res.text())
        .then((text) => setMarkdownContent(text))
        .catch((err) => console.error("Erro ao carregar Markdown:", err));
    }
  }, [post]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(post.url);
    alert("Link copiado para a área de transferência!");
  };

  const handleShare = (platform) => {
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          post.url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          post.url
        )}&text=${encodeURIComponent(post.title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          post.url
        )}&title=${encodeURIComponent(post.title)}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <motion.div
      className="post-viewer-overlay"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="post-viewer"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        transition={{ duration: 0.3 }}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{post.title}</h2>
        <div className="post-content">
          {post.markdown ? (
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          ) : (
            <p>{post.content}</p>
          )}
        </div>
        <div className="share-section">
          <span>Compartilhar:</span>
          <div className="share-buttons">
            <button onClick={() => handleShare("facebook")}>
              <FaFacebook size={24} />
            </button>
            <button onClick={() => handleShare("twitter")}>
              <FaTwitter size={24} />
            </button>
            <button onClick={() => handleShare("linkedin")}>
              <FaLinkedin size={24} />
            </button>
            <button onClick={handleCopyLink}>
              <FaCopy size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PostViewer;
