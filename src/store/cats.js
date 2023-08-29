import { create } from 'zustand';

export const useCatsStore = create((set) => ({
  cats: [
    { id: crypto.randomUUID(), name: '찐빵', age: 2, gender: 'male' },
    { id: crypto.randomUUID(), name: '뭉치', age: 2, gender: 'male' },
  ],

  addCat: (catInfo) =>
    set((state) => ({
      cats: [
        ...state.cats,
        {
          id: crypto.randomUUID(),
          ...catInfo,
        },
      ],
    })),

  removeCat: (removeCatName) =>
    set((state) => ({
      cats: state.cats.filter((cat) => cat.name !== removeCatName),
    })),
}));

// import { create } from "zustand";
// import { produce } from "immer";

// // 1. 스토어(상태 관리 저장소) 작성
// const catsStore = (set) => {
//   // 상태(state)
//   // 명사(속성), 동사(함수:액션)
//   return {
//     // 고양이들 (집합)
//     // 읽기 (불변 데이터 관리)
//     cats: [
//       { id: crypto.randomUUID(), name: "찐빵", age: 2, gender: "male" },
//       { id: crypto.randomUUID(), name: "뭉치", age: 2, gender: "male" },
//     ],

//     // 고양이(반려묘) 추가
//     // 추가할 고양이 정보: {이름, 나이, 성별}
//     addCat(catInfo) {
//       // immer 라이브러리 설치 후 , 미들웨어 구성
//       return set(
//         produce((state) => {
//           // 자바스크립트 불변, 객체 업데이트 방식 사용
//           state.cats.push({
//             id: crypto.randomUUID(),
//             ...catInfo,
//           });
//         })
//       );
//     },

//     // 고양이(반려묘) 제거
//     removeCat(removeCatName) {
//       return set(
//         produce((state) => {
//           const removeCatIndex = state.cats.findIndex(
//             (cat) => cat.Name === removeCatName
//           );
//           if (removeCatIndex > 0) {
//             state.cats.splice(removeCatIndex, 1);
//           }
//         })
//       );
//     },
//   };
// };

// // 2. use 훅 생성 (내보내기)
// export const useCatsStore = create(catsStore);
