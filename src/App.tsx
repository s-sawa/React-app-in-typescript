import React from "react";
import "./App.css";
import Counter from "./Counter";
import CounterWithReducer from "./CounterWithReducer";

// 一般的にReactではpropsの方注釈にインターフェイスを用いる
interface AppProps {
  message?: string;
}

// 文字列型propsを受け取る制約の書き方
// 以下ではpropsオブジェクトからmessageプロパティを分割代入し、同時にmessageの型をstringに設定している
// const App = ({ message }: { message: string }) => {

// interfaceを用いた型注釈
// <>で型引数を受け取る
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      {/* <Counter /> */}
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: "Hello, defaultProps!",
  // description: "this is app component",
};

export default App;
