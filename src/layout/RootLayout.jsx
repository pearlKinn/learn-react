/* eslint-disable react/prop-types */
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";

function RootLayout(props) {
  return (
    <>
      <HeaderBar/>
        <main>
          {props.children} {/* App.jsx에서 <RootLayout>사이의 '페이지의 주요 콘텐츠'가 RootLayout.jsx의 props로 들어옴 */}
        </main>
      <FooterBar/>
    </>
  ) //^ 불필요한 요소를 사용하지 않기 위해 플래그먼트를 사용해야 한다.
  // return [
  //   <HeaderBar key="header-bar" />, 
  //   <main key="main">{props.children}</main>, 
  //   <FooterBar key="footer-bar" />
  // ]; 값을 배열로도 내보낼 수 있다 - 배열로 내보낼 땐 키가 필요하다
}

export default RootLayout

