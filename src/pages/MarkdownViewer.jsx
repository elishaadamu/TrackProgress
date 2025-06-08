import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function MarkdownViewer({ file }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then(setContent);
  }, [file]);

  return (
    <>
      <Navbar />
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
}

export default MarkdownViewer;
