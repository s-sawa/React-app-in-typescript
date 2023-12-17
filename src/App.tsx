import "./App.css";

// 一般的にReactではpropsの方注釈にインターフェイスを用いる
interface AppProps {
  message: string;
}

// 文字列型propsを受け取る制約の書き方
// 以下ではpropsオブジェクトからmessageプロパティを分割代入し、同時にmessageの型をstringに設定している
// const App = ({ message }: { message: string }) => {

// interfaceを用いた型注釈
const App = ({ message }: AppProps) => {
  // const App = (props: any) => {
  // const { message } = props;
  // const message = props.message;
  return <div>{message}</div>;
};

export default App;
