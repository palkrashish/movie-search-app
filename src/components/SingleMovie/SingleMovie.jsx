import { useParams } from "react-router-dom";
import "./SingleMovie.css";
const SingleMovie = () => {
  const { id } = useParams();
  return <div>Single Moive {id}</div>;
};

export default SingleMovie;
