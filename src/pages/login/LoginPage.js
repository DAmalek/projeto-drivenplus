import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { Input } from "../../assets/styles/Input";
import { Button } from "../../assets/styles/Button";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const {userdata, setUserdata} = useContext(UserContext);
  
  function logRequest(event) {
    event.preventDefault()
   // setLoading(true)
    const body = form;
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    
    
    promise.then((resp)=>{
      console.log('usecontext' ,resp.data);
      setUserdata(resp.data);
      localStorage.setItem('dados', JSON.stringify(resp.data))
      
      if(resp.data.membership !== null){
        navigate('/home')
      } else {
        navigate('/subscriptions');
      }
      
    })
    promise.catch((erro) => {
      alert(erro.response.data.message);
      //setLoading(false);
    });
  }
  
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
        <form onSubmit={logRequest}>
          <Input
            name="email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="email"
            placeholder="E-mail"
          />
          <Input
            name="password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="password"
            placeholder="Senha"
          />
          <Button>ENTRAR</Button>
        </form>
        <Link to="sign-up">
          <h3>Não possuí uma conta? Cadastre-se</h3>
        </Link>
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
  padding-bottom: 100px;
  
  img {
    margin-bottom: 130px;
  }
  form {
    display: flex;
    flex-direction: column;
  }

  a {
    margin-top: 20px;
    font-size: 16.6px;
    line-height: 16px;
  }
`;
