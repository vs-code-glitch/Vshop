import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";

function Home() {
  // eslint-disable-next-line no-undef
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  },[data])
  console.log(data.data);
  return (
    <>
      <Banner />
      <Products products={products} />
    </>
  );
}

export default Home;
