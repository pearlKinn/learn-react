import { useEffect, useId, useState } from "react";
import { useParams } from "react-router-dom";
import useProductItem from "@/hooks/useProductItem";
import Spinner from "@/components/Spinner";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  title: "",
  color: "",
  price: 0,
};

function ProductEdit() {
  const titleId = useId();
  const priceId = useId();
  const colorId = useId();

  const { productId } = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (!isLoading && data) {
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color,
      });
    }
  }, [isLoading, data]);

  const handleChangeInput = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleEditProduct = (e) => {
    e.preventDefault(); // <- submit을 하면 refresh가 되는데 그걸 방지하기 위해
    console.log(formState); // 서버에 업데이트 요청할 데이터 (서버 전송 요청)
    // client -> server
    // console.log(`${import.meta.env.VITE_PB_API}/collections/products/records/${productId}`)//?

    // Content-Type: application/json
    fetch(
      `${
        import.meta.env.VITE_PB_API
      }/collections/products/records/${productId}`,
      {
        method: "PATCH", // 수정!!
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      }
    )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleDeleteProduct = () => {
    const userConfirm = confirm("정말로 지우실 건가요?");

    if (userConfirm) {
      fetch( `${ import.meta.env.VITE_PB_API }/collections/products/records/${productId}`,
        {
          method: "DELETE", // 수정!!
        }
      )
        .then(() => {
          // PB에서 지웠다(성공)
          // 제품 목록 페이지로 이동
          navigate("/products");
        })
        .catch((err) => console.error(err));
    }
  };
  if (isLoading) {
    return <Spinner size={120} />;
  }
  if (data) {
    return (
      <>
        <h2 className="text-2xl text-center">
          {data.title}({data.color}) 수정 폼
        </h2>
        <form onSubmit={handleEditProduct} className="flex flex-col">
          {/* title */}
          <div className="flex gap-3">
            <label htmlFor={titleId}>타이틀</label>
            <input
              type="text"
              name="title"
              id={titleId}
              value={formState.title}
              onChange={handleChangeInput}
              className="border border-gray-600"
            />
          </div>
          {/* color */}
          <div className="flex gap-3">
            <label htmlFor={colorId}>컬러</label>
            <input
              type="text"
              name="color"
              id={colorId}
              value={formState.color}
              onChange={handleChangeInput}
              className="border border-gray-600"
            />
          </div>
          {/* price */}
          <div className="flex gap-3">
            <label htmlFor={priceId}>price</label>
            <input
              type="number"
              name="price"
              id={priceId}
              value={formState.price}
              onChange={handleChangeInput}
              className="border border-gray-600"
            />
          </div>
          <div className=" flex gap-4 justify-end">
            <button type="submit" className="border border-gray-950">
              edit
            </button>
            <button
              type="button"
              className="border border-gray-950"
              onClick={handleDeleteProduct}
            >
              delete
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default ProductEdit;
