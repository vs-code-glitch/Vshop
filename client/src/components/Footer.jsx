import {
  BsFacebook,
  BsHouseFill,
  BsPaypal,
  BsPersonFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <div className="bg-black text-[#949494] py-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-emerald-300 uppercase">
            Vshop
          </h1>
          <p className="text-white text-sm tracking-wide">@ Vsingh.com</p>
          <img
            className="w-60"
            src="../assets/payment-method.png"
            alt="paymentLogo"
          />
          <div className="flex gap-8 text-2xl text-gray-500">
            <BsFacebook className="hover:text-white duration-300 cursor-pointer" />
            <BsInstagram className="hover:text-white duration-300 cursor-pointer" />
            <BsGithub className="hover:text-white duration-300 cursor-pointer" />
            <BsTwitter className="hover:text-white duration-300 cursor-pointer" />
            <BsYoutube className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Kolkata, West Bengal India</p>
            <p>Mobile : +91 9090909090</p>
            <p>Email: vshop@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>{" "}
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsHouseFill />
              </span>{" "}
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <GoLocation />
              </span>{" "}
              help support
            </p>
          </div>
        </div>
        {/* Subscribe start here */}
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="email"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
