/* eslint-disable no-inner-declarations */
import Switcher from "@/components/Switcher/Switcher";
import React, { useState } from "react";

{
  // 로컬 변수
  let myName = "로컬 변수";

  // 로컬 뮤테이션
  // eslint-disable-next-line no-unused-vars
  function handleUpdateMyName() {
    myName += " Wow~";
    console.log(myName);
  }

  // console.log('컴포넌트 렌더링 myName =', myName);

  // 상태 관리는 페이지 컴포넌트에서 진행
  // React.useState() 훅으로 선언된 상태로 제어
  // on / off 상태 변수 (관리할 데이터 타입은 Boolean)
  // 리액트가 요구하는 방법대로 상태를 업데이트(변경)하면?
  // 렌더링 트리거 → 컴포넌트 렌더링 → DOM 커밋 순으로 진행

  // const readyState = React.useState(false); // [s, f]
  // const isReady = readyState[0]; // 상태: state
  // const setIsReady = readyState[1]; // 상태 업데이트 함수: setState

  // console.log(isReady);
  // console.log(setIsReady);
}

function Demo() {
  // 관심사끼리 묶어주기
  const [isDarkMode, setIsDarkMode] = useState(false); // 추가된 상태
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // 상태를 토글
  };

  const [isReduceMotion, setIsReduceMotion] = useState(false);
  const handleToggleReduceMotion = () => {
    setIsReduceMotion(!isReduceMotion);
  };

  const [isReady, setIsReady] = useState(false)
  const handleToggleReady = () => {
    setIsReady(!isReady)
  }

  return (
    <div
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 8,
      }}
    >
      <Switcher
        on={isDarkMode} // 수정된 부분: isDarkMode 상태로 변경
        label="다크 모드"
        onText="on"
        offText="off"
        onClick={handleToggleDarkMode} // 수정된 부분: handleToggleDarkMode 함수로 변경
      />
      <Switcher
        on={isReduceMotion}
        onText="on"
        offText="off"
        label="리듀스 모션"
        onClick={handleToggleReduceMotion}
      />
      <Switcher
        on={isReady}
        label="레디"
        onClick={handleToggleReady}
      />
    </div>
    
  );
}

export default Demo;



