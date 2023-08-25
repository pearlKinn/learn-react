import { useEffect, useId, useState } from "react";
import { useParams } from "react-router-dom";
import useProductItem from "@/hooks/useProductItem";
import Spinner from "@/components/Spinner";
import { useNavigate } from "react-router-dom";
import {
  useDelete as useDeleteProduct,
  useUpdate as useUpdateProduct,
} from "@/hooks/products/useProducts";
import debounce from "@/utils/debounce";

const initialFormState = {
  title: "",
  color: "",
  price: "",
  /* 숫자로 설정했을 때 defaultValue를 사용하면 원래 값이 뜨지 않고 0원으로 뜨는 이슈가 있어 숫자가 아닌 빈 문자열로 바꿔주면 된다. */
};

function ProductEdit() {
  const titleId = useId();
  const priceId = useId();
  const colorId = useId();

  //% useParams()가 반환하는 객체에서 productId 속성의 값을 추출하여 productId 변수에 할당
  const { productId } = useParams(); // useParams() -> 객체 반환

  const navigate = useNavigate();
  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

  const deleteProduct = useDeleteProduct();
  const updateProduct = useUpdateProduct();

  useEffect(() => {
    if (!isLoading && data) {
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color,
      });
    }
  }, [isLoading, data]);

  // const handleChangeInput = ({ target }) => {
  //   setFormState({
  //     ...formState,
  //     [target.name]: target.value,
  //   });
  // };

  const handleDebounceChangeInput = debounce(({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  });

  const handleEditProduct = (e) => {
    e.preventDefault(); //~ <- submit을 하면 refresh가 되는데 그걸 방지하기 위해

    updateProduct(productId, formState) // formState - 서버에 업데이트 요청할 데이터 (서버 전송 요청)
      .then(() => navigate("/products"))
      .catch((error) => console.error(error));

    //! client -> server
  };
  // Content-Type: application/json
  /**  ⬇️⬇️⬇️
  fetch(
  //^  `${                                           
  //^    import.meta.env.VITE_PB_API                 
  //^  }/collections/products/records/${productId}`, 
  //^  {                                             
  //^    method: "PATCH", // 수정!!                   
  //^    headers: {                                  
  //^      "Content-Type": "application/json",       
  //^    },                                          
  //^    body: JSON.stringify(formState),            
  //^  }                                             
  //^)                                               
  //^  .then((response) => console.log(response))    
  //^  .catch((err) => console.log(err));            
  //^  */

  const handleDeleteProduct = () => {
    const userConfirm = confirm("정말로 지우실 건가요?");

    if (userConfirm) {
      deleteProduct(productId)
        .then(() => {
          navigate("/products");
        })
        .catch((err) => console.error(err));

      //^ fetch( `${ import.meta.env.VITE_PB_API }/collections/products/records/${productId}`,
      //^   {
      //^     method: "DELETE", // 수정!!
      //^   }
      //^ )
      //^   .then(() => {
      //^     // PB에서 지웠다(성공)
      //^     // 제품 목록 페이지로 이동
      //^     navigate("/products");
      //^   })
      //^   .catch((err) => console.error(err));
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
              defaultValue={formState.title} // 리액트가 제공하지 않는 함수를 사용할 때는  defaultValue 사용해야 한다.
              onChange={handleDebounceChangeInput} // debounce 함수
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
              defaultValue={formState.color}
              onChange={handleDebounceChangeInput}
              className="border border-gray-600"
            />
          </div>
          {/* price */}
          <div className="flex gap-3">
            <label htmlFor={priceId}>price</label>
            <input
              step={100}
              type="number"
              name="price"
              id={priceId}
              defaultValue={formState.price}
              onChange={handleDebounceChangeInput}
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
