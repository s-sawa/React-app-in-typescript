import { isZero } from "./isZero";

// testメソッド
// 第1引数にテスト名、第2引数確認する関数、第3引数(任意)はタイムアウト(ms)テストを中止するまでの待ち時間を設定
// ドキュメント https://jestjs.io/ja/docs/api#testname-fn-timeout

/*
expectメソッド：テスト対象の値を受け取る
toBeメソッド：期待される値を引数としてうけとる
expectで受け取った関数の結果が、toBeの期待値と一致していればテスト通過！
以下の例では、isZero(0)の結果の値が true かどうかを確認するテスト内容
*/
// test("0を渡したらtrueになること", () => {
//   const result = isZero(0);
//   expect(result).toBe(true);
// });

test("1を渡したらfalseになること", () => {
  const result = isZero(1);
  expect(result).toBe(false);
});
