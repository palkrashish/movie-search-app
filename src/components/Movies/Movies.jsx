import { useGlobalContext } from "../../utils/context";
import "./Movies.css";
const Movies = () => {
  const { movie } = useGlobalContext();
 return (
  <div>
  {movie.map((currMovie)=>{
    return <div>
    <h2>{currMovie.Title}</h2>
    </div>
  })}
  </div>
 )
};

export default Movies;
