import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading : true,
    movies = []
  };
  // getMovies는 axios.get을 사용하지만 axios.get은 완료되기까지 시간이 필요하기 때문에 await를 넣음
  getMovies = async() => { //async 비동기, 기다려야함
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount(){ // component가 mount되면 getMovie 호출
    this.getMovies();
  }
  render(){
    const{ isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }

}


export default App;