import React from "react";
import style from "./style.module.scss";

export default function AcordionItem({ title, text, index, setSymbol, symbol, isOpen }) {
  const handleClick = () => {
    const upgradeItems = symbol.map((item) => {
      if (item.isOpen) {
        return { ...item, isOpen: !item.isOpen };
      }
      if (title === item.title) {
        return { ...item, isOpen: !item.isOpen };
      }

      return item;
    });
    setSymbol(upgradeItems);
  };
  return (
    <div onClick={handleClick} className={!isOpen ? style.item : `${style.item} ${style.open}`}>
      <p className={!isOpen ? style.number : `${style.number} ${style.openNumber}`}>{index >= 10 ? index + 1 : "0" + (index + 1)}</p>
      <p className={!isOpen ? style.title : `${style.number} ${style.openTitle}`}>{title}</p>
      <p className={style.icon}>{!isOpen ? "+" : "-"}</p>
      {isOpen && <div className={style.contentBox}>{text}</div>}
    </div>
  );
}
