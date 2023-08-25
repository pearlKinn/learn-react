import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectRoute from "./components/ProtectRoute";
import RootLayout from "./layout/RootLayout";
import PassingProps from "./learn/1-passing-props";
import LiftingStateUp from "./learn/2-lifting-state-up";
import PropsDrillingIssue from "./learn/3-props-drilling-issue";
import ReactContextAPI1 from "./learn/4-1react-context-api";
import ReactContextAPI2 from "./learn/4-2react-context-api";
import RefExampleMemoValues from "./learn/5-ref-1-memo-values";
import RefExampleReferencingDOM from "./learn/6-ref-referencing-dom";
import GSAP_Animation from "./learn/7-1-ref-gsap-animation";
import GSAP_Context from "./learn/7-2-ref-gsap-context";
import FramerMotion_Animation from "./learn/8-framer-motion-declaration-animation";
import ComponentPropTypes from "./learn/9-component-prop-types";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductEdit from "./pages/ProductEdit";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout displaySideMenu={false} />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="products" element={<Products />} />
      <Route
        path="product/edit/:productId"
        element={
          <ProtectRoute>
            <ProductEdit />
          </ProtectRoute>
        }
      />
      {/*// :productId - url 파라미터에 따라 동적으로 라우팅 해주겠다는 뜻  */}
      {/* 
      //~ :productId는 동적 경로 매개변수                                 
      //~ ProductEdit 컴포넌트에서 이 매개변수를 추출하려면 useParams 훅을 사용 
    */}
      <Route path="contact" element={<Contact />} />
      {/* 학습 주제 */}
      <Route path="learn/01" element={<PassingProps />} />
      <Route path="learn/02" element={<LiftingStateUp />} />
      <Route path="learn/03" element={<PropsDrillingIssue />} />
      <Route path="learn/04/01" element={<ReactContextAPI1 />} />
      <Route path="learn/04/02" element={<ReactContextAPI2 />} />
      <Route path="learn/05" element={<RefExampleMemoValues />} />
      <Route path="learn/06" element={<RefExampleReferencingDOM />} />
      <Route path="learn/07/01" element={<GSAP_Animation />} />
      <Route path="learn/07/02" element={<GSAP_Context />} />
      <Route path="learn/08" element={<FramerMotion_Animation />} />
      <Route path="learn/09" element={<ComponentPropTypes />} />
    </Route>
  )
);

export default router;
