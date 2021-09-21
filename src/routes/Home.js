import React from "react";
import Axios from "axios";

import Movie from "../components/Movie";

import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMoviesData = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await Axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMoviesData();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Is Loading...</span>
          </div>
        ) : (
          <div className="movie_container">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genres={movie.genres}
                  year={movie.year}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                ></Movie>
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
