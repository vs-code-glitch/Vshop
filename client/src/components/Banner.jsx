import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";
function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/revised/new/Haircare-Herofader-PC._CB594539534_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/BX-GW-PC_Hero-Toys_BAU_2x_carrom._CB587561779_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/BISS_GW/GWNEW/3000x1200-._CB603864057_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/June23/EOSS/UNREC/Shoes/Shoes_3000._CB603440768_.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 5 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 5 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex duration-1000"
        >
          <img
            className="w-screen h-full object-cover "
            src={data[0]}
            alt="img1"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover "
            src={data[1]}
            alt="img2"
          />
          <img
            className="w-screen h-full object-cover "
            src={data[2]}
            alt="img3"
          />
          <img
            className="w-screen h-full object-cover "
            src={data[3]}
            alt="img4"
          />
          <img
            className="w-screen h-full object-cover "
            src={data[4]}
            alt="img5"
          />
          <img
            className="w-screen h-full object-cover "
            src={data[5]}
            alt="img6"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[4px] border-white-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-white-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[4px] border-white-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-white-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
