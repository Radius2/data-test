import { useState } from 'react';

const Selector = ({ type, children: options }) => {
  const [show, setShow] = useState(true);
  return (
    <li style={{ border: 'solid 1px black' }}>
      <div onClick={e => setShow(!show)} style={{ background: 'grey', cursor: 'pointer' }}>
        <span style={{ display: 'inline-block', transition: '0.2s', transform: `rotate(${show ? '180deg' : '0deg'})` }}>▲ </span>
        {type.toUpperCase()}
      </div>
      {show ? <ul>{options}</ul> : null}
    </li>
  );
};

export default Selector;
