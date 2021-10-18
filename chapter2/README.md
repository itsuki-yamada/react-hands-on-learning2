# メモ

- 最初のJavaScriptの仕様はECMAScriptで、1997年に策定された。

## 関数宣言と関数式の違いについて

- 関数宣言は、巻き上げ(hosting)が起きる
    - hosting...ファイルの戦闘に関数宣言を記述したのと同じ状態になる

## デストラクチャリング

オブジェクトを変数に代入したり、受け取る際に必要なプロパティを取捨選択できる機能。

```js
const sandwitch = {
  bread: 'bread',
  meat: 'tuna',
  cheese: 'swiss',
  topping: ['lettuce', 'tomato', 'mustard']
};

const { bread, meat } = sandwitch;

const lordify = ({ firstName }) => {
  console.log(`${firstName} of Canterbury`);
};

const regularPerson = {
  firstName: "Bill",
  lastName: "Wilson",
};

lordify(regularPerson);
```

## リストマッチング

配列要素に対するデストラクチャリング

```js
const [, , thirdAnimal] = ["Horse", "Mouse", "Cat"];
```

## オブジェクトリテラルの改善

オブジェクトリテラル内に関数を記述する際に、functionを省略できる

```js
const skier = {
  name,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  }
}
```