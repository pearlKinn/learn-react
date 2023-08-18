import { useEffect } from "react";
import { useState } from "react";

// 상태는 스냅샷과 같이 작동한다.
// 상태란? 시간의 흐름에 따라 특정 시점에서의 데이터 조각을 말한다.
// 스냅샷은 흐르는 상태릐 특정 시점에서의 데이터 조각을 말한다..
// 스냅샷은 현재 실행된 함수 몸체 안에서 변경이 불가능 하다.
// 렌더 트리거(요청)를 수행하는 상태 업데이트 함수에 전달한 nextState는 다음 렌더링 시점에 반영된다.
// 그렇다면? 현재시점에서 변경될 상태에 접근할 수 없는가?
// 아니다. 사이드 이펙트로 처리가 가능하다.
// 1. 이벤트 핸들러
// 2. useEffect 훅

function LearnStateAndEffects() {
  const [count, setCount] = useState(0);

  // 이펙트 사용 (동기화)
  // 상태의 변경이 발생하면 이펙트에 설정된 콜백 함수가 실행된다,
  // 즉 다음 상태 (next state)에 접근 가능한다.

  useEffect(
    /* 1단계: 이펙트 콜백 함수 */
    () => {
      // DOM 커밋 이후에 실행
      // 이펙트 콜백 함수
      console.log("이펙트", count); // next state
    },
    /* 2단계: 이펙트 콜백 함수를 실행시키는 조건(배열 포함된 항목) */
    //! 종속성 배열이 없는 경우, (컴포넌트 렌더링 될 때마다)이펙트 함수가 항상 실행 - undefined

    //! 종속성 배열이 빈 경우, 컴포넌트 최초 렌더링 시 1회 실행 - []

    //! 종속성 배열에 의존하는 상태를 설정하면
    //! 리액트는 종속된 상태의 변경을 감지(이전 -> 이후)
    //! 상태가 변경되었다면 이펙트 콜백 함수를 실행한다. - [count]
    [count]
  );

  const handleIncrement = () => {
    setCount(count + 10);
    console.log("핸들러", count);
  };
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    console.log("next state1", isShow);
    return () => {
      // 클린업 함수 (이 함수는 이전 렌더링의 isShow 상태 값을 출력하는 역할)
      /* 
      클린업 함수는 주로 컴포넌트가 언마운트되거나
      특정 의존성 상태가 변경되었을 때 어떤 작업을 해제하거나 정리하는 데 사용됩니다. 
      이전 렌더링에서 설정한 상태나 이펙트를 정리하거나, 
      구독한 리소스를 해제하는 등의 작업을 수행할 수 있습니다.
      */
      console.log("next state2", isShow); //next state snapshot
    };
  }, [isShow]); // [isShow]는 의존성 배열이며, 여기에 포함된 값이 변경될 때마다 useEffect 콜백 함수가 실행

  const handleToggle = () => {
    setIsShow(!isShow);
    console.log("current state", isShow); // current state snapshot
    // alert("이펙트 실행전?");
  };
  // 상태 (스냅샷)
  const [studyMessage, setStudyMessage] = useState("리액트에 대해서 알아봐요");

  // 이벤트 핸들러
  const handleChangeMessage = () => {
    // (1) 상태 업데이트 함수 (실행되면 렌더 트리거) - 효윤
    // 리액트!!!! 나(효윤) 화면의 메시지가 바뀌길 원해!! 바꿔줘!!
    setStudyMessage("효윤님 화이팅!!! 😄");
  };

  // (2) 컴포넌트 렌더링 (함수 컴포넌트 다시 실행)
  // DOM 커밋: 상태가 다음 상태로 변경되어 렌더링 되면 리액트가 실제 DOM 변경 이력을 반영

  // (3) 이펙트 (DOM 커밋 이후에 실행) - 희소
  // 이펙트 실행 조건(배열로 설정) - 영은
  useEffect(
    /* 이펙트 함수 */
    () => {
      console.log(studyMessage);
    },
    // 실행 조건
    // 배열에 포함된 상태가 변경되면 이펙트 함수가 콜백된다.
    [studyMessage]
  ); 
  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className={`text-indigo-600 font-suit text-2xl`}>
        상태 및 이펙트 학습하기 ({count})
      </h2>
      {/* DOM 커밋: 상태가 다음 상태로 변경되어 렌더링 되면 리액트가 실제 DOM 변경 이력을 반영 */}
      <p>{studyMessage}</p>
      <button type="button" onClick={handleChangeMessage}>
        메시지 변경 요청(trigger)
      </button>
      <button type="button" onClick={handleToggle}>
        {isShow ? "감춤" : "표시"}
      </button>
      {isShow && <CountButton onIncrement={handleIncrement}>+10</CountButton>}
    </div>
  );
}
function CountButton({ onIncrement }) {
  const [timer, setTimer] = useState(0);
  /* 3단계: 클린업이 중요한 이유 */
  // 컴포넌트 조건부에 따라 - 돔에 추가 / 돔에서 제거
  useEffect(() => {
    console.log("컴포넌트 마운트 될 때");

    // 타이머
    // 1초 마다 내부 함수 실행 (카운트 버튼 상태 업데이트)
    // 주기 마다 실행되는 것을 멈출 수 있는 고유 키가 반환
    const cleanupKey = setInterval(() => {
      //^ setTimer(timer + 10); 
      setTimer((timer) => timer + 10);
      console.log("try");
    }, 1000);

    // 클린업 (정리)
    return function cleanup() {
      // 저지른 일 (주기마다 함수실행)을 수습 (실행되지 않도록 정리)
      clearInterval(cleanupKey);
    };
  }, []);

  return (
    <button type="button" onClick={onIncrement}>
      +10({timer})
    </button>
  );
}

export default LearnStateAndEffects;

// 리액트 월드
// 렌더링 (함수 다시 실행)
// 함수 안에 있는 변수나, 함수는 어떻게 될까? (가비지 컬렉터 지움)

// 1회 실행 함수의 내부의 함수(이벤트 핸들러) -> 메모리에 생성된 참조 -> 메모리에서 지워짐
// 2회 실행 함수의 내부의 함수(이벤트 핸들러) -> 다시 메모리에 생성된 참조
