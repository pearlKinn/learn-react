import { useState } from "react";

function LearnStateAndEffects() {
  // 숫자 값 상태 관리

  // 마우스의 x 좌표
  // const [mouseX, setMouseX] = useState(0);
  // 마우스의 y 좌표
  // const [mouseY, setMouseY] = useState(0);

  // 개별 상태 관리 → 그룹(묶음) 상태 관리
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  /* 
  const handlePrintMousePosition = ({ pageX: x, pageY: y }) => { //~ 이벤트 함수는 매개변수 자리에 무조건 이벤트 객체가 전달 
    // setMouseX(e.clientX);
    // setMouseY(e.clientY);
    setMousePosition({ x, y });
  };
 */

  // 객체 상태 관리
  // { x: 10, y: 96 }
  // 배열 상태 관리
  // [10, 96]

  const [repository, setRepository] = useState({
    id: "repo-101",
    title: "yamoo9/likelion-FEQA",
    link: "https://github.com/yamoo9/likelion-FEQA",
    profile: {
      url: "https://avatars.githubusercontent.com/u/1850554?s=16&v=4",
      label: "yamoo9",
    },
  });

  return (
    <div
      className="m-10 flex flex-col gap-2 items-start"
      // onMouseMove={handlePrintMousePosition}
    >
      <h2 className="text-indigo-600 text-2xl uppercase">
        상태 및 이펙트 학습하기
      </h2>

      <output>
        마우스 X 좌표 : {mousePosition.x} / 마우스 Y 좌표 : {mousePosition.y}
      </output>

      <h2 className="text-2xl mt-10 font-semibold">저장소 정보 수정</h2>
      <form className="w-1/2">
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="repoTitle" className="font-medium">
            타이틀 (title)
          </label>
          <input
            type="text"
            name="repoTitle"
            id="repoTitle"
            value={repository.title}
            onChange={(e) => {
              setRepository({
                ...repository,
                title: e.target.value,
              });
            }}
            className="flex-1 p-1 border-b-2 border-slate-400 bg-transparent placeholder:text-slate-400"
            placeholder="yamoo9/repository"
          />
        </div>
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="repoLink" className="font-medium">
            링크 (href)
          </label>
          <input
            type="text"
            name="repoLink"
            id="repoLink"
            className="flex-1 p-1 border-b-2 border-slate-400 bg-transparent placeholder:text-slate-400"
            placeholder="https://my-web-service.dev"
          />
        </div>
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="repoProfileLabel" className="font-medium">
            프로필 레이블 (profile.label)
          </label>
          <input
            type="text"
            name="repoProfileLabel"
            id="repoProfileLabel"
            className="flex-1 p-1 border-b-2 border-slate-400 bg-transparent placeholder:text-slate-400"
            placeholder="yamoo9"
          />
        </div>

        <div role="group" className="flex gap-1 mt-5">
          <button type="submit" className="py-1 px-2 bg-sky-300 text-white">
            저장
          </button>
          <button type="reset" className="py-1 px-2 bg-rose-400 text-white">
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default LearnStateAndEffects;
