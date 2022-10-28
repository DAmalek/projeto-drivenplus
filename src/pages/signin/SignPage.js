import React from "react";
import { Input } from "../../assets/styles/Input";
import { Button } from "../../assets/styles/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

function SignPage() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    cpf: "",
    password: "",
  });
  const navigate = useNavigate()

  function signRequest(event) {
    event.preventDefault();
    const body = form;

    axios
      .post(`${BASE_URL}/auth/sign-up`, body)
      .then((resp) => {
        console.log(resp.data);
        navigate("/");
      })
      .catch((erro) => alert(erro.response.data.message));
  }

  return (
    <>
      <Container>
        <form onSubmit={signRequest}>
          <Input
            name="name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="text"
            placeholder="Nome"
            required
          />
          <Input
            name="cpf"
            value={form.cpf}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="text"
            placeholder="CPF"
            required
          />
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
            required
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
            required
          />

          <Button>ENTRAR</Button>
        </form>
        <Link to="/">Já possuí uma conta? Entre</Link>
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
  padding-bottom: 050px;

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

export default SignPage;
