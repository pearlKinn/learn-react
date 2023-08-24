import pb from '@/api/pocketbase';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useEffect } from 'react';

function Home() {
  useDocumentTitle('홈');

  useEffect(() => {
    // 사용자 브라우저 로컬 스토리지에 저장
    const { isValid, model, token } = pb.authStore;
    console.log(isValid);
    console.log(model);
    console.log(token);
  }, []);

  // 로그아웃
  const handleSignOut = () => pb.authStore.clear(); 

  return (
    <div className="grid place-content-center bg-hero bg-center bg-cover min-h-[calc(100vh_-_200px)]">
      <h2 className="text-white tracking-widest font-extralight text-4xl uppercase">
        Shop<span className="text-[60px] text-yellow-400">.</span>
      </h2>
      <button
        type="button"
        onClick={handleSignOut}
        className="text-white text-4xl p-4"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Home;