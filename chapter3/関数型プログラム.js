// デジタル時計

const onSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serializeClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

const civilianHours = clockTime => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? 'PM' : 'AM',
});

// 関数targetを受け取り、その関数を使って時刻を表示する
const display = target => time => target(time);

const formatClock = format => time =>
  format.replace('hh', time.hours).
    replace('mm', time.minutes).
    replace('ss', time.seconds).
    replace('ampm', time.ampm);

const prependZero = key => clockTime => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? '0' + clockTime[key] : '' + clockTime[key],
});
