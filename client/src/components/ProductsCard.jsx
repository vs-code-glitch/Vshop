import { useNavigate } from "react-router-dom";
function ProductsCard({ product }) {
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id)
      .toLowerCase()
      .split(" ")
      .join("")
      .replace(/[^a-zA-Z ]/g, "");
  };
  const rootId = idString(_id);
  console.log(rootId);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group" onClick={handleDetails}>
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full  border-[1px] border-emerald-200 rounded px-2 py-4">
        <div className="flex flex-col">
          <div className="">
            <h2 className="text-base text-[13px]  font-bold">
              {product.title.substring(0, 35)}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col  text-sm">
              <p className="font-light">{product.category}</p>
              <p className="font-semibold text-red-500">$ {product.price}</p>
            </div>
            <button className="bg-black w-full h-10  text-white hover:text-green-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
