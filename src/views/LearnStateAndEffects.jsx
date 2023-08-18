import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";

const PB_TODOS_ENDPOINT = "http://127.0.0.1:8090/api/collections/todos/records";

function LearnStateAndEffects() {
  const { error, data, isLoading } = useFetchData(PB_TODOS_ENDPOINT);

  if (isLoading) {
    return <Spinner size={160} title="데이터 가져오는 중이에요." />;
  }

  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  // 성공적으로 데이터를 가져온 경우 화면
  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className="text-indigo-600 font-suit text-2xl">
        상태 및 이펙트 학습하기
      </h2>
      {/* JSX: 식만 사용 가능 */}
      {
        <ul>
          {data.items?.map((item) => (
            <li key={item.id}>
              <input type="checkbox" checked={item.done} readOnly />
              {item.doit}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default LearnStateAndEffects;
