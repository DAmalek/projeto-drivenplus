import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../../assets/styles/Button";
import { Input } from "../../assets/styles/Input";
import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { primeryColor } from "../../constants/colors";
import close from '../../assets/images/closeIcon.svg'

export default function MembershipForm({ mId }) {
  const navigate = useNavigate();
  let mydata = JSON.parse(localStorage.getItem('dados'))
  const { userdata, setUserdata } = useContext(UserContext);
  const token = userdata.token;
  const [modalvisible, setModalvisible] = useState(false);
  const [buyerform, setBuyerForm] = useState({
    membershipId: mId[0].membershipId,
    cardName: "fff",
    cardNumber: "1111 2222 3333 4444",
    securityNumber: 111,
    expirationDate: "13/12",
  });
  console.log('local', mydata)
  console.log(modalvisible);
  console.log(buyerform);

  function handleForm(e) {
    e.preventDefault();
    setModalvisible(!modalvisible);
  }

  function buyDrivenPlus() {
    const promise = axios.post(`${BASE_URL}/subscriptions`, buyerform,  {
      headers: { Authorization: `Bearer ${token}` },
    });

    promise.then((resp) => {
      console.log('assinatura', resp.data);
      localStorage.setItem('dados', JSON.stringify(resp.data))
      
      navigate("/home");
    });
    promise.catch((erro) => {
      alert(erro.response.data.message);
      //setLoading(false);
    });
  }

  return (
    <>
      <MemberForm onSubmit={handleForm}>
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
              [e.target.name]: parseFloat(e.target.value),
            })
          }
          type="number"
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

        {modalvisible === true ? (
          <Modal>
            <Closebtn onClick={() => setModalvisible(!modalvisible)}>
              <img src={close} alt='close' />
            </Closebtn>
            <ModalContainer>
              <h1>
                Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?
              </h1>
              <div>
                <Modalbtn
                  color={"#CECECE"}
                  onClick={() => setModalvisible(!modalvisible)}
                >
                  Não
                </Modalbtn>

                <Modalbtn 
                  color={primeryColor} 
                  onClick={buyDrivenPlus}
                >
                  Sim
                </Modalbtn>
              </div>
            </ModalContainer>
          </Modal>
        ) : (
          ""
        )}
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

const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 15%;
  width: 70%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: black;
    text-align: center;
    padding-left: 3px;
  }
`;
const Modalbtn = styled.button`
  width: 90px;
  height: 50px;
  border-radius: 8px;

  background-color: ${(props) => props.color};
  color: white;
  margin: 17px;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
`;

const Closebtn = styled.div`
  position: fixed;
  top: 20px;
  right: -10px;
  cursor: pointer;
`