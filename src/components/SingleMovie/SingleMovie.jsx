import { NavLink, useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, movie, isError } = useFetch(`&i=${id}`);
  // console.log(id)

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text"><b>Released:-</b> {movie.Released}</p>
          <p className="card-text"><b>Genre:- </b>{movie.Genre}</p>
          <p className="card-text"><b>ImdRating:- </b>{movie.imdbRating}</p>
          <p className="card-text"><b>Director:- </b>{movie.Director}</p>
          <p className="card-text"><b>Description:- </b>{movie.Plot}</p>
          <p className="card-text"><b>Country:- </b>{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
