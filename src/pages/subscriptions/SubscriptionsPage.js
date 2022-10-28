import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { UserContext } from '../../context/UserContext'
import PlanTemplate from './PlanTemplate';
import styled from 'styled-components';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { Link } from 'react-router-dom';


export default function SubscriptionsPage() {
  const { userdata, setUserdata } = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([])
  const token = userdata.token;

  console.log(userdata)

  useEffect(()=>{
    axios
      .get(`${BASE_URL}/subscriptions/memberships`,
      {headers: {Authorization: `Bearer ${token}`},
    })
      .then(resp => {
        console.log(resp.data);
        setSubscriptions(resp.data);
      })
      .catch(err => console.log(err.response.data))
  }, [] )
  

  return (
    <>
      <Container>
        {subscriptions.map((value) => (
          <Link to={`/subscription/${value.id}`} key={value.id} >
            <PlanTemplate  pic={value.image} price={value.price} />
          </Link>
        ))}
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
  a {
    text-decoration: none;
  }
  `