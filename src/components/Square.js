import React from 'react';

function Square(props) {
  const className = props.ishighlighted ? "square highlighted" : "square";
  return (
    <button className={className} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
