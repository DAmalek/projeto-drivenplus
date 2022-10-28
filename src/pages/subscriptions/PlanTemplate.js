import React from "react";
import styled from "styled-components";
import planoBasico from "../../assets/images/planoBasic.svg";
import planoPlus from "../../assets/images/planoPlus.svg";
import planoPrimium from "../../assets/images/planoPrimium.svg";

export default function PlanTemplate({ price }) {
  
  function generatePicture(price) {
    switch (price) {
      case "39.99":
        return planoBasico;
      case "69.99":
        return planoPlus;
      case "99.99":
        return planoPrimium;
    }
  }

  return (
    <>
      <TemplateStyle>
        <img src={generatePicture(price)} alt="minilogo" />
        <h2>{price}</h2>
      </TemplateStyle>
    </>
  );
}

const TemplateStyle = styled.div`
  width: 290px;
  height: 180px;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin: 6px;
  }
`;
