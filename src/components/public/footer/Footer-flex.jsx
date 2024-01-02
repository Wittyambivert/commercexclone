import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiSmartphone,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import backpack from "../../../../src/assets/images/featured-products/backpack.jpg";
import keyboard from "../../../../src/assets/images/featured-products/keyboard.jpg";
import vrHeadset from "../../../../src/assets/images/featured-products/vr-headset.jpg";
import paypal from "../../../../src/assets/images/footer/paypal.svg";
import stripe from "../../../../src/assets/images/footer/stripe.svg";
import mastercard from "../../../../src/assets/images/footer/mastercard.svg";

export function Footer() {
  return (
    <section className="bg-black rounded-t-[5rem] text-white py-[4rem] px-[1rem]">
      <div className="footer-body">
        <div className="logo-section mb-6  border-b-2 border-gray-500 pb-6">
          <h2 className="text-2xl font-semibold mb-2">Commerce X</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consecte dol adipiscing elit aliquam
            maur.
          </p>
          <div className="social-media-icons flex gap-4 mt-4 items-center">
            <FiFacebook />
            <FiTwitter /> <FiInstagram /> <FiLinkedin /> <FiYoutube />
          </div>
        </div>
        <div className="contact-us-section">
          <h2 className="uppercase mb-4">Contact us</h2>
          <div className="flex items-center mb-6">
            <FiMail size={34} className="mr-4" />
            <div className="flex flex-col">
              <h3 className="">Email</h3>
              <p className="text-gray-400 text-sm">Contact@commerce.com</p>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <FiSmartphone size={34} className="mr-4" />
            <div className="flex flex-col">
              <h3 className="">Phone</h3>
              <p className="text-gray-400 text-sm">(414) 687 - 5892</p>
            </div>
          </div>
        </div>
        <div className="product flex flex-col gap-4 mt-12">
          <h2 className="uppercase mb-2">Product</h2>
          <div className="product-item flex items-center">
            <div className="w-[5rem] h-[5rem] mr-4 bg-yellow-400 rounded-2xl overflow-hidden">
              <img src={backpack} />
            </div>
            <div className="">
              <h3 className="title">Backpack</h3>
              <p className="text-gray-400">$ 39.99 USD</p>
            </div>
          </div>
          <div className="product-item flex items-center">
            <div className="w-[5rem] h-[5rem] mr-4 bg-yellow-400 rounded-2xl overflow-hidden">
              <img src={keyboard} />
            </div>
            <div className="">
              <h3 className="title">Wireless Keyboard</h3>
              <p className="text-gray-400">$ 49.99 USD</p>
            </div>
          </div>
          <div className="product-item flex items-center">
            <div className="w-[5rem] h-[5rem] mr-4 bg-yellow-400 rounded-2xl overflow-hidden">
              <img src={vrHeadset} />
            </div>
            <div className="">
              <h3 className="title">VR Headset</h3>
              <p className="text-gray-400">$ 579.99 USD</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2">
          <div className="menu-section mt-12">
            <h3 className="title uppercase mb-3">menu</h3>
            <div className="flex gap-8 [&_*]:text-gray-400">
              <div className="flex flex-col gap-2 ">
                <a>Home V1</a>
                <a>Home V1</a>
                <a>Home V1</a>
                <a>Home V1</a>
                <a>Home V1</a>
                <a>Home V1</a>
              </div>
              <div className="flex flex-col  gap-2">
                <a>Menu V1</a>
                <a>Menu V1</a>
                <a>Menu V1</a>
                <a>Menu V1</a>
                <a>Menu V1</a>
              </div>
            </div>
          </div>
          <div className="utility-pages-section mt-12">
            <h3 className="title uppercase mb-3">Utility</h3>
            <div className="flex [&_*]:text-gray-400">
              <div className="flex flex-col gap-2">
                <a>Home V1</a>
                <a>Home V1</a>
                <a>Home V1</a>
                <a>Home V1</a>
                <a>Home V1</a>
                <a>Home V1</a>
                <a className="flex items-center gap-2 font-bold pb-2 border-b-2 border-gray-600">
                  <span>More Webflow Templates</span> <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright flex flex-col items-center mt-16 pt-8 border-t-2 border-gray-600">
        <div className="mb-8 text-center text-gray-400">
          Copyright © Commerce X | Designed by BRIX Templates - Powered by
          Webflow
        </div>
        <div className="flex gap-4">
          <img src={paypal} />
          <img src={stripe} />
          <img src={mastercard} />
        </div>
      </div>
    </section>
  );
}
