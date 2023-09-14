import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Ventajas principales</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price=""
                title="Expertos en OFSAA"
                text="Trabaje con un equipo de expertos de OFSAA que organizarán una transferencia de conocimientos detallada para usted."
                
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Soluciones sin código"
                text="Implementar OFSAA utilizando funcionalidades estándar, lo que permite a los usuarios comerciales mantener los supuestos de OFSAA sin necesidad de codificación de TI (o limitada)."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
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
                title="Soluciones sin código"
                text="Implementar OFSAA utilizando funcionalidades estándar, lo que permite a los usuarios comerciales mantener los supuestos de OFSAA sin necesidad de codificación de TI (o limitada)."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Soluciones sin código"
                text="Implementar OFSAA utilizando funcionalidades estándar, lo que permite a los usuarios comerciales mantener los supuestos de OFSAA sin necesidad de codificación de TI (o limitada)."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Soluciones sin código"
                text="Implementar OFSAA utilizando funcionalidades estándar, lo que permite a los usuarios comerciales mantener los supuestos de OFSAA sin necesidad de codificación de TI (o limitada)."
              />
            </TableBox>
          </TablesWrapper>
          <TablesWrapper className="flexSpaceNull">
          <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Soluciones sin código"
                text="Implementar OFSAA utilizando funcionalidades estándar, lo que permite a los usuarios comerciales mantener los supuestos de OFSAA sin necesidad de codificación de TI (o limitada)."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Soluciones sin código"
                text="Implementar OFSAA utilizando funcionalidades estándar, lo que permite a los usuarios comerciales mantener los supuestos de OFSAA sin necesidad de codificación de TI (o limitada)."
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price=""
                title="Soluciones sin código"
                text="Implementar OFSAA utilizando funcionalidades estándar, lo que permite a los usuarios comerciales mantener los supuestos de OFSAA sin necesidad de codificación de TI (o limitada)."
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




