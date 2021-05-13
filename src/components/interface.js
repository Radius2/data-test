import '../functions';
import Selector from './selector';
import Options from './options';
import { useState } from 'react';

export const Interface = ({ groupedArr, types, saveMask }) => {
  const [selectedMask, setSelectedMask] = useState(groupedArr.myDeepFill(false));

  function toggleSelected(a, b) {
    setSelectedMask(prev => {
      prev[a][b] = !prev[a][b] ?? true;
      return [...prev];
    })
  }

  return (
    <div style={{ width: '100%' }}>
      <h3>Select</h3>
      <button onClick={() => saveMask(selectedMask.myFlat())}>Save selected</button>
      <button onClick={() => setSelectedMask(groupedArr.myDeepFill(false))}>Clear selected</button>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {types.myMap((type, i) => {
          return (
            <Selector key={i} type={type}>
              <Options click={b => toggleSelected(i, b)} options={groupedArr[i]} mask={selectedMask[i]} />
            </Selector>
          );
        })}
      </ul>
    </div>
  );
};
