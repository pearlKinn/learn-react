import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";

// App 함수 컴포넌트를 작성합니다.
function App() {
  // JSX 값 반환
  return (
    <div className="App">
      <RootLayout>
        <Home/>
        {/* <About/> */}
      </RootLayout>
    </div>
  );
}
export default App // -> exp
