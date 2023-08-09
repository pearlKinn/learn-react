import Heading from "./components/Heading";
import Description from "./components/Description";
import RenderingProgressList from "./components/RenderingProgressList";

// App 함수 컴포넌트를 작성합니다.
function App() {
  // JSX 값 반환
  return (
    <div className="App">
      {/* <Heading> React </Heading> */}
      <Heading />
      <Description />
      <RenderingProgressList />
    </div>
  );
}
export default App