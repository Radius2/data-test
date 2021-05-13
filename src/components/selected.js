import React, { useCallback } from 'react';
import Options from './options';

const Selected = ({ arr, mask }) => {
  const selectedOptions = useCallback(() => {
    const newArr = [];
    const flatMask = mask.myFlat();
    arr.myFlat().myForEach((item, i) => {
      if (flatMask[i]) {
        newArr.myPush(item);
      }
    });
    return newArr;
  }, [arr, mask]);

  return (
    <div style={{ width: '100%' }}>
      <h3>Set</h3>
      {mask ? (
        <ul>
          <Options options={selectedOptions()} />
        </ul>
      ) : (
        <p>Set is empty</p>
      )}
    </div>
  );
};
export default Selected;
