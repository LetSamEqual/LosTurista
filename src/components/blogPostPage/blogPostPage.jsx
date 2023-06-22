import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import blogPosts from "../../blogPosts/blogPosts.json";
import ImageCarousel from "../imageCarousel/imageCarousel";
import "./blogPostPage.css";
import { useState } from "react";

const BlogPostPage = () => {
  const { slug } = useParams();

  const [scrollTop, setScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = (event) => {
    if (event.currentTarget.scrollTop < scrollTop) {
      setScrollTop(event.currentTarget.scrollTop);
      setShowNavbar(true);
    } else {
      setScrollTop(event.currentTarget.scrollTop);
      setShowNavbar(false);
    }
  };

  return (
    <div>
      <Link
        to="/"
        className={"backButton " + (showNavbar ? "active" : "hidden")}
      >
        <h1 className="firstChild">O</h1>
        <h1 className="secondChild">u</h1>
        <h1 className="thirdChild">t </h1>
        <h1 className="fourthChild">O</h1>
        <h1 className="fifthChild">f </h1>
        <h1 className="sixthChild">O</h1>
        <h1 className="seventhChild">f</h1>
        <h1 className="eightChild">f</h1>
        <h1 className="ninthChild">i</h1>
        <h1 className="tenthChild">c</h1>
        <h1 className="eleventhChild">e</h1>
      </Link>
      {blogPosts.map((posts) => {
        if (posts.slug === slug) {
          return (
            <div
              key={blogPosts.key}
              className="blogPostPage"
              onScroll={handleScroll}
              style={{
                backgroundImage: `url("${posts.blogPostBackgroundImage}")`,
              }}
            >
              <div className="blogPostContent">
                <ReactMarkdown className="blogPostTitle">
                  {posts.blogPostTitle}
                </ReactMarkdown>
                <ImageCarousel
                  className="carouselOnPage"
                  images={posts.imageCarousel}
                />
                <ReactMarkdown className="blogPostBodyCopy">
                  {posts.blogPostBodyCopy}
                </ReactMarkdown>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlogPostPage;
