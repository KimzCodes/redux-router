import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const PostList = ({ posts }) => {
  const navigate = useNavigate();
  const loadedPosts =
    posts.length > 0 &&
    posts.map((post, index) => (
      <tr key={post.id}>
        <td>{++index}</td>
        <td>{post.title}</td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() => navigate(`${post.id}/edit`)}
            >
              Edit
            </Button>
            <Button variant="danger">Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
    ));
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "70%" }}>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{loadedPosts}</tbody>
      </Table>
    </>
  );
};

export default PostList;
