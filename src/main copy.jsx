/* React, ReactDOM 모듈 불러오기 및 버전 확인 -------------------------------------- */

// React 모듈을 불러오기
import * as React from "react";

// ReactDOM 모듈을 불러오기
import * as ReactDOM from "react-dom";

// React 버전 확인하기
// console.log(`React version: ${React.version}`);

// ReactDOM 버전 확인하기
// console.log(`ReactDOM version: ${ReactDOM.version}`);

/* React 요소란? --------------------------------------------------------------- */
//~ React API와 JSX는 같은 결과를 내고 둘다 리액트 오브젝트?이다
//~ React 요소 작성 (React API)
const visualBoldElement = React.createElement("b");

const headlineElement = React.createElement(
  "h1",
  {
    title: "React is Awesome!",
  },
  "React는",
  visualBoldElement,
  "해~"
);

const domAbbrElement = React.createElement(
  "abbr",
  { title: "Document Object Model" },
  "DOM"
);

const uiAbbrElement = React.createElement(
  "abbr",
  { title: "User Interface" },
  "UI"
);

const descriptionForReactElement = React.createElement(
  "p",
  {},
  "React는 가상 ",
  domAbbrElement,
  "을 사용하는 ",
  uiAbbrElement,
  "라이브러리입니다."
);

const appElement = React.createElement(
  /* type */
  "div",
  /* props {} */
  {
    className: "App",
    id: "reactAppElement",
    "data-type": "React.ReactElement",
  },
  /* ...children -> [child, child, child, ...] */
  headlineElement,
  descriptionForReactElement
);

// appElement(rootElement) tree
// console.log(appElement);

/* JSX를 사용하는 이유 ------------------------------------------------------------ */
//~ React 요소 작성 (with JSX)
//! 비표준 문법이다 JSX는 브라우저가 해석할 수 없음 -> 브라우저가 해석할 수 있는 건 JS
const appElementJSX = (
  <div className="App" id="reactAppElement" data-type="React.ReactElement">
    <h1 title="React is Awesome!">
      React는 <b>어썸(awesome)</b>해~
    </h1>
    <p>리액트는 가상 돔울 사용하는 UI 라이브러리입니다</p>
  </div>
);
console.log(appElementJSX);

/* React 요소를 재사용하기 위한 함수 작성 --------------------------------------------- */

// - [ ] React 요소를 반환하는 함수 만들기
//   1. 함수 작성 createAbbrElement()
function createAbbrElement(props, ...children) {
  return React.createElement("abbr", props, ...children);
}
const dom_AbbrElement = createAbbrElement(
  { title: "Document Object Model", }, "D", "O", "M" 
  );

console.log(dom_AbbrElement);

const ui_AbbrElement = createAbbrElement(
  {
    title: "User Interface",
  },
  "UI"
);
console.log(ui_AbbrElement);

// - [ ] 인수를 전달해 재사용 가능하도록 구현
//   2. createAbbrElement({ props: { title: '...' } }, '...');
/* React 요소 vs. 컴포넌트 -------------------------------------------------------- */

// createAbbrElement 함수 만들기 (일반 JavaScript에서는 이렇게 활용)
function createAbbrElement(title, children) {
  return <abbr title={title}>{children}</abbr>;
}

//! 아래 JSX 코드는 React 요소를 생성한다.
  //! 그런데 웹 브라우저는 아래 코드가 해석이 안되요.
  //! <abbr title="Document Object Model">DOM</abbr>
  //! const dom_AbbrElement = createAbbrElement(
  //!   'Document Object Model',
  //!   'DOM'
  //! );
  //! console.log(dom_AbbrElement);
  //! const ui_AbbrElement = createAbbrElement(
  //!   'User Interface', 
  //!   'UI'
  //! );
  //! console.log(ui_AbbrElement);

// Abbr 함수 컴포넌트 만들기 (React용)
function Abbr(props /* { title, children } */) {
  return (
    <div>
      <span>
        <em>
          <abbr title={props.title}>{props.children}</abbr>
        </em>
      </span>
    </div>
  );
}

// console.log(React.createElement(Abbr)); // <Abbr />

// App 함수 컴포넌트 만들기
const App = (props) => {
  return (
    <div className='App'>
      <Abbr title="Document Object Model">
        DOM
      </Abbr>
      <Abbr title="User Interface">
        UI
      </Abbr>
    </div>
  )
}

// normal function
console.log(createAbbrElement(
  'Document Object Model',
  'DOM'
));

// JSX (대문자로 시작하는 함수)
console.log(<App />);


/* React 요소 트리를 DOM에 렌더링하려면? --------------------------------------------- */

// ReactDOM.createRoot() 를 사용해서 DOM 요소를 ReactDOMRoot 객체로 생성
// ReactDOMRoot.render() 메서드로 App을 화면에 표시(렌더링)
