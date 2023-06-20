/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/vshopSlice";
import { ToastContainer, toast } from "react-toastify";

function ProductsCard({ product }) {
  const dispatch = useDispatch();
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
    <div className="group shadow-2xl">
      <div
        className="  w-full h-96 cursor-pointer overflow-hidden"
        onClick={handleDetails}
      >
        <img
          className="w-96 h-96 object-contain group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>
      <div className="w-full  border-black-500 rounded px-2 py-4">
        <div className="flex flex-col">
          <div className="">
            <h2 className="text-base text-[13px]  font-bold">
              {product.title.substring(0, 20)}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col  text-sm">
              <p className="font-light">{product.category}</p>
              <p className="font-semibold text-red-500">$ {product.price}</p>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added to cart`)
              }
              className="bg-black w-full h-10  text-white hover:text-green-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default ProductsCard;
