import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/postSlice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostList from "../components/PostList";
import ErrorHandler from "../components/ErrorHandler";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Row>
        <Col xs={{ span: 6, offset: 3 }}>
          {error ? (
            <ErrorHandler />
          ) : loading ? (
            "loading please wait..."
          ) : (
            <PostList posts={posts} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Home;
