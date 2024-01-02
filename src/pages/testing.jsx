import { useState } from "react";

export const Testing = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = (index) => {
    if (isActive === index) {
      setIsActive(false);
    }

    setIsActive(index);
  };

  const handleFileUpload = () => {
    const manu = document.getElementById("dropzone-file");

    console.log(manu?.value);
  };

  return (
    <>
      {/* <div className="w-[100%]  mt-[6rem]">
        {accordionData.map((item, index) => (
          <AccordionItems
            key={index}
            title={item.title}
            description={item.content}
            isActive={index === isActive}
            toggle={() => toggle(index)}
          />
        ))}
      </div> */}

      <div>
        {/* <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label> */}
        {/* <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        /> */}
        {/* <input type="file"></input> */}

        <div className="flex items-center justify-center w-[20rem]">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              name="solid"
              className="hidden"
              onClick={handleFileUpload}
            />
          </label>
        </div>
      </div>

      <div className="relative max-w-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          datepicker
          datepicker-autohide
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
        />
      </div>

      <div className="p-20 space-y-10">
        <button className="px-20 py-5 bg-sky-300 hover:bg-amber-500 peer">
          Button
        </button>
        {/* <div
          className="p-10 text-2xl 
                    border border-slate-400
                    peer-hover:drop-shadow-lg
                    peer-hover:bg-purple-700
                    peer-hover:text-4xl
                    peer-hover:text-white
                    ease-in duration-300
                    "
        >
          KindaCode.com
        </div> */}

        <div className="peer-hover:text-4xl ease-in duration-300">JJ Jules</div>
      </div>
    </>
  );
};

const AccordionItems = ({ title, description, toggle, isActive }) => {
  //   const [isActive, setIsActive] = useState(false);

  return (
    <div
      id="accordion-collapse"
      data-accordion="collapse"
      classNameName="w-[50%]"
    >
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
          onClick={toggle}
        >
          <span>{title}</span>
          {/* <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg> */}
        </button>
      </h2>

      {isActive && (
        <>
          <div
            id="accordion-collapse-body-1"
            className=""
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const accordionData = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                laborum cupiditate possimus labore, hic temporibus velit dicta earum
                suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                voluptatem.`,
  },
  {
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
                reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
                quaerat iure quos dolorum accusantium ducimus in illum vero commodi
                pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
                quidem maiores doloremque est numquam praesentium eos voluptatem amet!
                Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
                quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
                dolor ut sequi minus iste? Quas?`,
  },
];
