import React, { useRef } from 'react';
import Draggable from './drag'

const DraggableBox = ({content}) => {
  const ref = useRef(null);
  Draggable(ref);

  return <div ref={ref} className="draggableBox medium-item">
    <div className="medium-item">
      <img src={content.thumbnail} />
        <a className="medium-item--child" href={content.link}>
          {content.title}
      </a>
      </div>
  </div>
};

export default DraggableBox;