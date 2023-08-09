/* eslint-disable react/prop-types */
import HeaderBar from "./HeaderBar";
import FooterBar from "./FooterBar";

function RootLayout(props) {
  console.log(props);
  return (
    <div>
      <HeaderBar/>
        <main>
          {props.children} {/* App.jsx에서 <RootLayout>사이의 '페이지의 주요 콘텐츠'가 RootLayout.jsx의 props로 들어옴 */}
        </main>
      <FooterBar/>
    </div>
  )
}

export default RootLayout

