import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Utilice las funcionalidades estándar de OFSAA, gestione todos los supuestos definidos en OFSAA sin conocimientos de TI."
            // author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Obtenga una visión de los factores que impulsan la rentabilidad en toda la empresa, el rendimiento ajustado al riesgo y el rendimiento en múltiples dimensiones empresariales, así como la rentabilidad a nivel de operación para habilitar la rentabilidad por cliente, segmento, producto y canal."
            // author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Aprove un proceso de medición del rendimiento sostenible, repetible e integrado para impulsar el rendimiento ajustado al riesgo en toda la empresa y obtener así una visión integrada de Riesgos y Finanzas."
            // author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        {/* <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Integre completamente los requerimientos analíticos de Riesgos y Finanzas integrando sus soluciones analíticas en un modelo de industria que comparte la misma plataforma y motor de flujos de datos, así como reglas de negocio y plataforma analítica."
            // author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            // author="Ralph Waldo Emerson"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
            // author="Ralph Waldo Emerson"
          />
        </LogoWrapper> */}
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
