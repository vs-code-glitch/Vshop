import { FiShoppingCart } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/vshopSlice";
function Header() {
  const productData = useSelector((state) => state.vshop.productData);
  const userInfo = useSelector((state) => state.vshop.userInfo);

  const auth = getAuth();
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Log Out Successfully");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <h1>Vshop</h1>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          {/* <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-3000">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-3000">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-3000">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-3000">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-3000">
              Blog
            </li>
          </ul> */}
          <div className="relative">
            <Link to="/cart">
              <FiShoppingCart className="w-8 h-8" />
              <span className="absolute w-6 top-0 left-4 z-1  bg-red-300 rounded-3xl text-sm flex items-center justify-center text-bold">
                {productData.length}
              </span>
            </Link>
          </div>
          <Link to="/login">
            {userInfo ? (
              <img src={userInfo.image} className="w-8 h-8 rounded-3xl" />
            ) : (
              <RxAvatar className="w-8 h-8" />
            )}
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semi-bold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
          {userInfo && (
            <button
              onClick={handleSignOut}
              className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover::bg-gray-800 duration-300"
            >
              Sign Out
            </button>
          )}
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

export default Header;
