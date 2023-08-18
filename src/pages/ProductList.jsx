import { getPbImageURL, numberWithComma } from "@/utils";
import { useState, useEffect } from "react";

const PB_PRODUCTS_ENDPOINT = `http://127.0.0.1:8090/api/collections/products/records`;

function ProductList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(PB_PRODUCTS_ENDPOINT);
        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    // if (data) {
    //   if ('items' in data) {
    //     if (Array.isArray(data.items)) {
    //       return data.items.map(item => (
    //         <ProductItem key={item.id} item={item} />
    //       ))
    //     }
    //   }
    // }
    <ul className="grid grid-cols-3 m-10">
      {data &&
        data.items &&
        data.items?.map((item) => <ProductItem key={item.id} item={item} />)}
    </ul>
  );
}

function ProductItem({ item } /* {id, created, title, color, price, photo} */) {
console.log(item)
  // 데이터 가져오는 커스텀 훅 만들기
  return (
    <li>
      <figure className="flex flex-col items-start">
        <img src={getPbImageURL(item, "photo")} className="h-96 w-auto" alt="" />
        <figcaption className="flex flex-col">
          <span className="title">
            {item.title} [{item.color}]
          </span>
          <span className="price">KRW {numberWithComma(item.price)}</span>
        </figcaption>
      </figure>
    </li>
  );
}

export default ProductList;
