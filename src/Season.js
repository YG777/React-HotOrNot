import React from "react";
import './season.css';
const seasonConfig = {
  summer: {
    seasonTxt: "So hot!!!",
    seasonIcon: "sun outlined orange massive icon",
  },

  winter: {
    seasonTxt: "Too cold. freezing!",
    seasonIcon: "snowflake outlined blue massive icon",
  },
};

const getSeason= (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonTxt, seasonIcon } = seasonConfig[season];

  return (
    <div className={`season ${season}`}>
      <i className={`left-icon-season ${seasonIcon}`} />
      <h1>{seasonTxt}</h1>
      <i className={`right-icon-season ${seasonIcon}`} />
    </div>
  );
};

export default Season;
