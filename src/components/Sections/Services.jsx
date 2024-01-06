import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

//
import { FaHeart  } from "react-icons/fa";

export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Servicios</h1>
            <p className="font13">
              Despliegue e implementación de Aplicaciones analíticas de servicios financieros de Oracle para las áreas de Finanzas, Riesgos y Cumplimiento tanto tanto en modalidad on premise (OFSAA) como en su alternativa SaaS (PBSMCS).
              
              Migraciones y actualizaciones de OFSAA a sus versiones actuales y a los servicios de solución en la nube (SaaS).
              
              Actualización y ampliación de las soluciones implementadas acorde a los nuevos y cambiantes requerimientos del negocio.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Precios de Transferencia"
                subtitle="Implementación de una solución que obtiene las tasas y precios de transferencia, así como sus ajustes adicionales, el costo de la opcionalidad embebida, y el costo de las reupturas comerciales. Todas estas medidas a nivel de contrato, para integrarlas en el modelo de rentabilidad."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Rentabilidad"
                subtitle="Implementación de una solución que obtiene el rendimiento (PnL) a nivel de operación, pudiendo integrarse a niveles de Producto, Unidad de Negocios, Línea de Servicios, Segmentos, Canales y todas las dimensiones del negocio. Una visión completa de la rentabilidad de los clientes, sus segmentos y los ejecutivos comerciales."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Gestión de Activos y Pasivos"
                subtitle="Implementación de una solución de Gestión de Activos y Pasivos (ALM), para abordar las perspectivas de negocio y regulatorias de las proyecciones del balance, el estado de resultados e informes de brechas para el cálculo del riesgo de tasa en la cartera bancaria (IRRBB)."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
                icon="monitor" 
                title="Implementación de Planeación del Balance" 
                subtitle="Integre las proyecciones de las cuentas del balance y del estado de resultados en la planeación. Obtenga escenarios de proyección para la gestión del rendimiento y la elaboración de los presupuestos financieros integrando las metodologías de precios de transferencia existentes en la solución de FTP." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Buenas prácticas"
                subtitle="Orientación y experiencia en la definición de supuestos de rentabilidad, Precios de Transferencia (FTP), Rentabilidad (PFT), Gestión de Activos y Pasivos (ALM) y Planeación del Balance (BSP) utilizando las mejores prácticas de la industria."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Focalizado en el usuario"
                subtitle="Refleje los requerimintos del negocio en las soluciones OFSAA (in premise) y PBSMCS (SaaS) para obtener una experiencia analítica y presentación de informes para usuarios analíticos y gerenciales."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Automatizaciones"
                subtitle="Utilización de mejores prácticas para el mantenimiento y evolución de su solución analítica durante la operación de Producción."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
                icon="monitor" 
                title="Capacitación a usuarios" 
                subtitle="Obtenga una guía de operación de su solución analítica completa (OFSAA y PBSMCS), adaptada para usted." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        {/* <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">A Study of Creativity</h2>
                <p className="font12">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;