// reduce関数
const colors = [
  {
    id: 'xekare',
    title: 'red red',
    rating: 3,
  },
  {
    id: 'jbwsof',
    title: 'big blue',
    rating: 2,
  },
  {
    id: 'prigbj',
    title: 'grizzly grey',
    rating: 5,
  },
  {
    id: 'ryhbhsl',
    title: 'banana',
    rating: 1,
  },
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});

console.log(hashColors);
