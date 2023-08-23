/* eslint-disable react/prop-types */
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function RootLayout({ displaySideMenu = false }) {
  return (
    <>
      <HeaderBar />
      <main className="flex gap-4 p-5">
        {displaySideMenu && (
          <nav className="bg-slate-100 py-3 px-4 min-w-[100px]">
            <h3 className='sr-only'>학습 내비게이션 메뉴</h3>
            <ul>
              <li><Link to="/learn/01">Props 전달</Link></li>
              <li><Link to="/learn/02">상태 끌어올리기</Link></li>
              <li><Link to="/learn/03">속성(props) 드릴링 이슈</Link></li>
              <li><Link to="/learn/04">컴포넌트 상태 공유 Context{' '}</Link></li>
            </ul>
          </nav>
        )}
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <FooterBar />
    </>
  );
} //^ 불필요한 요소를 사용하지 않기 위해 플래그먼트를 사용해야 한다.
// return [
//   <HeaderBar key="header-bar" />,
//   <main key="main">{props.children}</main>,
//   <FooterBar key="footer-bar" />
// ]; 값을 배열로도 내보낼 수 있다 - 배열로 내보낼 땐 키가 필요하다

export default RootLayout;
