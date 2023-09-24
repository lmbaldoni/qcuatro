import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
// Components
import ProjectBox from "../Elements/ProjectBox";

// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Certificados() {
  return (
    <Wrapper id="blog">
      {/* <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div> */}
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Certificaciones en OFSAA</h1>
            <p className="font13">
              Partner certificado con la suite Oracle Financial Services Applications
              <br />
              en los siguientes productos
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Certificados en FTP"
                text="Módulo de precios de transferencia de fondos (FTP) de Oracle Financial Services  , una aplicación de precios de transferencia de fondos con vencimiento igualado, que le permite determinar el diferencial obtenido sobre activos y pasivos, y el diferencial obtenido como resultado de la exposición a las tasas de interés para todas y cada una de las relaciones con los clientes."
                action={() => alert("clicked")
              }
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Certificados en Profitability Management"
                text="Módulo Oracle Financial Services Profitability Management  (PFT), que le permite calcular información de rentabilidad por productos, canales, segmentos e incluso clientes individuales, totalmente integrado con los módulos ALM y FTP."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Certiciados en ALM"
                text="Activo de servicios financieros de Oracle | Módulo de gestión de responsabilidades  (ALM), que le ayuda a medir y gestionar el riesgo de tipos de interés y de liquidez, realizar valoraciones del balance y pronosticar tanto los ingresos netos por intereses como los ingresos netos. La solución ALM de Oracle Financial Services mide y modela cada préstamo, depósito, inversión e instrumento fuera de balance de forma individual, ayudándole a comprender mejor los riesgos que han asumido y su sensibilidad a los cambios en las condiciones económicas."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Certificados en OFSAAI"
                text="Módulo Oracle Financial Services Analytical Applications Infrastructure  (OFSAAI), que agiliza el análisis a través de un conjunto de herramientas para la gestión de datos y administración de seguridad. Estas herramientas ayudan a cargar, validar, categorizar, seleccionar y procesar datos. El conjunto completo de módulos también facilita la gestión de la seguridad a través de un conjunto personalizable de perfiles para controlar los privilegios de los usuarios."
                action={() => alert("clicked")
              }
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Certificados en ALM"
                text="Activo de servicios financieros de Oracle  Módulos Liability Management Analytics  (ALM Analytics) y  Oracle Financial Services Enterprise Financial Performance Analytics  (EFPA), que son herramientas de inteligencia empresarial que contienen informes y paneles predefinidos para ALM y análisis de rendimiento financiero, creados en Oracle Business Intelligence – Enterprise Edition. (OBIEE) herramienta de Oracle."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Certiciados en BSP"
                text="OFSAA Balance Sheet Planning  (BSP), que está diseñado para ayudar a las instituciones de servicios financieros a presupuestar un balance general completo y el estado de pérdidas y ganancias asociado mediante el modelado preciso de los eventos detallados y complejos en el balance de un banco, tanto para el libro de negocios actual y nuevos volúmenes previstos."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          {/* <TestimonialSlider /> */}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;