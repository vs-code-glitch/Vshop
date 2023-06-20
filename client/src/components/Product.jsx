import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/vshopSlice";
import { ToastContainer, toast } from "react-toastify";
function Product() {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  const rating = Math.ceil(location.state.item.rating.rate);
  const reviews = Math.ceil(location.state.item.rating.count);
  let [baseqty, setBaseQty] = useState(1);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="shadow-2xl">
          <img
            className="w-96 h-96  object-contain"
            src={details.image}
            alt="productImg"
          />
        </div>
        <div className="w-3/5 flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-medium">{details.title}</h2>
            <div className="text-xl font-medium">${details.price}</div>
            <p>{details.description}</p>
            <p className="text-base text-gray-500">
              Category :{" "}
              <span className="font-medium capitalize">{details.category}</span>
            </p>
          </div>
          <div className="flex -items-center gap-3 text-base">
            <div className="flex gap-2">
              {[...Array(rating)].map((e, i) => (
                <span className="star" key={i}>
                  🌟
                </span>
              ))}
            </div>
            <div>({reviews} reviews)</div>
          </div>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseqty === 1 ? (baseqty = 1) : baseqty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseqty}</span>
                <button
                  onClick={() => setBaseQty(baseqty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details.id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseqty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added to cart`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
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

export default Product;
