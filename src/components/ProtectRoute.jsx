import { useAuth } from "@/contexts/Auth";
import { Navigate } from "react-router-dom";
import { element } from "prop-types";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ProtectRoute({ children }) {
  // 인증 여부를 모른 채 보호된 루트로 사용자가 URL을 직접 입력하여 접근 시도
  // 인증 여부 확인
  // 1.. 인증 사용자 ->children
  // 2.. 비인증 사용자 -> 로그인
  // 사용자가 로그인 시도
  //  가입된 
  const {pathname,search,hash} = useLocation()
  const { isAuth } = useAuth();

const wishLocationPath = `${pathname}${search}${hash}`;


  useEffect(() => {
    if (!isAuth) {
      toast("로그인 된 사용자만 이용 가능한 페이지입니다.", {
        icon: "⚠️",
        ariaProps: {
          role: "alert",
          "aria-live": "polite",
        },
      });
    }
  }, [isAuth]);

  if (!isAuth) {
    return <Navigate to="/signin" state={{
      wishLocationPath
    }}/>;
  }

  return children;
}

ProtectRoute.propTypes = {
  children: element,
};

export default ProtectRoute;
