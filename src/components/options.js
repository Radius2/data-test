const options = ({ options, click=()=>{}, mask = [] }) => {
  return options.myMap((option, i) => (
    <li key={i} onClick={() => click(i)} style={{ background: `${mask[i] ? 'green' : 'transparent'}` }}>
      {JSON.stringify(option)}
    </li>
  ));
};

export default options;
