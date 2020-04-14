import React from 'react';

function Square(props) {
  let className = props.ishighlighted ? "square highlighted" : "square";
  className = props.value === null ? `${className} active` : className;
  return (
    <button className={className} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
