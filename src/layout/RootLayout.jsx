import { Outlet, Link } from 'react-router-dom';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

function RootLayout({ displaySideMenu = false }) {
  return (
    <>
      <HeaderBar />
      <main className="flex gap-4 p-5">
        {displaySideMenu && (
          <nav className="bg-slate-100 py-3 px-4 min-w-[100px]">
            <h3 className="sr-only">학습 내비게이션 메뉴</h3>
            <ul>
              <li>
                <Link to="/learn/01" className='border rounded-md border-slate-950'>Props 전달</Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/02">상태 끌어올리기</Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/03">속성(props) 드릴링 이슈</Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/04/01">
                  상태 공유 Context{' '}
                  <abbr
                    title="Application Programming Interface"
                    className="cursor-help no-underline"
                  >
                    API
                  </abbr>
                </Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/04/02">Context 분리 관리</Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/05">값을 기억하기 위한 Refs</Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/06">DOM 요소를 참조하는 Refs</Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/07/01">GSAP 애니메이션</Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/07/02">GSAP 컨텍스트</Link>
              </li>
              <li>
                <Link className='border rounded-md border-slate-950' to="/learn/08">Framer Motion 애니메이션</Link>
              </li>
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
}
 //^ 불필요한 요소를 사용하지 않기 위해 플래그먼트를 사용해야 한다.
// return [
//   <HeaderBar key="header-bar" />,
//   <main key="main">{props.children}</main>,
//   <FooterBar key="footer-bar" />
// ]; 값을 배열로도 내보낼 수 있다 - 배열로 내보낼 땐 키가 필요하다

export default RootLayout;
