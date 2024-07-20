"use client";
import React, { useState } from "react";
import Container from "./Container";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const FoodCategories = () => {
  const [active, setActive] = useState(0);
  const categories = [
    {
      name: "soup",
      imageUrl: "https://lowcarbafrica.com/wp-content/uploads/2018/06/Egusi-Soup-IG-1.jpg",
    },
    {
      name: "rice",
      imageUrl: "/assets/images/luscious_chow_hero.jfif",
    },
    {
      name: "drinks",
      imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "bread",
      imageUrl: "/assets/images/1.jpg",
    },
    {
        name: "cake",
        imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
  ];
  return (
    <Container className="py-10">
         <h3 className="lora-heading capitalize text-2xl sm:text-4xl tracking-wider text-center">
        Categories
      </h3>
      <div className="flex flex-col md:flex-row gap-5 h-[700px] md:h-[23rem] w-full my-10">
        {categories.map((item, index) => (
          <article
            className={`relative cursor-pointer overflow-hidden ${
              active === index ? "flex-[5]" : "flex-1"
            } ease-in-out duration-150`}
            onMouseEnter={()=>setActive(index)}
          >
            <img
              src={item.imageUrl}
              className="absolute h-full w-full object-cover"
              alt=""
            />
            <div className={`relative z-10 flex items-end h-full p-2 ease-in-out duration-150  bg-gradient-to-b to-customBlack/80 justify-between
             ${active === index ? 'from-white/0' : 'from-customBlack/20'}`}>
              <h4 className="text-2xl md:text-3xl lora-heading capitalize vertical-text">{item.name}</h4>
              <button className={`${active === index ? '' : 'hidden'} text-sm flex items-center gap-2 border-b `}>
                View Menu <HiOutlineArrowLongRight /></button>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
};

export default FoodCategories;
