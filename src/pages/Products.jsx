import useDocumentTitle from "@/hooks/useDocumentTitle";

function Products() {
  useDocumentTitle('products')
  return (
    <div>
      <h1 className="text-emerald-500">Products</h1>
    </div>
  );
}

export default Products;