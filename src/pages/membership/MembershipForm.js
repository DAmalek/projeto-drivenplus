import React from "react";
import styled from "styled-components";
import { Button } from "../../assets/styles/Button";
import { Input } from "../../assets/styles/Input";
import { useState } from "react";

export default function MembershipForm({mId}) {
  const [buyerform, setBuyerForm] = useState({
    membershipId: mId,
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: "",
  });

  console.log(buyerform);
  return (
    <>
      <MemberForm>
        <Input
          name="cardName"
          value={buyerform.cardName}
          onChange={(e) =>
            setBuyerForm({
              ...buyerform,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          placeholder="Nome impresso no cartão"
        />
        <Input
          name="cardNumber"
          value={buyerform.cardNumber}
          onChange={(e) =>
            setBuyerForm({
              ...buyerform,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          placeholder="Digitos do cartão"
        />
        <ShortInput
          name="securityNumber"
          value={buyerform.securityNumber}
          onChange={(e) =>
            setBuyerForm({
              ...buyerform,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          placeholder="Codigo de segurança"
        />
        <ShortInput
          name="expirationDate"
          value={buyerform.expirationDate}
          onChange={(e) =>
            setBuyerForm({
              ...buyerform,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          placeholder="Validade"
        />
        <Button>ASSINAR</Button>
      </MemberForm>
    </>
  );
}
const MemberForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 310px;
`;

const ShortInput = styled.input`
  width: 149px;
  height: 60px;
  border-radius: 8px;
  background-color: white;
  padding-left: 6px;
  margin: 10px 0;

  &::placeholder {
    font-size: 14px;
    color: #7e7e7e;
  }
`;
