import React from "react";
import cn from "classnames";

const SalesTabButton = (props) => {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={cn("nav-link", props.className)}
        id={props.id}
        data-bs-toggle="tab"
        data-bs-target={props.target}
        type="button"
        role="tab"
        aria-controls={props.ariaControls}
        aria-selected={props.ariaSelected}
      >
        {props.title}
      </button>
    </li>
  );
};

export default SalesTabButton;
