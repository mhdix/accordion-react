import { Children, useState } from "react";
import {ChevronUpIcon} from '@heroicons/react/24/outline'
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
  const [open, setOpen] = useState(null); // accordion id
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          id={item.id}
          title={item.title}
          key={item.id}
          open={open}
          setOpen={setOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        id={4}
        title='sample accordion'
        open={open}
        setOpen={setOpen}
      >
        <p>salam sample accordion</p>
        <ul>
            <li>one</li>
            <li>2</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Accordion;

function AccordionItem({ title, id, open, setOpen, children }) {
    const isOpen = id === open 
    
  return (
    <div
      className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}
      onClick={() => setOpen(id)}
    >
      <div className="accordion-item__header">
        <p>{title}</p>
        <span className="icon">
          <ChevronUpIcon
            style={{
              width: "2rem",
              transition: " 0.2s linear all",
              rotate: isOpen && "180deg",
            }}
          />
        </span>
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}
