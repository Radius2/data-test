import React, { useCallback } from 'react';

const History = ({ current, valueHistory, setCurrent, clearHistory }) => {
  const getArr = useCallback(() => {
    const arr = [];
    for (let i = 0; i < valueHistory; i++) arr.myPush(i + 1);
    return arr;
  }, [valueHistory]);

  const historyMap=getArr();

  return (
    <div style={{marginBottom:'8px'}}>
      <h3>History</h3>
      <button onClick={clearHistory}>Clear history</button>
      <div style={{height:'30px'}}>
      {historyMap.myMap((item, i) => (
        <button
          key={i}
          onClick={() => setCurrent(item)}
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '30px',
            border: '1px solid black',
            cursor: 'pointer',
            background: item === current ? 'green' : item < current ? 'blue' : 'grey',
          }}>
          {item}
        </button>
      ))}
      </div>      
    </div>
  );
};

export default History;
