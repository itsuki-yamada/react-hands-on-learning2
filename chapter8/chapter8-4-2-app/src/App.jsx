import faker from 'faker';
import React from 'react';
import {FixedSizeList} from 'react-window';

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

const App = () => {
  const renderRow = ({index, style}) => (
      <div style={{...style, ...{display: 'flex'}}}>
        <img
            src={bigList[index].avatar}
            alt={bigList[index].name}
            width={50}
        />
        <p>{bigList[index].name} - {bigList[index].email}</p>
      </div>
  );
  return (
      <FixedSizeList
          height={window.innerHeight}
          width={window.innerWidth}
          itemCount={bigList.length}
          itemSize={50}
      >
        {renderRow}
      </FixedSizeList>);
};

export default App;