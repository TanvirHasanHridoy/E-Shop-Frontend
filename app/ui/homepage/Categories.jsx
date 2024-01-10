import React from "react";
import { categories } from "../../assets/DummyDatas.js";
import CategoryItem from "./CategoryItem.jsx";

const Categories = () => {
  return (
    <div className="flex w-full justify-between items-center p-10">
      {categories.map((item) => (
        // <div key={item.id}>{item.title}</div>
        <CategoryItem className="flex-[1] " key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
