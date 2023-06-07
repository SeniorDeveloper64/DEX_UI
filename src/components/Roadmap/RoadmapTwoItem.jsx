import React from "react";

const RoadmapTwoItem = (props) => {
  return (
    <div className="roadmap-item">
      <span className="roadmap-title">{props.item.roadmapTitle}</span>
      <div className="roadmap-content">
        <span className="dot"></span>
        <h4 className="title">{props.item.title}</h4>
        <p>{props.item.info}</p>
      </div>
    </div>
  );
};

export default RoadmapTwoItem;
