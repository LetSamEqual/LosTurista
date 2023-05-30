import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import blogPosts from "../../blogPosts/blogPosts.json";


const BlogPostPage = () => {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div>
      {blogPosts.map((posts) => {
        if (posts.slug === slug) {
          return (
            <div>
              <ReactMarkdown className="blogPostTitle">{posts.blogPostTitle}</ReactMarkdown>
              <ReactMarkdown className="blogPostBodyCopy">{posts.blogPostBodyCopy}</ReactMarkdown>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlogPostPage;
