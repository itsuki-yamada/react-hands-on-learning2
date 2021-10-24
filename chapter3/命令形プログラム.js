// デジタル時計の実装

// 現在時刻を毎秒ログ出力する
setInterval(logClockTime, 1000);

function getClockTime() {
  // 現在時刻のDateオブジェクトを取得する
  let date = new Date();

  // Dateオブジェクトを時刻を表すオブジェクトに変換する
  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: 'AM',
  };

  // 午前、午後を意識した時刻に変換する
  if (time.hours === 12) {
    time.ampm = 'PM';
  } else if (time.hours > 12) {
    time.ampm = 'PM';
    time.hours = time.hours - 12;
  }

  // 時の前に0をつける
  if (time.hours < 10) {
    time.hours = '0' + time.hours;
  }

  // 分の前にゼロをつける
  if (time.minutes < 10) {
    time.minutes = '0' + time.minutes;
  }

  // 秒の前にゼロをつける
  if (time.seconds < 10) {
    time.seconds = '0' + time.seconds;
  }

  // 時刻を"hh:mm:ss AM/PM"の形式にする
  return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`;
}

function logClockTime() {
  // フォーマットされた現在時刻を取得する
  let time = getClockTime();

  // コンソールをクリアしてからログを出力する
  console.clear();
  console.log(time);
}