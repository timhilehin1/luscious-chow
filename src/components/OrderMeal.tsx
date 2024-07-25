"use client";
import React from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { GoArrowUpRight } from "react-icons/go";
import { handleWhatsappOrderClick } from "@/utils/WhatsappOrderMessage";
import Image from "next/image";

interface OrderProps {
  data: {
    businessPhone: string;
    businessEmail: string;
  };
  featured: {
    productName: string;
    productImageUrl: string;
  }[];
}

const OrderMeal: React.FC<OrderProps> = ({ data, featured }) => {
  return (
    <Container id='contact'>
      <h3 className="lora-heading capitalize text-2xl sm:text-4xl tracking-wider text-center">
        Order Now!
      </h3>

      <div className="flex flex-col md:flex-row gap-5 md:gap-0 mt-10">
        <section className="flex flex-col gap-6 md:py-14 w-full">
          <article>
            <h3 className="text-customGray text-sm">Whatsapp</h3>
            <button
              onClick={() => handleWhatsappOrderClick(data.businessPhone)}
              className="lora-heading 
            text-2xl flex gap-3 items-center"
            >
              {data.businessPhone} <GoArrowUpRight size={20} />
            </button>
          </article>

          <article>
            <h3 className="text-customGray text-sm">Email</h3>
            <a
              href={`mailto:${data.businessEmail}`}
              className="lora-heading text-2xl"
            >
              {data.businessEmail}
            </a>
          </article>

          <article>
            <h3 className="text-customGray text-sm">Opening Hours</h3>
            <p className="lora-heading text-2xl">
              Monday to Sunday <br />
              09:00 - 16:00
            </p>
          </article>
        </section>

        <section className="relative h-[250px] md:h-auto w-[60%]">
          <div className="absolute h-full w-full  bg-gradient-to-b from-white/0 to-customBlack/90 z-10"></div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            modules={[Autoplay, EffectFade]}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            effect="fade"
            className="h-full w-full"
          >
            {featured.map((item) => (
              <SwiperSlide className="w-full h-full relative">
                <Image
                  src={item.productImageUrl}
                  fill
                  className="h-full w-full rounded-tr-3xl rounded-bl-2xl object-cover"
                  alt={item.productName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </Container>
  );
};

export default OrderMeal;
