import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import returnIcon from "../../assets/images/returnIcon.svg";
import { useEffect,useContext } from "react";
import { BASE_URL } from "../../constants/urls";
import { UserContext } from "../../context/UserContext";
import Benefits from '../../assets/images/Benefits.svg'
import DolarIcon from '../../assets/images/DolarIcon.svg'
import axios from "axios";
import { Input } from "../../assets/styles/Input";
import MembershipForm from "./MembershipForm";


export default function MembershipPage() {
  const { memberId } = useParams();
  const navigate = useNavigate()
  const [membershipData, setMemberShipData] = useState({});
  const [perksm, setPerksm] = useState([]);
  const { userdata, setUserdata }  = useContext(UserContext);

  const token = userdata.token;
  console.log("loou", perksm)

  

  useEffect(() => {
    axios
      .get(`${BASE_URL}/subscriptions/memberships/${memberId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        console.log('teste get', resp);
        setMemberShipData(resp.data);
        setPerksm(resp.data.perks);
        
      })
      .catch((err) => console.log(err.response.data));
  }, [userdata]);

  if (perksm.length == 0){
    return(
      <div>carregando...</div>
    )
  }
  return (
    <>
      <Container>

            <ReturnIcon src={returnIcon} onClick={()=>navigate('/subscriptions')} />
            <img src={membershipData.image} atl="dr" />
            <h1>Driven Plus</h1>
            <PerksContainer>
              <img src={Benefits} atl="b" />
              <span>Benefícios:</span>
              <Perks>
                {perksm.map((value, i) => (
                  <h6 key={value.id}>{`${i+1}. ${value.title}`}</h6>
                ))}
              </Perks>
            </PerksContainer>
            <PerksContainer>
              <img src={DolarIcon} atl="b" />
              <span>Preço:</span>
              <Perks>
                <h6>{`R$${membershipData.price} cobrados mensalmente`}</h6>
              </Perks>
            </PerksContainer>

            <MembershipForm mId={perksm} />
             
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    padding-left: 20px;
    margin: 12px;
  }
  img {
    padding-right: 40px;
  }
`;

const ReturnIcon = styled.img`
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 1;
`;

const PerksContainer = styled.div`
  
  width: 300px;
  margin-top: 16px;
  img {
    padding-right: 0px;
    
  }
  span {
    padding: 0 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

const Perks = styled.div`
  margin-top: 5px;
  h6 {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;
