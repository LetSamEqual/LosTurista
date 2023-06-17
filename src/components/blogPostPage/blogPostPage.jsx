import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import blogPosts from "../../blogPosts/blogPosts.json";
import ImageCarousel from '../imageCarousel/imageCarousel'
import "./blogPostPage.css";

const BlogPostPage = () => {
  const { slug } = useParams();

  return (
    <div>
      {blogPosts.map((posts) => {
        if (posts.slug === slug) {
          return (
            <div
              key={blogPosts.key}
              className="blogPostPage"
              style={{
                backgroundImage: `url("${posts.blogPostBackgroundImage}")`,
              }}
            >
              <div className="blogPostContent">
                <ReactMarkdown className="blogPostTitle">
                  {posts.blogPostTitle}
                </ReactMarkdown>
                <ImageCarousel images={posts.imageCarousel} />
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
