import { useState } from "react";

export const Testing = () => {
  const [open, setOpen] = useState(false);
  const handleOpenClose = () => {
    if (open && true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="w-[100%] flex justify-center mt-[6rem]">
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="w-[50%]"
      >
        <h1>React Accordion Demo</h1>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
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
