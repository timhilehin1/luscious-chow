import React from "react";
import Container from "./Container";

const About = () => {
  return (
    <Container className="my-20">
      <h3 className="lora-heading capitalize text-2xl sm:text-4xl tracking-wider text-center">
        About Us
      </h3>
      <section className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2 my-10">
        <div className="relative h-[150px] md:min-h-[400px]">
          <img src="/assets/images/1.jpg" className="absolute h-full w-full object-cover " alt="" />
        </div>
        <div className="md:p-14 flex items-center">
          {/* <h4 className='lora-heading capitalize text-xl'>Our Kitchen</h4> */}
          <p className="tracking-wide text-customGray leading-relaxed">
           <strong className="lora-heading capitalize text-white text-lg underline">Luscious Chow</strong> is a food brand created with the sole aim of putting
            smiles on faces with good food. We believe that happiness can be
            forged through good food, hence we spare no expense in delivering
            quality homely and delicious meals to customers. We currently
            provide cloud kitchen services and are able to send out deliveries
            all round Lagos.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default About;
