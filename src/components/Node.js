import React from "react";
import classNames from "classnames";
import "./styles/Node.scss";

const Node = (props) => {
  let nodeClass = classNames("node", {
    "node--root": props.root,
    "node--child": props.child,
  });

  return (
    <div classNames={nodeClass}>
      <h4>Object Name: {props.title}</h4>
    </div>
  );
};

export default Node;
