import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import returnIcon from "../../assets/images/returnIcon.svg";
import { useEffect,useContext } from "react";
import { BASE_URL } from "../../constants/urls";
import { UserContext } from "../../context/UserContext";
import axios from "axios";


export default function MembershipPage() {
  const { membershipId } = useParams();
  const [membershipData, setMemberShipData] = useState();
  const [ userdata, setUserdata ] = useContext(UserContext);
  const token = userdata.token;
  console.log(membershipData)

  useEffect(() => {
    axios
      .get(`${BASE_URL}/subscriptions/memberships/${membershipId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp.data);
       
      })
      .catch((err) => console.log(err.response.data));
  }, []);
  return (
    <>
      <Container>
        <ReturnIcon src={returnIcon} />
        
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
`;

const ReturnIcon = styled.img`
  position: fixed;
  top: 30px;
  left: 30px;
  z-index: 1;
`;
