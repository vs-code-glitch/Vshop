import ProductsCard from "./ProductsCard";
import PropTypes from "prop-types";

function Products({ products } ) {
  // console.log(products);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          aliquam maxime sapiente pariatur? Nihil autem facere, impedit tenetur
          corrupti quis rerum illum. Saepe delectus debitis quas, ipsa
          exercitationem quidem quia.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
