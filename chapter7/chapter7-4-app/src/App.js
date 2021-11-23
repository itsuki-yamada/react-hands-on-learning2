import {memo, useState} from 'react';

const Cat = ({name}) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
};

const PureCat = memo(Cat);

function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);
  return (
      <>
        {cats.map((cat, i) => {
          return <PureCat key={i} name={cat}/>;
        })}
        {/*prompt関数は同期関数で、描画をブロックするので実際に使用するのはNG*/}
        <button
            onClick={() => setCats(cats => [...cats, prompt('Name a cat')])}
        >
          Add a Cat
        </button>
      </>
  );
}

export default App;
