import './styles/global.css'
import React from "react";
import { createRoot } from "react-dom/client";// import { createRoot } from '../node_modules/react-dom/client';
import App from './App'
//! React 함수 컴포넌트의 요건
//! - 함수 이름은 첫글자가 대문자!
//! - JSX를 반환!

// createRoot
// create + Root (React DOM Root)
// ReactDOMRoot 객체를 생성하는 함수
// ReactDOMRoot 객체는 render() 메서드를 사용해
// React 요소를 실제 DOM 요소에 렌더링 한다.
createRoot(document.getElementById("root")).render(
  // App 컴포넌트를 렌더링할 수 있도록 JSX 구문을 추가합니다.
  // <App></App>
  <React.StrictMode> {/* strict mode 필수 -> 오류를 잡아내줌 */}
    <App />
  </React.StrictMode>
);
