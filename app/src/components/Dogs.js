import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDog } from "../actions";

const Dog = ({ getDog, dog, isFetching, error }) => {
  useEffect(() => {
    // run action creator when the component mounts
    getDog();
  }, [getDog]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <span className = "dogImage">
      <img src = {dog} alt = "dog picture" />
      <div>
        <button onClick={getDog}>Change Dog</button>
      </div>
    </span>
  );
};

const mapStateToProps = state => {
  return {
    dog: state.dog,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getDog }
)(Dog);
