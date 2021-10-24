// 再帰関数
const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split('.');
  return remaining.length
    ? deepPick(remaining.join('.'), object[first])
    : object[first];
};

const dan = {
  type: 'person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullName: {
        first: 'Dan',
        last: 'Deacon',
      },
    },
  },
};

deepPick('type', dan);
deepPick('data.info.fullName.first', dan);