import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialTheme = {
  currentMode: "light",
  light: {
    fg: "black",
    bg: "white",
  },
  dark: {
    fg: "white",
    bg: "black",
  },
};

export const useStore = create(
    devtools((set) => ({
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
  
      /* -------------------------------------------------------------------------- */
  
      theme: initialTheme,
  
      changeLightTheme: () =>
        //immer 사용
        set(
          produce((state) => {
            state.theme.currentMode = "light";
          }),
          false,
          "theme/changeLight"
        ),
  
      //^ changeLightTheme: () => immer 사용전 리액트 사용 방식
      //^   set(                                          
      //^     (state) => ({                               
      //^       theme: {                                  
      //^         ...state.theme,                         
      //^         currentTheme: 'light',                  
      //^       },                                    
      //^     }),                                    
      //^     false,                                    
      //^     'theme/changeLight'                           
      //^   ),
      changeDarkTheme: () =>
        set(
          (state) => ({
            theme: {
              ...state.theme,
              currentTheme: "dark",
            },
          }),
          false,
          "theme/changeDark"
        ),
      swtichMode: () =>
        set(
          produce((state) => {
            const mode = state.theme.currentMode;
            state.theme.currentMode = mode.includes("light") ? "dark" : "light";
          }),
          false,
          "theme/switchMode"
        ),
  
      //^ swtichMode: () =>                                              
      //^   set(                                                         
      //^     (state) => ({                                              
      //^       theme: {                                                 
      //^         ...state.theme,                                        
      //^         currentMode: state.theme.currentMode.includes("light") 
      //^           ? "dark"                                             
      //^           : "light",                                           
      //^       },                                                       
      //^     }),                                                        
      //^     false,                                                     
      //^     "theme/switchMode"                                         
      //^   ),                                                           
      resetTheme: () =>
        set(
          () => ({
            theme: initialTheme,
          }),
          false,
          "theme/reset"
        ),
    })
  )

);
