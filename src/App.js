import React from "react";
import { useState } from "react";
import Item from "./components/accordion-item";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    isOpen: false,
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    isOpen: false,
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    isOpen: false,
  },
];

export default function App() {
  const [symbol, setSymbol] = useState(faqs);
  return (
    <div className="accordion">
      {symbol.map((item, index) => {
        return <Item key={item.title} index={index} title={item.title} isOpen={item.isOpen} text={item.text} symbol={symbol} setSymbol={setSymbol} />;
      })}
    </div>
  );
}
