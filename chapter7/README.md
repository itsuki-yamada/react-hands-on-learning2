# 7章　フック

Reactの基本的なサイクル

1. データが更新される
2. コンポーネントが再描画される(render関数の実行)
3. useLayoutEffectの実行
4. ブラウザのpaint処理
5. useEffectの実行

## useEffect

- 副作用を書くときに利用する。
- 動作するのは描画後(ブラウザのpaint処理後)なので、コンポーネントの最新のプロパティにアクセスすることができる
- returnで関数を返すと、コンポーネントがアンマウントされたときにその関数が実行される

## useLayoutEffect

- ブラウザのpaint処理の前に実行される
- 基本的にuseEffectで事足りることが多いが、例えばブラウザのサイズ取得などを記述することで無駄な処理を減らすことができる

## Memo

- 純粋関数のメモ化

## useMemo

- 値のメモ化

## useCallback

- インスタンスのメモ化

## useReducer

- reducerとは、現在のステートを受け取って新しい値を返す関数のことを指す
- useStateと同じようなことを実装できるが、[より複雑な処理](./chapter7-3-app/src/components/User.jsx)を実行するときに効果的