import axios from 'axios';
import { useEffect, useState } from 'react';
import History from './components/history';
import { Interface } from './components/interface';
import './functions';
import Selected from './components/selected';

const typeGroup = ['number', 'string', 'other'];

function App() {
  const [groupedArr, setGroupedArr] = useState([]);
  const [currentMask, setCurrentMask] = useState(0);
  const [historyMask, setHistoryMask] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoad(true);
    axios
      .get('https://raw.githubusercontent.com/WilliamRu/TestAPI/master/db.json')
      .then(({ data }) => {
        const arr = data.testArr;
        console.log('Received arr: ', arr);
        const flatArr = arr.myFlat();
        console.log('Flat arr: ', flatArr);
        const groupedArr = flatArr.myTypeGroup(typeGroup);
        console.log('Grouped arr', groupedArr);
        setGroupedArr([...groupedArr]);
      })
      .catch(() => setError(true))
      .finally(() => setLoad(false));
  }, []);

  function saveMask(mask) {
    if (currentMask < 10) {
      console.log('before', currentMask);
      setHistoryMask(prev => {
        return [...prev.slice(0, currentMask), mask];
      });
      setCurrentMask(prev => prev + 1);
      return;
    }
    console.log('after', currentMask);
    setHistoryMask(prev => [...prev.slice(1, 10), mask]);
  }

  function clearHistory() {
    setHistoryMask([]);
    setCurrentMask(0);
  }

  const render = (
    <>
      <History current={currentMask} valueHistory={historyMask.length} setCurrent={e => setCurrentMask(e)} clearHistory={clearHistory} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Interface types={typeGroup} groupedArr={groupedArr} saveMask={saveMask} />
        <Selected arr={groupedArr} mask={historyMask[currentMask - 1]} />
      </div>
    </>
  );

  return <>{load ? <h3>Loading...</h3> : error ? <h3>Error</h3> : render}</>;
}

export default App;
