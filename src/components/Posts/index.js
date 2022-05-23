import PostsContainer from "./PostsContainer";
import Post from "./Post";
import { useEffect, useState } from "react";
import api from "../../services/api.js";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promise = api.getPosts();
    promise.then((response) => {
      setPosts(response.data);
    });
    promise.catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      <PostsContainer>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post key={post.name + Math.random() * 10000}>
              <div>
                <h1>
                  {post.name.charAt(0).toUpperCase() + post.name.slice(1)}
                </h1>
                <h2>{post.users.name}</h2>
              </div>
              <img src={post.imageUrl} alt={post.name} />
              <span>
                {post.postsTags.map((tag) => (
                  <p key={post.name + Math.random() * 10000}>
                    #{tag.tags.name}
                  </p>
                ))}
              </span>
            </Post>
          ))}
      </PostsContainer>
    </>
  );
}
