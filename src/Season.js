import React from "react";

const getSeasonMsg = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "So hot!!!" : "It's freezing here!";
  } else {
    return lat > 0 ? "It's freezing here!" : "So hot!!!";
  }
};

const Season = (props) => {
  const season = getSeasonMsg(props.lat, new Date().getMonth());
  return <div>{season}</div>;
};

export default Season;
