let color_lawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0,
};

// mutateな関数
function mutateRateColor(color, rating) {
  color.rating = rating;
  return color;
}

console.log(mutateRateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5 (0->5に変更されている)

let color_lawn = {
  title: 'lawn',
  color: '#00FF00',
  rating: 0,
};

// immutable
function immutableRateColor1(color, rating) {
  return Object.assign({}, color, { rating: rating });
}

console.log(immutableRateColor1(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 0

const immutableRateColor2 = (color, rating) => ({
  ...color,
  rating,
});

console.log(immutableRateColor2(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 0
