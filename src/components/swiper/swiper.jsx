import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  ButtonComponent  from "../buttonsComponents/ButtonComponent.jsx";

import "./swiper.scss";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export const SwiperComponent = ({ props }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={100}
        speed={600}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true} 
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {props.map((item, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="card">
              <h3 className="titleCard">{item.title}</h3>
              <p className="pCard">{item.text}</p>
              <ButtonComponent />
            </div>
            <img className="img" src={item.gif} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
