import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    this.setState({
      movies: await axios.get("https://yts-proxy.now.sh/list_movies.json"),
    });
  };
  componentDidMount() {
    console.log(this.state.movies);
    this.setState({ isLoading: false });
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
