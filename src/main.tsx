import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// <App />コンポーネントのエントリーポイントの設定
// id がrootの要素にレンダリングする
// ('root')! の! は、idがrootの要素が必ず存在する(null undefinedではない)ことをTypeScriptに伝えるためのもの

// type Foo = JSX.IntrinsicAttributes;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


