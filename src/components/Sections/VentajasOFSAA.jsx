import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Principales Ventajas</h1>
            {/* <p className="font13">
              Lorem ipadsdasum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
            <FontAwesomeIcon> icon={faBell}</FontAwesomeIcon>
              <PricingTable
                icon="monitor"
                price=""
                title="Expertos en la industria"
                text="Trabaje con un equipo de expertos que organizarán una transferencia de conocimientos detallada para usted."
                
              />
              
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Soluciones sin código"
                text="Implemente OFSAA y PBSMCS utilizando funcionalidades estándar, lo que permite a los usuarios comerciales mantener los supuestos de OFSAA sin necesidad de codificación de TI (o limitada), simplificando futuros procesos de actualización."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Mejores decisiones"
                text="Mejore las decisiones de gestión determinando las tasas de precios de transferencia utilizando un enfoque de vencimiento igualado."
               
              />
            </TableBox>
            
          </TablesWrapper>
        
          <TablesWrapper className="flexSpaceNull">
          <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Ganancia"
                text="Comprender de dónde provienen las ganancias al difundir los ingresos netos por intereses por costo de los fondos/valor de las fuentes."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Optimización de riesgos"
                text="Gestionar el riesgo de interés y liquidez aislándolos a nivel central."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Metodología"
                text="Implementar varios modelos en los que los costos puedan reconocerse en varios niveles dentro del Banco (productos, clientes, etc.), utilizando un enfoque top/down, bottom/up o mixto."
              />
            </TableBox>
          </TablesWrapper>
          <TablesWrapper className="flexSpaceNull">
          <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Eficiencia"
                text="Afronte los desafíos de la industria bancaria actual al tener una imagen precisa de las ganancias divididas entre cartera, regiones o línea de negocio."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Modelado"
                text="Indicadores ALM del proyecto que utilizan modelos de horizonte temporal flexible y múltiples escenarios de supuestos."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Manejo de datos"
                text="Generar una variedad de indicadores de riesgo financiero proyectados: como brechas de liquidez, brechas de tasas de interés para negocios actuales y nuevos."
              />
            </TableBox>
          </TablesWrapper>
        </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




