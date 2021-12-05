const fetch = require("isomorphic-fetch");

// 環境に依存したコードをisomorphic-fetchライブラリを使用してユニバーサルなコードにする
fetch("https://api.github.com/users/moonhighway")
  .then((res) => res.json())
  .then(console.log);
