import { useParams } from "react-router-dom";
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
              <h1>{posts.blogPostTitle}</h1>
              <p>{posts.blogPostBodyCopy}</p>
            </div>
          );
        }
        else {return (
          <div>
            <h1>404</h1>
          </div>
        )};
      })}
    </div>
  );
};

export default BlogPostPage;
