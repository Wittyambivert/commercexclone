// import { useState } from "react";

// export const Testing = () => {
//   const [isActive, setIsActive] = useState(false);

//   console.log(isActive);

//   return (
//     <div className="w-[100%] flex justify-center mt-[6rem]">
//       <div
//         id="accordion-collapse"
//         data-accordion="collapse"
//         className="w-[50%]"
//       >
//         <h2 id="accordion-collapse-heading-1">
//           <button
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//             data-accordion-target="#accordion-collapse-body-1"
//             aria-expanded="true"
//             aria-controls="accordion-collapse-body-1"
//             onClick={() => setIsActive(!isActive)}
//           >
//             <span>What is Flowbite?</span>
//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>

//         <div
//           id="accordion-collapse-body-1"
//           className={!isActive && "hidden"}
//           aria-labelledby="accordion-collapse-heading-1"
//         >
//           <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is an open-source library of interactive components built
//               on top of Tailwind CSS including buttons, dropdowns, modals,
//               navbars, and more.
//             </p>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Check out this guide to learn how to{" "}
//               <a
//                 href="/docs/getting-started/introduction/"
//                 className="text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 get started
//               </a>{" "}
//               and start developing websites even faster with components on top
//               of Tailwind CSS.
//             </p>
//             <p className="mb-4 text-gray-500 dark:text-gray-400">
//               What are the differences between Flowbite and Tailwind UI?
//             </p>
//           </div>
//         </div>

//         <h2 id="accordion-collapse-heading-2">
//           <button
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//             data-accordion-target="#accordion-collapse-body-2"
//             aria-expanded="false"
//             aria-controls="accordion-collapse-body-2"
//             onClick={() => setIsActive(!isActive)}
//           >
//             <span>Is there a Figma file available?</span>
//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>

//         <div
//           id="accordion-collapse-body-2"
//           className={!isActive && "hidden"}
//           aria-labelledby="accordion-collapse-heading-2"
//         >
//           <div className="p-5 border border-gray-200 dark:border-gray-700">
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               Flowbite is first conceptualized and designed using the Figma
//               software so everything you see in the library has a design
//               equivalent in our Figma file.
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Check out the{" "}
//               <a
//                 href="https://flowbite.com/figma/"
//                 className="text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 Figma design system
//               </a>{" "}
//               based on the utility classNamees from Tailwind CSS and components
//               from Flowbite.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function HeroHeader() {
  const slide = [
    // {
    //     img:"RCCGCampaign.jpg",
    //     header:"We connect brands and people",
    //     content:"Connection is our mission"

    // },
    {
      img: "pexels-sheff-production-14611769.jpg",
      header: "We are more than an advertisement company",
      content: "We connect partners with clients and clients with customers",
    },
    {
      img: "RCCG_Design.png",
      header: "We connect brands and people",
      content: "Connection is what drives us",
    },

    // {
    //     img:"pexels-rodnae-productions-10503654.jpg",
    //     header:"We connect cool people with cool brands",
    //     content:"The foundations and aspirations of our business remain true to those established by our visionary founders, and their innovation and energy continue to be our inspiration. Our passion and entrepreneurial culture will ensure that we deliver for our customers in safety, quality and assurance – today and in the future."

    // },
    {
      img: "LOCAL_CLEANING_SERVICES.png",
      header: "We are more than a technology company",
      content: "We create opportunities.",
    },
    // {
    //     img:"pexels-erik-mclean-5628260.jpg",
    //     header:"We are more than industrial company 5",
    //     content:"We create leads."

    // },
  ];
  return (
    <>
      <div className="glax_tm_hero_header_wrap">
        <div className="slider_total_wrap">
          <div className="swiper-container swiper-container-horizontal">
            <Swiper
              navigation={{
                prevEl: ".tm_prev_button",
                nextEl: ".tm_next_button",
              }}
              pagination={{
                el: ".swiper-pagination",
                type: "fraction",
                formatFractionCurrent: function (number) {
                  return "0" + number;
                },
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation]}
              className="swiper-wrapper"
            >
              {slide.map((item, i) => (
                <SwiperSlide className="image_wrap" key={i}>
                  <div
                    className="bg_img"
                    style={{ backgroundImage: `url(img/slider/${item.img})` }}
                  />
                  <div className="swiper_content">
                    <div className="texts_wrap">
                      <h3>{item.header}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="glax_tm_swiper_content">
          <div className="container">
            <div className="swiper_content">
              <div className="texts_wrap">
                <h3>We connect brands and people</h3>
                <p>
                  Modern and mobile advertisement that connects businessess and
                  brands to the people that need them.
                </p>
              </div>
              <div className="switches">
                <div className="prev_next">
                  <div className="tm_next_button" />
                  <div className="tm_prev_button" />
                </div>
                <div className="swiper-pagination my_swiper_pagination pagination-custom" />
              </div>
            </div>
          </div>
        </div>
        <div className="swiper_overlay" />
      </div>
    </>
  );
}
