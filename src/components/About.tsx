import React from "react";
import Image from "next/image";
import Container from "./Container";

interface AboutProps{
  data:{
    businessLogo: string
    businessDesciption: string
  }
}

const About:React.FC<AboutProps> = ({data}) => {
  return (
    <Container className="my-20">
      <h3 className="lora-heading capitalize text-2xl sm:text-4xl tracking-wider text-center">
        About Us
      </h3>
      <section className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-[40%,1fr] my-10 min-h-[15rem]">
        <div className="relative h-[15rem] md:h-full">
        <Image src={data.businessLogo} alt="" fill className="object-contain "/>
        </div>
        <div className="md:p-14 flex items-center">         
          <p className="tracking-wide text-customGray leading-relaxed">
          {data.businessDesciption}
          </p>
        </div>
      </section>
    </Container>
  );
};

export default About;
