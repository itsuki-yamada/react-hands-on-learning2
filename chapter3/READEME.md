# JavaScriptにおける関数型プログラミング

> あるプログラミング言語の、あるオブジェクトを変数に格納できるだけでなく、関数の引数として渡したり、戻り地として受け取ることができる場合、
> そのオブジェクトを第一級オブジェクトと呼びます。

## 高階関数

関数の引数として関数を受け取る、または関数を戻り値として返すという特徴を持つ。

```js
const createScream = function(logger) {
  return function(message) {
    logger(message.toUpperCase() + "!!!");
  };
};

const allowCreateScream = logger => message => logger(message.toUpperCase() + "!!!"); 
```

## 宣言型と命令形

Reactは宣言型
jQueryは命令型になりやすい(命令部分を自分で作る必要がある)

## 関数型プログラミングの特徴

- 全てのデータはイミュータブル
  - データに変更を加えるときは、必ずコピーを作成してから変更する