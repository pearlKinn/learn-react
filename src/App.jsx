import RootLayout from "./layout/RootLayout";
import Demo from "./pages/Demo";
// import Practice from "./pages/Practice/Practice";
import FilterableList from "./pages/Practice/parts/FilterableList";

// App 함수 컴포넌트를 작성합니다.
function App() {
  // JSX 값 반환
  return (
    <div className="App">
      <RootLayout>
        <Demo/>
      </RootLayout>
    </div>
  );
}
export default App; // -> 단축키 exp
