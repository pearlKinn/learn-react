import { create } from "zustand";
import { devtools } from "zustand/middleware";
// 사이드 메뉴 표시 전환을 위한 상태 관리
// 어떤 상태?: 디스플레이사이드메누(불린 값)

// 커스텀 훅: 유즈사이트메뉴스토어 내보내기

export const useSideMenuStore = create(
  devtools((set) => ({
    // 객체리터럴인 경우 스코프가 아닌 객체임을 JS에게 알려주기 위해 소괄호로 감싸줌
    displaySideMenu: false,
    toggleSideMenu: () =>
      set(
        (state) => ({
          displaySideMenu: !state.displaySideMenu,
        }),
        // 상태 덮어쓰기 유무
        // Zustand의 상태 처리 방법: 얕은 합성(false)
        // true이면 덮어쓰기 됨
        false, // -> 레이블을 설정하지 위해
        // redux 개발 도구 레이블
        "sideMenu/toggel"
      ),
  }))
);
