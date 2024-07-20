"use client";
import React from "react";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/effect-fade';

const OrderMeal = () => {
  return (
    <Container>
      <h3 className="lora-heading capitalize text-2xl sm:text-4xl tracking-wider text-center">
        Order Now!
      </h3>

      <div className="flex flex-col md:flex-row gap-5 md:gap-0 mt-10">
        <section className="flex flex-col gap-6 md:py-14 w-full">
          <article>
            <h3 className="text-customGray text-sm">Whatsapp</h3>
            <a href="" className="lora-heading text-2xl">
              0811108992
            </a>
          </article>

          <article>
            <h3 className="text-customGray text-sm">Email</h3>
            <a href="" className="lora-heading text-2xl">
              lusciouschow.ng@gmail.com
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

        <section className="relative md:w-[60%] h-[250px] md:h-auto">
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
            <SwiperSlide className="w-full h-full relative">
            <img src="/assets/images/1.jpg" className=' absolute h-full w-full object-cover' alt="" />
            </SwiperSlide>

            <SwiperSlide className="w-full h-full">
            <img src="/assets/images/luscious_chow_hero.jfif" className=' absolute h-full w-full object-cover' alt="" />
            </SwiperSlide>

          </Swiper>
        </section>
      </div>
    </Container>
  );
};

export default OrderMeal;
