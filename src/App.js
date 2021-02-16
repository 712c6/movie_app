import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    moives: []
  };

  getMovies = async () => {
    /*
      axios: fetch 위의 작은 레이어
      axios는 우리에게 json데이터를 주는 역할
      async와 await를 통해 javascript내에서 axios가 완료된 후에 다음 작업이 시행되도록 함
    */
    //const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    
    /*
    object가 뭘 가지고 있는지 궁금하신가요?
    */
    //console.log(movies);

    //콘솔에서 뜯어본 뒤, 위 코드를 개량하면...
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    
    //원래 {movies: movies}라고(state: axios) 써야 하지만, 변수명이 같아 한 번만 써도 정상 작동함
    //하나의 setState에서 두 개의 state(상태)를 변경함
    this.setState({movies, isLoading: false});

  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return ( 
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie key={movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}/>
            ))}
          </div>
        )}
      </section>
    )
  }
}


export default App;
