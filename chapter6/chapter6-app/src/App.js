import {useState} from 'react';
import colorData from './color-data.json';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';
import {v4 as uuid} from 'uuid';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
      <>
        <AddColorForm onNewColor={(title, hexColor) => {
          setColors(prev => ([
            ...prev,
            {
              id: uuid(),
              title,
              color: hexColor,
              rating: 0,
            },
          ]));
        }}
        />
        <hr/>
        <ColorList
            colors={colors}
            onRateColor={(id, rating) => {
              const newColors = colors.map(color =>
                  color.id === id ? {...color, rating} : color,
              );
              setColors(newColors);
            }
            }
            onRemoveColor={id => {
              const newColors = colors.filter(color => color.id !== id);
              setColors(newColors);
            }}
        />
      </>
  );
}

export default App;
