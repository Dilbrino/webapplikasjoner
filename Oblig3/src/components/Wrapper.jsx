import React from 'react';

function Wrapper(props) {
  return <section className="flex">{props.children}</section>;
}

export default Wrapper;
