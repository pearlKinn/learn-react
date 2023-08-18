import useDocumentTitle from "@/hooks/useDocumentTitle";

function Home() {
  useDocumentTitle('home')
  return (
    <div>
      <h2 className="text-emerald-500">Home</h2>
    </div>
  );
}

export default Home;