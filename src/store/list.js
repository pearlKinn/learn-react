import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// export const initialList = [
//     {
//       id: crypto.randomUUID(),
//       title: 'Zustand는 츄~스탄트로 발음합니다.',
//     },
//   ]

export const useListStore = create(
  persist(devtools((set) => ({
    // Query
    list: [
      {
        id: crypto.randomUUID(),
        title: "Zustand는 츄~스탄트로 발음합니다.",
      },
    ],

    // Mutation
    addItem: (newItemTitle) =>
      set(
        (state) => ({
          list: [
            ...state.list,
            {
              id: crypto.randomUUID(),
              title: newItemTitle,
            },
          ],
        }),
        false,
        "list/add"
      ),
    deleteItem: (deleteId) =>
      set(
        (state) => ({
          list: state.list.filter((item) => item.id !== deleteId),
        }),
        false,
        "list/delete"
      ),
  })),{
    name: 'list-store'
  })
);
