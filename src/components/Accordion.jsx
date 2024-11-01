import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Accordoion #1",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, amet praesentium voluptatibus voluptas aperiam nam, id similique odio natus, animi officiis fugiat. Eos, et ipsa? Tempora assumenda sed rem perspiciatis.",
  },
  {
    id: 2,
    title: "Accordoion #2",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, amet praesentium voluptatibus voluptas aperiam nam, id similique odio natus, animi officiis fugiat. Eos, et ipsa? Tempora assumenda sed rem perspiciatis.",
  },
  {
    id: 3,
    title: "Accordoion #3",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, amet praesentium voluptatibus voluptas aperiam nam, id similique odio natus, animi officiis fugiat. Eos, et ipsa? Tempora assumenda sed rem perspiciatis.",
  },
];

const Accordion = () => {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} accordion={item} />
      ))}
    </div>
  );
};

export default Accordion;

function AccordionItem({ accordion }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}
      onClick={() => setIsOpen((is) => !is)}
    >
      <div className="accordion-item__header">{accordion.title}</div>
      <div className="accordion-item__content">{accordion.text}</div>
    </div>
  );
}
