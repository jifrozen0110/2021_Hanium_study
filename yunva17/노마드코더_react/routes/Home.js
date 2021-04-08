import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };
  // getMovies는 axios.get을 사용하지만 axios.get은 완료되기까지 시간이 필요하기 때문에 await를 넣음
  getMovies = async() => { //async 비동기, 기다려야함
    const {
      data: {
        data : { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading : false }) // 로딩 끝, 여기서 movies는 state의 movies와 axios의 movies 둘 다 뜻함.
  }

  componentDidMount(){ // component가 mount되면 getMovie 호출
    this.getMovies();
  }
  render(){
    const{ isLoading, movies } = this.state; // state에서 온 movies
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
    ) : (
          <div className="movies">
            {movies.map(movie => (<Movie 
              key = {movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            ))}
          </div>


    ) }</section>
    );
  }
}

export default Home;