import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header.js";
import { UserContext } from "../../context/UserContext.js";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls.js";
import { Button } from "../../assets/styles/Button.js";
import { primeryColor } from "../../constants/colors.js";

export default function HomePage() {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("dados"))
  );
  const navigate = useNavigate();
  const { userdata, setUserdata } = useContext(UserContext);
  const token = userdata.token;

  function deleteMembership() {
    axios
      .delete(`${BASE_URL}/subscriptions`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(navigate("/subscriptions"));
  }

  return (
    <>
      <Header pic={localData.membership.image} />
      <Container>
        <h1>Cole, {userdata.name}</h1>
        <div>
          {localData.membership.perks.map((value) => (
            <a key={value.id} href={value.link} target="_blank">
              <Button>{value.title}</Button>
            </a>
          ))}
        </div>
        <div>
          <Button onClick={() => navigate("/subscriptions")}>
            Mudar de plano
          </Button>
          <Cancelbtn onClick={deleteMembership}>Cancelar plano</Cancelbtn>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 170px;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }
  div {
    width: 300px;
  }
  button {
    margin: 4px 0;
  }
  a {
    text-decoration: none;
  }
`;
const Cancelbtn = styled.button`
  width: 310px;
  height: 60px;
  border-radius: 8px;

  background-color: #ff4747;
  color: white;
  margin: 17px 0;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
`;
