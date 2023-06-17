import { FiShoppingCart } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <h1>Vshop</h1>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
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
          </ul>
          <div>
            <FiShoppingCart className="w-8 h-8" />
          </div>
          <div>
            <RxAvatar className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
