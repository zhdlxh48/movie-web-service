import React from "react";

import Movie from "../components/Movie";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); // Redirect
    }
  }
  render() {
    const { state } = this.props.location;
    if (state !== undefined) {
      return (
        <Movie
          title={state.title}
          genres={state.genres}
          year={state.year}
          summary={state.summary}
          poster={state.poster}
        ></Movie>
      );
    } else {
      return <span>ERROR</span>;
    }
  }
}

export default Detail;
