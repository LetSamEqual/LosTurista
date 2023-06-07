import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import blogPosts from "../../blogPosts/blogPosts.json";
import "./blogPostPage.css"


const BlogPostPage = () => {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div className="blogPostPage">
      <div className="landingImage"> </div>
      <div className="blogPostContent">
      {blogPosts.map((posts) => {
        if (posts.slug === slug) {
          return (
            <div key={blogPosts.id}>
              <ReactMarkdown className="blogPostTitle">{posts.blogPostTitle}</ReactMarkdown>
              <ReactMarkdown className="blogPostBodyCopy">{posts.blogPostBodyCopy}</ReactMarkdown>
            </div>
          );
        }
        return null;
      })}
      </div>

    </div>
  );
};

export default BlogPostPage;
